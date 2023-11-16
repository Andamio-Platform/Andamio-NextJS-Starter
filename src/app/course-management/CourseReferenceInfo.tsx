import { DataBox } from "../../components/ui/DataBox";
import { andamioConfig } from "../../andamio/config";
import React from "react";
import { queryCourseReferenceInfo } from "@andamiojs/core";
import Link from "next/link";

const CourseReferenceInfo = async () => {
  const CourseReferenceInfo = await queryCourseReferenceInfo(andamioConfig);
  return (
    <div className="card bg-secondary my-5 p-5 grid grid-cols-4 gap-5 content-center w-3/4 mx-auto border border-primary ">
      <div className="col-span-3 prose text-secondary-content my-auto">
      <h2 className="text-6xl pt-5 text-secondary-content">Course Creators</h2>
        <p>Course Creators build learning modules, and when ready, deploy learning modules on chain.</p>
        <p>Each Course Module consists of a set of <Link href="">Student Learning Targets</Link>, Lessons, and an Assignment that allows Learners to demonstrate expertise.</p>
        <p>Once a Course Module is minted on-chain, Learners can commit to it, and build up their reputation in a learning community.</p>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <DataBox value={CourseReferenceInfo.utxos.length} label="Course Modules" />
      </div>

      <div className="col-span-4 flex flex-row justify-between w-3/4 mx-auto">
          <Link className="btn btn-wide btn-primary mx-auto" href="/course-management/module-list">
            View Course Modules
          </Link>
      </div>
    </div>
  );
};

export default CourseReferenceInfo;
