import { hexToString, queryContribRefInfo } from "@andamiojs/core";
import { andamioConfig } from "../../../andamio/config";

export const dynamic = "force-dynamic";

export default async function ContributorTable() {
  const ContribRefInfo = await queryContribRefInfo(andamioConfig);

  return (
    <tbody>
      <table className="table">
        <thead>
          <tr className="text-secondary-content">
            <th className="">#</th>
            <th className="">Contributor</th>
            <th className="">Reward Address</th>
            <th className="">Completed Commitments</th>
          </tr>
        </thead>
        {ContribRefInfo.data.map((contrib, index) => {
          return (
            <tr key={index}>
              <th className="">{index + 1}</th>
              <td className="">{hexToString(contrib.contributorRefAssetId.slice(56))}</td>
              <td className="">{contrib.rewardAddress}</td>
              <td className="">{contrib.numCompletedProjects}</td>
            </tr>
          );
        })}
      </table>
    </tbody>
  );
}
