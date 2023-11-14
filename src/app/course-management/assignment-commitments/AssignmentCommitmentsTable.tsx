import { queryAssignmentValidatorInfo } from "@andamiojs/core";
import AcceptAssignmentModal from "../../../components/modals/course/AcceptAssignmentModal";
import DenyAssignmentModal from "../../../components/modals/course/DenyAssignmentModal";
import StudentRemoveAssignmentModal from "../../../components/modals/course/StudentRemoveAssignmentModal";
import StudentUpdateAssignmentModal from "../../../components/modals/course/StudentUpdateAssignmentModal";
import { andamioConfig } from "../../../andamio/config";

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
            <th className="">Accept</th>
            <th className="">Deny</th>
          </tr>
        </thead>
        {AssignmentInfo.utxos.map((assignment, index) => (
          <tr key={index}>
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{assignment.data?.learnerTokenName}</td>
            <td className="px-6 py-4">{assignment.data?.moduleId}</td>
            <td className="px-6 py-4">{assignment.data?.assignmentName}</td>
            <td className="px-6 py-4">{assignment.data?.studentAssignmentInfo}</td>
            <td className="flex flex-row gap-5">
              {<StudentRemoveAssignmentModal assignment={assignment} />}
              {<StudentUpdateAssignmentModal assignment={assignment} />}
            </td>
            <td className="px-6 py-4">{<AcceptAssignmentModal assignment={assignment} />}</td>
            <td className="px-6 py-4">{<DenyAssignmentModal assignment={assignment} />}</td>
          </tr>
        ))}
      </table>
    </tbody>
  );
};

export default AssignmentCommitmentsTable;
