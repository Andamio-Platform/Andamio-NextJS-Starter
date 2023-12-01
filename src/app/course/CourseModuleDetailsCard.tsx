import { CourseModule, CourseReferenceInfo, hashCourseModule, ModuleOverview, SLT } from "@andamiojs/core";
import Image from "next/image";
import Link from "next/link";
import AddLearnerPolicyIDModal from "../../components/modals/course/AddLearnerPolicyIDModal";
import BurnCourseModuleTokenModal from "../../components/modals/course/BurnCourseModuleTokenModal";
import CommitToAssignmentModal from "../../components/modals/course/CommitToAssignmentModal";
import MintModuleTokenModal from "../../components/modals/course/MintModuleTokenModal";
import getAssignment from "./utils/getAssignment";
import getOnchainCourseModule from "./utils/getOnchainCourseModule";
import getPublishedCourseContent from "./utils/getPublishedCourseContent";

export default function CourseModuleDetailsCard(props: {
  courseJSON: CourseModule;
  onChainModules: CourseReferenceInfo;
  publishedContent: ModuleOverview[];
}) {
  const moduleOnChain = getOnchainCourseModule(props.courseJSON, props.onChainModules);
  const modulePublished = getPublishedCourseContent(props.courseJSON, props.publishedContent);

  return (
    <div
      className="card border border-primary bg-secondary text-secondary-content shadow-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5"
      key={props.courseJSON.id}
    >
      <div className="md:col-span-2 lg:col-span-3 p-4">
        <div className="flex flex-col py-1 justify-between">
          <h5 className="text-accent text-sm font-bold">Module {props.courseJSON.id}</h5>
          <h2 className="w-11/12">{props.courseJSON.title}</h2>
          <div className="flex flex-row gap-5">
            {modulePublished ? (
              <>
                <Link href={`/course/module/${props.courseJSON.id}/overview`}>
                  <button className="btn btn-sm btn-success hover:scale-105">Learn</button>
                </Link>
                {moduleOnChain && <CommitToAssignmentModal selectedModuleUTxO={moduleOnChain} />}
              </>
            ) : (
              <button className="btn btn-sm btn-info">Coming Soon</button>
            )}
          </div>
        </div>
        <div className="p-1 text-lg">
          <ul className="list-disc pl-5">
            {props.courseJSON.slts.map((slt: SLT, index: number) => (
              <li className="font-light" key={index}>
                {slt.id}: {slt.slt}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full col-span-1 row-span-2 bg-primary text-primary-content">
        <div className="p-5">
          <pre className="pb-1 text-sm">Assignment:</pre>
          <pre className="pb-3 text-sm">{getAssignment(props.courseJSON, props.onChainModules)}</pre>

          <div className="flex flex-col gap-5 mt-5">
            <div className="tooltip hover:scale-105" data-tip={`Click to view Assignment ${props.courseJSON.id}`}>
              <Link href={`/course/module/${props.courseJSON.id}/assignment${props.courseJSON.id}`}>
                <Image src="/icons/assignment-primary2-sm.png" width={30} height={30} alt="assignment" />
              </Link>
            </div>
            <a href="https://andamio.notion.site/Andamio-On-Chain-Course-Modules-3d04a6dc28684f019e75e22ea94ed9b7">
              <div
                className="tooltip hover:scale-105"
                data-tip="You can verify that this Module is deployed on-chain. Click to learn more."
              >
                <Image src="/icons/validate-primary-sm.png" width={30} height={30} alt="validate" />
              </div>
            </a>
          </div>
          {moduleOnChain && (
            <div className="flex flex-col gap-5">
              <div>{<AddLearnerPolicyIDModal selectedModuleUTxO={moduleOnChain} />}</div>
              <BurnCourseModuleTokenModal selectedModuleUTxO={moduleOnChain} />
            </div>
          )}
        </div>
      </div>
      <div className="col-span-3 text-sm">
        {moduleOnChain?.data?.moduleId ? (
          <>
            {props.courseJSON.id == moduleOnChain?.data?.moduleId ? (
              <div className="bg-success p-2 font-mono rounded-b-[0.2rem]">
                Module is deployed on-chain and Module Id matches module token name
              </div>
            ) : (
              <div className="bg-warning p-2 rounded-b-[0.2rem]">Module Id does not match module token name</div>
            )}
          </>
        ) : (
          <div className="bg-info p-2 font-mono">
            Module Coming Soon <MintModuleTokenModal courseModule={props.courseJSON} />
          </div>
        )}
      </div>
    </div>
  );
}
