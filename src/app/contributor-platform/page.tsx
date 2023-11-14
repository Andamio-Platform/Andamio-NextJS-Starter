import Link from "next/link";
import { HeroBasic, HeroGrid, HeroSection } from "../../components/ui/Hero";
import { Suspense } from "react";
import TreasuryInfo from "./TreasuryInfo";
import ContribRefInfo from "./ContribRefInfo";
import EscrowInfo from "./EscrowInfo";
import Loading from "../Loading";
import SelectEscrowModal from "../../components/modals/projects/SelectEscrowModal";
import ManageAddProjectModal from "../../components/modals/projects/ManageAddProjectModal";
import { cache } from "react";
import FundNewUTxOModal from "../../components/modals/projects/FundNewUTxOModal";
import MintContribTokenModal from "../../components/modals/projects/MintContribTokenModal";

export const revalidate = 30; // revalidate the data at most every 30s

export default cache(async function ContributorPlatform() {
  const TreasuryHero = await TreasuryInfo();
  const ContribRefHero = await ContribRefInfo();
  const EscrowHero = await EscrowInfo();
  return (
    <main className="flex flex-col items-center justify-center h-max">
      <>{/********** Front Section **********/}</>
      <div className="flex flex-col py-10 items-center bg-gradient-br min-w-full">
        <div className="font-extrabold py-10 text-4xl ">
          Start your Contribution Journey
        </div>
        <MintContribTokenModal />
      </div>

      <>{/********** Treasury Section **********/}</>
      <div className="flex flex-col py-10 items-center bg-gradient-tl min-w-full mt-1">
        <div className="font-extrabold text-4xl mb-8">Treasury</div>
        <HeroSection>
          <HeroGrid>
            <Suspense fallback={<Loading />}>{TreasuryHero}</Suspense>
          </HeroGrid>
          <HeroBasic>
            <div className="flex flex-col items-start ml-20">
              <div className="font-bold mb-2">For Contributors:</div>
              <Link
                className="button-1 p-3 w-fit"
                href="/contributor-platform/approved-projects"
              >
                Approved Projects
              </Link>
              <div className="font-bold mt-4 mb-2">For Administrator:</div>
              <ManageAddProjectModal />
              <FundNewUTxOModal />
            </div>
          </HeroBasic>
        </HeroSection>
      </div>

      <>{/********** Contributor Reference Section **********/}</>
      <div className="flex flex-col py-10 items-center bg-gradient-br min-w-full mt-1">
        <div className="font-extrabold text-4xl mb-8">
          Contributor Reference
        </div>
        <HeroSection>
          <HeroBasic>
            <div className="flex flex-col items-start ml-20">
              <Link
                className="button-1 p-3 w-fit"
                href="/contributor-platform/contributors"
              >
                List of Contributors
              </Link>
              {/* <div className="font-bold mb-2 mt-4">For Contributors:</div>
              <Link className="button-1 p-3 w-fit" href="#">
                Update Reward Address
              </Link> */}
            </div>
          </HeroBasic>
          <HeroGrid>
            <Suspense fallback={<Loading />}>{ContribRefHero}</Suspense>
          </HeroGrid>
        </HeroSection>
      </div>

      <>{/********** Escrow Section **********/}</>
      <div className="flex flex-col py-10 items-center bg-gradient-tl min-w-full mt-1 mb-40">
        <div className="font-extrabold text-4xl mb-8">Escrow</div>
        <HeroSection>
          <HeroGrid>
            <Suspense fallback={<Loading />}>{EscrowHero}</Suspense>
          </HeroGrid>
          <HeroBasic>
            <div className="flex flex-col items-start ml-20">
              <SelectEscrowModal />
              <div className="font-bold mb-2 mt-4">For Deciders:</div>
              <Link
                className="button-1 p-3 w-fit"
                href="/contributor-platform/escrow/commitments"
              >
                Current List of Commitments
              </Link>
            </div>
          </HeroBasic>
        </HeroSection>
      </div>
    </main>
  );
});
