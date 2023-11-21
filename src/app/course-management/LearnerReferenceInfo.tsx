import { DataBox } from "../../components/ui/DataBox";
import { andamioConfig } from "../../andamio/config";
import React from "react";
import { queryLearnerReferenceInfo } from "@andamiojs/core";
import Link from "next/link";
import MintLearnerTokenModal from "../../components/modals/course/MintLearnerTokenModal";

const LearnerReferenceInfo = async () => {
  const LearnerReferenceInfo = await queryLearnerReferenceInfo(andamioConfig);
  return (
    <div className="card bg-secondary my-5 p-5 grid grid-cols-4 gap-5 content-center border border-primary ">
      <div className="col-span-3 prose text-secondary-content my-auto">
        <h2 className="text-3xl pt-5 text-secondary-content">Learner Token</h2>
        <p>
          Anyone can <Link href="/course" className="font-bold text-primary hover:text-info">start learning for free, anytime</Link> in an Andamio PBL Course. A Learner Token allows you to create an on-chain record of what you know and can do, and to share it across the Andamio Network and beyond.
        </p>
        <p>Build up a record of accomplishments. Mint Contributor Tokens for projects that interest to you, based on your accomplishments. Engage in decision-making and governace when it matters to you.</p>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <DataBox value={LearnerReferenceInfo.utxos.length} label="Learners" />
      </div>
      <div className="col-span-4 flex flex-row justify-between w-full mx-auto border-t border-primary pt-5">
        <MintLearnerTokenModal />
        <Link className="btn btn-wide btn-primary" href="/course-management/roles/learner/dashboard">
          Learner Dashboard
        </Link>
        <Link className="btn btn-wide btn-primary" href="/course-management/learner-list">
          View all Learners
        </Link>
      </div>
    </div>
  );
};

export default LearnerReferenceInfo;
