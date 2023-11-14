import { DataBox } from "../../components/ui/DataBox";
import { andamioConfig } from "../../andamio/config";
import React from "react";
import { queryAssignmentValidatorInfo } from "@andamiojs/core";
import Link from "next/link";

const AssignmentInfo = async () => {
  const AssignmentInfo = await queryAssignmentValidatorInfo(andamioConfig);
  return (
    <div className="card bg-secondary my-5 p-5 grid grid-cols-4 gap-5 content-center w-3/4 mx-auto opacity-90">
      <div className="col-span-3 prose text-secondary-content my-auto">
        <h2 className="text-6xl pt-5 text-secondary-content">Course Facilitators</h2>
        <p>
          Here is how Assignments work. Anyone can commit and start learning. Deciders look for evidence and distribute
          commitments.
        </p>
        <p>The Assignment Info part is important, we will want to talk about that.</p>
      </div>
      <div className="col-span-1 flex flex-col gap-3 p-3">
        <DataBox value={AssignmentInfo.utxos.length} label="Commitments" />
      </div>
      <div className="col-span-4 flex flex-row justify-between w-full mx-auto">
        <Link className="btn btn-wide btn-primary mx-auto" href="/course-management/assignment-commitments">
          View Current Commitments
        </Link>
      </div>
    </div>
  );
};

export default AssignmentInfo;
