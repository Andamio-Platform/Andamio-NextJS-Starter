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
