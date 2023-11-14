import { LearnerReferenceUTxO, queryLearnerReferenceInfo } from "@andamiojs/core";
import { andamioConfig } from "../../../andamio/config";
import LearnerCard from "./LearnerCard";

export default async function LearnerCardList() {
  const learnerReferenceInfo = await queryLearnerReferenceInfo(andamioConfig);

  return (
    <div className="my-10 w-5/6 mx-auto grid grid-cols-4 gap-10">
      <div className="col-span-1">
        <h1 className="text-4xl text-secondary-content py-10">{andamioConfig.title} Learner Tokens</h1>
      </div>
      <div className="col-span-3">
        <table className="table table-fixed bg-primary text-primary-content">
          {/* head */}
          <thead>
            <tr className="text-lg text-info">
              <th>Learner Token Name</th>
              <th>Info</th>
              <th className="text-center"># Completed Assignments</th>
              <th className="text-center">Most Recent Module</th>
            </tr>
          </thead>
          <tbody>
            {learnerReferenceInfo.utxos.map((learnerUTxO: LearnerReferenceUTxO, index) => (
              // <LearnerCard learnerUTxO={learnerUTxO} key={index} />
              <tr key={learnerUTxO.data?.contributorAlias} className="text-lg">
                <th>{learnerUTxO.data?.contributorAlias}</th>
                <th>{learnerUTxO.data?.learnerInfo}</th>
                <th className="text-center">{learnerUTxO.data?.completedAssignments.length}</th>
                <th className="text-center">{learnerUTxO.data?.completedAssignments.pop()}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
