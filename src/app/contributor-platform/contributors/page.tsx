import { Suspense } from "react";
import Loading from "../../Loading";
import ContributorTable from "./ContributorTable";

export const dynamic = "force-dynamic";

export default async function Contributors() {
  const contributorTable = await ContributorTable();
  return (
    <main className="h-max min-h-screen">
    <div className="flex flex-col py-10 text-secondary-content w-2/3 mx-auto my-10">
      <h1 className="py-10 text-secondary-content text-4xl">List of Contributors</h1>
      <p>WIP: What do you want to be able to do with this list?</p>
      <Suspense fallback={<Loading />}>{contributorTable}</Suspense>
    </div>
  </main>
  );
}
