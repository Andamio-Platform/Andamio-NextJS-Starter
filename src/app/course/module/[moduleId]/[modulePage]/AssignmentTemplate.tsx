import { queryCourseReferenceUTxObyModule } from "@andamiojs/core";
import React, { Suspense } from "react";
import { andamioConfig } from "../../../../../andamio/config";
import Loading from "../../../../Loading";
import styles from "../../../CoursePage.module.css";
import AssignmentOnChainInfo from "./AssignmentOnChainInfo";
import { TemplateProps } from "./common";

export const dynamic = "force-dynamic";

const AssignmentTemplate = async ({ frontmatter, moduleId, page, children }: TemplateProps) => {

  const myModuleReferenceUTxO = await AssignmentOnChainInfo({moduleId: moduleId})

  return (
    <div className={styles.coursePageContainer}>
      <div className="card bg-secondary text-secondary-content shadow-xl p-5">
        <h3 className="">{frontmatter.title}</h3>
        <h1 className="text-primary text-2xl">{frontmatter.description}</h1>
        <Suspense fallback={<Loading />}>
          {myModuleReferenceUTxO}
        </Suspense>
        {children}
      </div>
    </div>
  );
};

export default AssignmentTemplate;
