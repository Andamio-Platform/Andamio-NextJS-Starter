import { Suspense } from "react";
import Loading from "../../Loading";
import AssignmentCommitmentsTable from "./AssignmentCommitmentsTable";

export const dynamic = "force-dynamic";

export default async function AssignmentCommitmentsPage() {
  const assignmentsTable = await AssignmentCommitmentsTable();

  return (
    <main className="flex flex-col items-center justify-center h-max">
      <div className="flex flex-col py-10 items-center bg-gradient-tl min-w-full mt-1">
        <h1>Current Assignment Commitments</h1>
        <Suspense fallback={<Loading />}>{assignmentsTable}</Suspense>
      </div>
    </main>
  );
}
