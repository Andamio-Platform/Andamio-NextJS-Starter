import { Suspense, useState } from "react";
import { andamioConfig } from "../../../../../andamio/config";
import MintLearnerToken from "../../../../../components/transactions/course/MintLearnerToken";
import ViewLearnerTokenData from "./ViewLearnerTokenData";

export default function LearnerDashboardPage() {
  return (
    <>
      <div className="w-2/3 mx-auto fixed right-0 min-h-screen bg-[url('/scaffold.svg')] z-0 opacity-40" />
      <main className="flex flex-col w-3/4 mx-auto min-h-screen">
        <h1 className="text-6xl font-mono text-secondary-content my-10">{andamioConfig.title} Learner Dashboard</h1>
        <ViewLearnerTokenData />
      </main>
    </>
  );
}
