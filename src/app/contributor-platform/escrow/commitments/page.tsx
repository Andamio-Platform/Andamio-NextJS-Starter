
import { Suspense } from "react";
import Loading from "../../../Loading";
import CurrentCommitmentsTable from "./CurrentCommitmentsTable";

export const dynamic = "force-dynamic";

export default async function CommittedProjects() {
  const commitmentmentsTable = await CurrentCommitmentsTable();
  return (
    <main className="h-max min-h-screen">
    <div className="flex flex-col py-10 text-secondary-content w-11/12 mx-auto my-10">
      <h1 className="py-10 text-secondary-content text-4xl">List of Current Commitments</h1>
      <p>WIP: What do you want to be able to do with this list?</p>
      <Suspense fallback={<Loading />}>{commitmentmentsTable}</Suspense>
    </div>
  </main>
  );
}
