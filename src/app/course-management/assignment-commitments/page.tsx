import { Suspense } from "react";
import Loading from "../../Loading";
import AssignmentCommitmentsTable from "./AssignmentCommitmentsTable";

export const dynamic = "force-dynamic";

export default async function AssignmentCommitmentsPage() {
  const assignmentsTable = await AssignmentCommitmentsTable();

  return (
    <main className="flex flex-col items-center justify-center h-max min-h-screen">
      <div className="flex flex-col py-10 items-center text-secondary-content min-w-full my-10">
        <h1 className="py-10 text-primary-content text-4xl">Current Assignment Commitments</h1>
        <Suspense fallback={<Loading />}>{assignmentsTable}</Suspense>
      </div>
    </main>
  );
}
