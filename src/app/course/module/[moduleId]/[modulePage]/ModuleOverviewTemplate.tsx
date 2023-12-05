import Link from "next/link";
import { SLT } from "@andamiojs/core";
import { TemplateProps } from "./common";
import styles from "../../../CoursePage.module.css";
import { getModuleTitle, getSLTList } from "../../../../../lib/course";
import { getModuleOverviewData } from "../../../../../lib/getModuleOverviewData";

export default async function ModuleOverviewTemplate({ moduleId, children }: TemplateProps) {
  const moduleOverviewValues = await getModuleOverviewData();
  const selectedModuleOverview = moduleOverviewValues.modules.find((selectedModule) => selectedModule.id === moduleId);

  const moduleTitle = getModuleTitle({ moduleId });
  const sltList = getSLTList({ moduleId });

  return (
    <>
      <div className={styles.coursePageContainer}>
        <div className="card bg-secondary text-secondary-content shadow-xl p-5">
          <div className="grid grid-cols-3 py-3">
            <header className="col-span-2">
              <h3 className="text-accent">Welcome to Module {moduleId}</h3>
              <h1 className="">{moduleTitle}</h1>
              <div className="my-5">
                <h4 className="">Student Learning Targets</h4>
                {sltList.map((slt: SLT) => (
                  <div className={styles.slt} key={slt.id}>
                    <span className="text-info">{slt.id}:</span> {slt.slt}
                  </div>
                ))}
              </div>
            </header>
            <div className="grid w-5/6 mx-auto">
              {selectedModuleOverview?.pages.map((page) => (
                <div className="" key={page.slug}>
                  {page.type != "ModuleOverview" && (
                    <Link href={`/course/module/${selectedModuleOverview.id}/${page.slug}`}>
                      <div className="hover:bg-info text-secondary-content p-3 mb-5">
                        <div className="mb-3 pb-1 border-b border-primary text-xl">{page.title}</div>
                        <div className="font-bold">{page.description}</div>
                        <div className="text-sm">Edited on: {page.lastEdited}</div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <hr className="my-10" />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
