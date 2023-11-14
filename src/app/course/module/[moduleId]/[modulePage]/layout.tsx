import React from "react";

import ModuleBreadcrumbs from "./ModuleBreadcrumbs";
import { getFrontmatter } from "./common";
import AssignmentTemplate from "./AssignmentTemplate";
import LessonTemplate from "./LessonTemplate";
import ModuleOverviewTemplate from "./ModuleOverviewTemplate";
import ModulePageDetails from "./modulePage-metadata";

import CourseNavigation from "../../../../../components/courseNavigation/CourseNavigation";
import { getSortedPaths } from "../../../../../components/courseNavigation/getSortedPaths";

import NotFound from "../../../../not-found";

type Props = {
  moduleId: string;
  modulePage: string;
};

export default async function ModulePageLayout({
  params,
  children, // will be a page or nested layout
}: {
  params: Props;
  children: React.ReactNode;
}) {
  const frontmatter = getFrontmatter(params);
  const sortedPaths = await getSortedPaths();

  const layoutComponentMap = {
    Assignment: AssignmentTemplate,
    Lesson: LessonTemplate,
    ModuleOverview: ModuleOverviewTemplate,
  };

  // Assert that frontmatter.type is one of the known keys, if not redirect to NotFound
  const LayoutComponent = frontmatter
    ? layoutComponentMap[frontmatter.type as keyof typeof layoutComponentMap] || NotFound
    : NotFound;

  if (frontmatter) {
    const courseContentComponent = LayoutComponent({
      frontmatter: frontmatter,
      moduleId: params.moduleId,
      page: params.modulePage,
      children: children,
    });

    return (
      <section className="w-full mx-auto">
        {frontmatter && (
          <>
            <div className="mb-5">
              <ModuleBreadcrumbs moduleId={params.moduleId} frontmatter={frontmatter} />
            </div>
            {frontmatter.type === "ModuleOverview" ? (
              <div>{courseContentComponent}</div>
            ) : (
              <div className="">
                <div className="">
                  <div>{courseContentComponent}</div>
                </div>
                {/* <div className="col-span-1 flex flex-col gap-4"> */}
                {/* <ModulePageDetails frontmatter={frontmatter} /> */}
                {/* <ModuleChat frontmatter={frontmatter} /> */}
                {/* </div> */}
              </div>
            )}
            <div className="flex content-center">{sortedPaths && <CourseNavigation sortedPaths={sortedPaths} />}</div>
          </>
        )}
      </section>
    );
  }

  return "Page not found";
}
