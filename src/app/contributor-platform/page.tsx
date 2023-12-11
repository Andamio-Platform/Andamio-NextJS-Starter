import Link from "next/link";
import { HeroBasic, HeroGrid, HeroSection } from "../../components/ui/Hero";
import { Suspense } from "react";
import TreasuryInfo from "./TreasuryInfo";
import ContribRefInfo from "./ContribRefInfo";
import EscrowInfo from "./EscrowInfo";
import Loading from "../Loading";
import { cache } from "react";
import ProjectManagmentIntro from "./ProjectManagementIntro";
import ProjectTransactionsEndpointList from "./ProjectTransactionsEndpointList";
import DocumentationLinks from "./DocumentationLinks";

export const revalidate = 30; // revalidate the data at most every 30s`

export default cache(async function ContributorPlatform() {
  const TreasuryCard = await TreasuryInfo();
  const ContribRefCard = await ContribRefInfo();
  const EscrowCard = await EscrowInfo();
  return (
    <main className="grid grid-cols-4 p-5">
      <div className="col-span-1">
        <DocumentationLinks />
        <>
          {process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes(
            "kanbanboard"
          ) && (
            <div className="mb-3 card bg-primary text-primary-content p-10 w-full mx-auto font-mono grid grid-cols-1">
              <div className="col-span-1">
                <h1 className="pb-5 text-2xl">
                  Kanban Board &lt;experimental&gt;
                </h1>
              </div>
              <div className="col-span-1">
                <header className="text-xl text-info py-2">
                  Test this out
                </header>
                <ul className="text-sm uppercase">
                  <li className="py-1">
                    <Link href="/contributor-platform/kanban-board">Link</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </>

        <ProjectTransactionsEndpointList />
      </div>
      <div className="col-span-3 ml-5">
        <ProjectManagmentIntro />
        <Suspense fallback={<Loading />}>{ContribRefCard}</Suspense>
        <Suspense fallback={<Loading />}>{EscrowCard}</Suspense>
        <Suspense fallback={<Loading />}>{TreasuryCard}</Suspense>
      </div>
    </main>
  );
});
