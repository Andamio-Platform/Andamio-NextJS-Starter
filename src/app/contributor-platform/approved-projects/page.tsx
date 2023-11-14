import {
  escrowByContractToken,
  hexToString,
  posixToDateString,
  queryTreasuryInfo,
} from "@andamiojs/core";
import { andamioConfig } from "../../../andamio/config";
import { Suspense } from "react";
import Loading from "../../Loading";
import CommitModal from "../../../components/modals/projects/CommitModal";
import { cache } from 'react'

export const revalidate = 30 // revalidate the data at most every 30s

const ProjectsTable = cache(async () => {
  const TreasuryInfo = await queryTreasuryInfo(andamioConfig);
  return (
    <tbody>
      {TreasuryInfo.data.map((project, index) => (
        <tr
          key={index}
          className={index % 2 === 0 ? "bg-gray-600" : "bg-gray-700"}
        >
          <th className="px-6 py-4">{index + 1}</th>
          <td className="px-6 py-4">{hexToString(project.projectHashId)}</td>
          <td className="px-6 py-4">
            {escrowByContractToken(andamioConfig, project.contractToken).name}
          </td>
          <td className="px-6 py-4">
            {posixToDateString(project.expirationTime)}
          </td>
          <td className="px-6 py-4">{project.lovelaceAmount / 1000000}</td>
          <td className="px-6 py-4">{project.projectTokenAmount}</td>
          <td className="px-6 py-4">
            {<CommitModal selectedProject={project} />}
          </td>
        </tr>
      ))}
    </tbody>
  );
});

export default async function ApprovedProjects() {
  const projectsTable = await ProjectsTable();
  return (
    <main className="flex flex-col items-center justify-center font-semibold">
      <div className="mt-20">
        {
          <Suspense fallback={<Loading />}>
            <table className="w-full border-collapse border border-gray-400 mb-40">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-6 py-3 text-left">#</th>
                  <th className="px-6 py-3 text-left">Project</th>
                  <th className="px-6 py-3 text-left">Escrow</th>
                  <th className="px-6 py-3 text-left">Expiration</th>
                  <th className="px-6 py-3 text-left">ADA</th>
                  <th className="px-6 py-3 text-left">tGimbals</th>
                  <th className="px-6 py-3 text-left"></th>
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
