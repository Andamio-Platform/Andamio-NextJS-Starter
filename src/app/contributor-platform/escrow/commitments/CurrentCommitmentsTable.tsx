import {
  escrowByContractToken,
  hexToString,
  posixToDateString,
  queryEscrowsInfo,
  queryTreasuryInfo,
} from "@andamiojs/core";
import { andamioConfig } from "../../../../andamio/config";
import DistributeModal from "../../../../components/modals/projects/DistributeModal";

export const dynamic = "force-dynamic";

export default async function CurrentCommitmentsTable() {
  const EscrowInfo = await queryEscrowsInfo(andamioConfig);

  return (
    <tbody>
      <table className="table">
        <thead>
          <tr className="bg-primary text-primary-content">
            <th className="">#</th>
            <th className="">Project</th>
            <th className="">Escrow</th>
            <th className="">Expiration</th>
            <th className="">ADA</th>
            <th className="">tGimbals</th>
            <th className="">Contributor</th>
            <th className=""></th>
          </tr>
        </thead>
        {EscrowInfo.data.map((project, index) => {
          const projectString = JSON.stringify(project, null, 2);
          return (
            <tr key={index}>
              <th className="">{index + 1}</th>
              <td className="">{hexToString(project.projectHashId)}</td>
              <td className="">{escrowByContractToken(andamioConfig, project.contractToken).name}</td>
              <td className="">{posixToDateString(project.expirationTime)}</td>
              <td className="">{project.lovelaceAmount / 1000000}</td>
              <td className="">{project.projectTokenAmount}</td>
              <td className="">{hexToString(project.contributorAsset!.slice(56))}</td>
              <td className="">{<DistributeModal selectedProject={project} />}</td>
              <td className="text-xs font-mono"><pre>{projectString}</pre></td>
            </tr>
          );
        })}
      </table>
    </tbody>
  );
}
