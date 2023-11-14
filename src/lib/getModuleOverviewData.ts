import { CourseModule, ModuleOverview } from '@andamiojs/core';
import { parseMarkdocFrontmatter } from '../utils/markdown';
import Markdoc from '@markdoc/markdoc';
import { getCourseOutlineData } from './course';
import courseOutline from '../andamio/data/course.json'

function sortOverviewToTop(
  moduleOverviewList: ModuleOverview[],
): ModuleOverview[] {
  moduleOverviewList.forEach((module) => {
    const overviewIndex = module.pages.findIndex(
      (item) => item.slug === 'overview',
    );

    if (overviewIndex !== -1) {
      // If an item with slug "overview" is found, move it to the beginning of the array (index 0).
      module.pages.unshift(module.pages.splice(overviewIndex, 1)[0]);
    }
  });
  return moduleOverviewList;
}

export async function getModuleOverviewData(): Promise<{
  modules: ModuleOverview[];
}> {
  const courseData = await getCourseOutlineData();
  const modulesMap = new Map<string, ModuleOverview>();

  for (const item of courseData) {
    if (!item.pages) continue;

    if (!modulesMap.has(item.moduleId)) {
      const currentModule = courseOutline.modules.find(
        (module: CourseModule) => module.id === item.moduleId,
      );
      modulesMap.set(item.moduleId, {
        id: item.moduleId,
        title: currentModule ? currentModule.title : '',
        pages: [],
      });
    }

    for (const page of item.pages) {
      if (page._contents) {
        const pageAST = Markdoc.parse(page._contents);
        const frontmatter = parseMarkdocFrontmatter(pageAST);

        const moduleList = modulesMap.get(item.moduleId);
        if (moduleList && frontmatter) {
          frontmatter.slug = page._title;
          moduleList.pages.push(frontmatter);
        }
      }
    }
  }

  const sortedValues = sortOverviewToTop(Array.from(modulesMap.values()));
  const moduleOverviewValues = { modules: sortedValues };
  return moduleOverviewValues;
}
