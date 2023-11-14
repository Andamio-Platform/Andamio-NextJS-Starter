import fs from 'fs';
import path from 'path';
import { ModuleMarkdocPage, ModuleDirectory, CourseModule, SLT } from '@andamiojs/core';
import courseOutline from '../andamio/data/course.json'

const courseDirectory = path.join(process.cwd(), '/src/andamio/course');

export const getCourseOutlineData = async () => {
  // Get file names under /src/course
  const moduleNames = fs.readdirSync(courseDirectory);
  const moduleList: ModuleDirectory[] = [];

  moduleNames.forEach(async (moduleId) => {
    const modulePath = path.join(courseDirectory, moduleId);
    const checkIsDir = fs.statSync(modulePath);

    if (checkIsDir.isDirectory()) {
      const pageFiles = fs.readdirSync(modulePath);
      const pages: ModuleMarkdocPage[] = [];

      pageFiles.forEach(async (page) => {
        const _title = page.replace(/\.md$/, '');
        const _pagePath = path.join(modulePath, page);
        const _contents = fs.readFileSync(_pagePath, 'utf8');
        pages.push({ _title, _contents });
      });
      moduleList.push({ moduleId, pages });
    }
  });

  return moduleList;
};

export function getModuleTitle({ moduleId }: { moduleId: string }) {
  const currentModule = courseOutline.modules.find(
    (module: CourseModule) => module.id === moduleId,
  );

  if (currentModule) {
    return currentModule.title;
  }

  return 'Module Not Found';
}

export function getSLTText({ sltId }: { sltId: string }) {
  const modules = courseOutline.modules;
  for (const moduleInfo of modules) {
    const slt = moduleInfo.slts.find((slt) => slt.id === sltId);
    if (slt) return slt.slt;
  }
  return 'SLT not found';
}

export function getSLTList(
  options: { sltIds: string[] } | { moduleId: string },
) {
  const _result: SLT[] = [];

  if ('sltIds' in options) {
    options.sltIds.forEach((sltId: string) => {
      _result.push({
        id: sltId,
        slt: getSLTText({ sltId: sltId }),
      });
    });
  }

  if ('moduleId' in options) {
    const moduleList = courseOutline.modules.find(
      (moduleItem) => moduleItem.id === options.moduleId,
    );
    moduleList?.slts.forEach((slt: SLT) => {
      _result.push(slt);
    });
  }

  return _result;
}

export function getPageContent(moduleId: string, pageId: string) {
  const pageFileName = pageId + '.md';
  const fullPath = path.join(courseDirectory, moduleId, pageFileName);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  return fileContents;
}
