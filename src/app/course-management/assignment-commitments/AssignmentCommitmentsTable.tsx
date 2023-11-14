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
      <table className="w-full border-collapse border border-gray-400 text-left">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Learner Token</th>
            <th className="px-6 py-3">Module Id</th>
            <th className="px-6 py-3">Assignment Details</th>
            <th className="px-6 py-3">Assignment Info Status</th>
            <th className="px-6 py-3">Student Actions</th>
            <th className="px-6 py-3">Accept</th>
            <th className="px-6 py-3">Deny</th>
          </tr>
        </thead>
        {AssignmentInfo.utxos.map((assignment, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-600" : "bg-gray-700"}>
            <td className="px-6 py-4">{index + 1}</td>
            <td className="px-6 py-4">{assignment.data?.learnerTokenName}</td>
            <td className="px-6 py-4">{assignment.data?.moduleId}</td>
            <td className="px-6 py-4">{assignment.data?.assignmentName}</td>
            <td className="px-6 py-4">{assignment.data?.studentAssignmentInfo}</td>
            <td className="px-6 py-4">
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
