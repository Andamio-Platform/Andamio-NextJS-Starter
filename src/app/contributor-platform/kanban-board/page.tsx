import {
  GraphQL,
  ProjectData,
  escrowByContractToken,
  hexToString,
  queryEscrowsInfo,
  queryTreasuryInfo,
} from "@andamiojs/core";
import blake2b from "blake2b";
import { gql } from "graphql-request";
import Link from "next/link";
import { andamioConfig } from "../../../andamio/config";
import CommitModal from "../../../components/modals/projects/CommitModal";
import DistributeModal from "../../../components/modals/projects/DistributeModal";
import ManageAddProjectModal from "../../../components/modals/projects/ManageAddProjectModal";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

async function getNotionLink(
  project: ProjectData
): Promise<{ project: ProjectData; notionLink: string }> {
  let item: { project: ProjectData; notionLink: string };

  let projectDetails;
  if (project.contributorAsset) {
    const { contributorAsset, ...details } = project;
    projectDetails = details;
  } else {
    projectDetails = project;
  }

  const output = new Uint8Array(28);
  const input = Buffer.from(JSON.stringify(projectDetails));
  const hexadecimalString = blake2b(output.length).update(input).digest("hex");
  const bigIntValue = BigInt("0x" + hexadecimalString);
  const key = Number(bigIntValue.toString().substring(0, 10));
  console.log("this", key);

  const graphql = new GraphQL(andamioConfig.network);

  try {
    const res: any = await graphql.graphQLClient.request(
      gql`
        query getTransactionMetadataByKey($key: String!) {
          transactions(where: { metadata: { key: { _eq: $key } } }) {
            metadata {
              key
              value
            }
          }
        }
      `,
      {
        key: key.toString(),
      }
    );

    if (res.transactions[0]) {
      console.log("res", res.transactions[0].metadata[0].value.join(""));
      item = {
        project: project,
        notionLink: res.transactions[0].metadata[0].value.join(""),
      };
    } else {
      console.log("res", "no notion link");
      item = {
        project: project,
        notionLink: "#",
      };
    }
    return item;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function KanbanBoard() {
  if (
    !process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes(
      "kanbanboard"
    )
  ) {
    redirect("/404");
  }

  const TreasuryInfo = await queryTreasuryInfo(andamioConfig);
  console.log("Treasury info", TreasuryInfo.data);

  const EscrowInfo = await queryEscrowsInfo(andamioConfig);
  console.log("Escrow info", TreasuryInfo.data);

  const to_do_list = [];

  for (const project of TreasuryInfo.data) {
    to_do_list.push(await getNotionLink(project));
  }

  const in_progress_list = [];

  for (const project of EscrowInfo.data) {
    in_progress_list.push(await getNotionLink(project));
  }

  return (
    <main>
      <div className="flex justify-center items-center m-10 w-full">
        <ManageAddProjectModal />
      </div>
      <div className="grid grid-cols-2 p-5 mx-10">
        <div className="mx-10">
          <h1 className="text-2xl text-black">TO-DO</h1>
          {to_do_list.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">
                    {hexToString(item.project.projectHashId)}
                  </h2>
                  <p>
                    {
                      escrowByContractToken(
                        andamioConfig,
                        item.project.contractToken
                      ).name
                    }
                  </p>
                  {item.notionLink !== "#" ? (
                    <Link href={item.notionLink}>Notion Link</Link>
                  ) : (
                    <p>No notion link</p>
                  )}
                  <div className="card-actions justify-end">
                    <CommitModal selectedProject={item.project} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-10">
          <h1 className="text-2xl text-black">IN PROGRESS</h1>
          {in_progress_list.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="card bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">
                    {hexToString(item.project.projectHashId)}
                  </h2>
                  <p>
                    {
                      escrowByContractToken(
                        andamioConfig,
                        item.project.contractToken
                      ).name
                    }
                  </p>
                  {item.notionLink !== "#" ? (
                    <Link href={item.notionLink}>Notion Link</Link>
                  ) : (
                    <p>No notion link</p>
                  )}
                  <div className="card-actions justify-end">
                    {" "}
                    <DistributeModal selectedProject={item.project} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
