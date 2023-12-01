import { DataBox } from "../../components/ui/DataBox";
import { andamioConfig } from "../../andamio/config";
import React from "react";
import { queryAssignmentValidatorInfo } from "@andamiojs/core";
import Link from "next/link";

const AssignmentInfo = async () => {
  const AssignmentInfo = await queryAssignmentValidatorInfo(andamioConfig);
  return (
    <div className="card bg-secondary my-5 p-5 grid grid-cols-4 gap-5 content-center border border-primary ">
      <div className="col-span-3 prose text-secondary-content my-auto">
        <h2 className="text-3xl pt-5 text-secondary-content">Course Facilitators</h2>
        <p>
          Course Facilitors can view the commitments made by Learners. Facilitators review evidence, and then approve or deny Assignments.
        </p>
        <p>When a Learner commits to a Course Module, they are prompted to submit evidence that an Assignment is complete. This evidence might relate to on-chain transactions, git contributions, or in-person participation. Course Creators and Facilitators can be creative with the possibilities! As the Andamio Network grows, we will invite you to share your favorite ideas for how Assignments are used.</p>
      </div>
      <div className="col-span-1 flex flex-col gap-3 p-3">
        <DataBox value={AssignmentInfo.utxos.length} label="Commitments" />
      </div>
      <div className="col-span-4 flex flex-row justify-between w-full mx-auto border-t border-primary pt-5">
        <Link className="btn btn-wide btn-primary mx-auto" href="/course-management/assignment-commitments">
          View Current Commitments
        </Link>
      </div>
    </div>
  );
};

export default AssignmentInfo;
