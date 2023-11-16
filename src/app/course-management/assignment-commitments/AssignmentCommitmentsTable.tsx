import { queryAssignmentValidatorInfo } from "@andamiojs/core";
import AcceptAssignmentModal from "../../../components/modals/course/AcceptAssignmentModal";
import DenyAssignmentModal from "../../../components/modals/course/DenyAssignmentModal";
import StudentRemoveAssignmentModal from "../../../components/modals/course/StudentRemoveAssignmentModal";
import StudentUpdateAssignmentModal from "../../../components/modals/course/StudentUpdateAssignmentModal";
import { andamioConfig } from "../../../andamio/config";
import { useAddress } from "@meshsdk/react";
import { useEffect, useState } from "react";
import { resolvePaymentKeyHash } from "@meshsdk/core";
import LearnerActionButtons from "./LearnerActionButtons";

export const dynamic = "force-dynamic";

const AssignmentCommitmentsTable = async () => {
  const AssignmentInfo = await queryAssignmentValidatorInfo(andamioConfig);


  return (
    <tbody>
      <table className="table">
        <thead>
          <tr className="text-secondary-content">
            <th className="">#</th>
            <th className="">Learner Token</th>
            <th className="">Module Id</th>
            <th className="">Assignment Details</th>
            <th className="">Assignment Info Status</th>
            <th className="">Student Actions</th>
            <th className="">Facilitator Actions</th>
          </tr>
        </thead>
        {AssignmentInfo.utxos.map((assignment, index) => (
          <tr key={index}>
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{assignment.data?.learnerTokenName}</td>
            <td className="px-6 py-4">{assignment.data?.moduleId}</td>
            <td className="px-6 py-4">{assignment.data?.assignmentName}</td>
            <td className="px-6 py-4">{assignment.data?.studentAssignmentInfo}</td>
            <td className="gap-5 py-4">
              <LearnerActionButtons assignment={assignment} />
            </td>
            <td className="gap-5 py-4">
              <div className="flex flex-row gap-3">
                {<AcceptAssignmentModal assignment={assignment} />}
                {<DenyAssignmentModal assignment={assignment} />}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </tbody>
  );
};

export default AssignmentCommitmentsTable;
