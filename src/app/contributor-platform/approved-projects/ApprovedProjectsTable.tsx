import { escrowByContractToken, hexToString, posixToDateString, queryTreasuryInfo } from "@andamiojs/core";
import { andamioConfig } from "../../../andamio/config";
import CommitModal from "../../../components/modals/projects/CommitModal";

export const dynamic = "force-dynamic";

export default async function ApprovedProjectsTable() {
  const TreasuryInfo = await queryTreasuryInfo(andamioConfig);

  return (
    <tbody>
      <table className="table">
        <thead>
          <tr className="text-secondary-content">
            <th className="">#</th>
            <th className="">Project</th>
            <th className="">Escrow</th>
            <th className="">Expiration</th>
            <th className="">ADA</th>
            <th className="">tGimbals</th>
            <th className="">Buttons</th>
          </tr>
        </thead>
        {TreasuryInfo.data.map((project, index) => (
          <tr key={index}>
            <th className="">{index + 1}</th>
            <td className="">{hexToString(project.projectHashId)}</td>
            <td className="">{escrowByContractToken(andamioConfig, project.contractToken).name}</td>
            <td className="">{posixToDateString(project.expirationTime)}</td>
            <td className="">{project.lovelaceAmount / 1000000}</td>
            <td className="">{project.projectTokenAmount}</td>
            <td className="">{<CommitModal selectedProject={project} />}</td>
          </tr>
        ))}
      </table>
    </tbody>
  );
};

