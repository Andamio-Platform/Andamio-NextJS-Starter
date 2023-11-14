import { LearnerReferenceUTxO, queryLearnerReferenceInfo } from "@andamiojs/core";
import { andamioConfig } from "../../../andamio/config";
import LearnerCard from "./LearnerCard";

export default async function LearnerCardList() {
  const learnerReferenceInfo = await queryLearnerReferenceInfo(andamioConfig);

  return (
    <div className="my-10 w-3/4 mx-auto">
      <h1 className="text-6xl text-primary py-10">{andamioConfig.title} Learners</h1>
      <table className="table table-fixed text-lg">
        {/* head */}
        <thead>
          <tr className="text-lg">
            <th>Learner Token Name</th>
            <th>Info</th>
            <th className="text-center"># Completed Assignments</th>
            <th className="text-center">Most Recent Module</th>
          </tr>
        </thead>
        <tbody>
          {learnerReferenceInfo.utxos.map((learnerUTxO: LearnerReferenceUTxO, index) => (
            // <LearnerCard learnerUTxO={learnerUTxO} key={index} />
            <tr key={learnerUTxO.data?.contributorAlias}>
              <th>{learnerUTxO.data?.contributorAlias}</th>
              <th>{learnerUTxO.data?.learnerInfo}</th>
              <th className="text-center">{learnerUTxO.data?.completedAssignments.length}</th>
              <th className="text-center">{learnerUTxO.data?.completedAssignments.pop()}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
