import { Suspense } from "react";
import Loading from "../../Loading";
import AssignmentCommitmentsTable from "./AssignmentCommitmentsTable";

export const dynamic = "force-dynamic";

export default async function AssignmentCommitmentsPage() {
  const assignmentsTable = await AssignmentCommitmentsTable();

  return (
    <main className="h-max min-h-screen">
      <div className="flex flex-col py-10 text-secondary-content w-2/3 mx-auto my-10">
        <h1 className="py-10 text-secondary-content text-4xl">Current Assignment Commitments</h1>
        <Suspense fallback={<Loading />}>{assignmentsTable}</Suspense>
      </div>
    </main>
  );
}
