import { Suspense } from "react";
import Loading from "../../Loading";
import ApprovedProjectsTable from "./ApprovedProjectsTable";

export const dynamic = "force-dynamic";

export default async function ApprovedProjects() {
  const projectsTable = await ApprovedProjectsTable();
  return (
    <main className="h-max min-h-screen">
      <div className="flex flex-col py-10 text-secondary-content w-2/3 mx-auto my-10">
        <h1 className="py-10 text-secondary-content text-4xl">Current Projects</h1>
        <p>If you hold a Contributor Token, you can commit to these projects:</p>
        <Suspense fallback={<Loading />}>{projectsTable}</Suspense>
      </div>
    </main>
  );
}
