import { queryContribRefInfo } from "@andamiojs/core";
import { DataBox } from "../../components/ui/DataBox";
import Link from "next/link";
import { andamioConfig } from "../../andamio/config";
import MintContribTokenModal from "../../components/modals/projects/MintContribTokenModal";
import { DataBoxWide } from "../../components/ui/DataBoxWide";


const ContribRefInfo = async () => {
  const ContribRefUTxOs = await queryContribRefInfo(andamioConfig);
  return (
    <div className="card bg-secondary my-5 p-5 grid grid-cols-5 gap-5 content-center border border-primary ">
      <div className="col-span-3 prose text-secondary-content my-auto">
        <h2 className="text-3xl pt-5 text-secondary-content">Andamio Contributors</h2>
        <p>
          Andamio is built to support Learners to become Contributors to organizations. When Learners complete a course (or any other requirements set by your organization), they use their Leanrer Token and current credentials to mint a Contributor Token.
        </p>
        <p>
          Contributor Tokens allow people to commit to Projects and earn rewards for their work.
        </p>
      </div>
      <div className="col-span-2 flex flex-col gap-3">
        <DataBoxWide value={ContribRefUTxOs.utxos.length} label="Contributors" />
        <DataBoxWide value={ContribRefUTxOs.numCompletedCommitments} label="Completed Commitments" />
      </div>
      <div className="col-span-5 flex flex-row justify-between w-full mx-auto border-t border-primary pt-5">
        <MintContribTokenModal />
        <Link className="btn btn-wide btn-primary" href="">
          Contributor Dashboard
        </Link>
        <Link className="btn btn-wide btn-primary" href="/contributor-platform/contributors">
          View all Contributors
        </Link>
      </div>
    </div>
  );
};

export default ContribRefInfo;


// <div className="flex flex-col py-10 items-center bg-gradient-br min-w-full mt-1">
//         <div className="font-extrabold text-4xl mb-8">
//           Contributor Reference
//         </div>
//         <HeroSection>
//           <HeroBasic>
//             <div className="flex flex-col items-start ml-20">
//               <Link
//                 className="button-1 p-3 w-fit"
//                 href="/contributor-platform/contributors"
//               >
//                 List of Contributors
//               </Link>
//               {/* <div className="font-bold mb-2 mt-4">For Contributors:</div>
//               <Link className="button-1 p-3 w-fit" href="#">
//                 Update Reward Address
//               </Link> */}
//             </div>
//           </HeroBasic>
//           <HeroGrid>
//             <Suspense fallback={<Loading />}>{ContribRefHero}</Suspense>
//           </HeroGrid>
//         </HeroSection>
//       </div>