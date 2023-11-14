import {
  escrowByContractToken,
  hexToString,
  posixToDateString,
  queryContribRefInfo,
  queryEscrowsInfo,
  queryTreasuryInfo,
} from "@andamiojs/core";
import { Suspense } from "react";
import Link from "next/link";
import { andamioConfig } from "../../../andamio/config";
import Loading from "../../Loading";
import { cache } from 'react'

export const revalidate = 30 // revalidate the data at most every 30s

const ContributorsTable = cache(async () => {
  const ContribRefInfo = await queryContribRefInfo(andamioConfig);
  return (
    <tbody>
      {ContribRefInfo.data.map((contrib, index) => {
        return (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-gray-600" : "bg-gray-700"}
          >
            <th className="px-6 py-4">{index + 1}</th>
            <td className="px-6 py-4">
              {hexToString(contrib.contributorRefAssetId.slice(56))}
            </td>
            <td className="px-6 py-4">{contrib.rewardAddress}</td>
            <td className="px-6 py-4">{contrib.numCompletedProjects}</td>
          </tr>
        );
      })}
    </tbody>
  );
});

export default async function Contributors() {
  const projectsTable = await ContributorsTable();
  return (
    <main className="flex flex-col items-center justify-center font-semibold">
      <div className="mt-20">
        {
          <Suspense fallback={<Loading />}>
            <table className="w-full border-collapse border border-gray-400 mb-40">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-6 py-3 text-left">#</th>
                  <th className="px-6 py-3 text-left">Contributor</th>
                  <th className="px-6 py-3 text-left">Reward Address</th>
                  <th className="px-6 py-3 text-left">Completed Commitments</th>
                </tr>
              </thead>
              {projectsTable}
            </table>
          </Suspense>
        }
      </div>
    </main>
  );
}
