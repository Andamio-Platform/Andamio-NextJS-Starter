import Link from "next/link";

export default function CourseTransactionEndpointList() {
  return (
    <>
      {process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes("cm") && (
        <div className="card bg-primary text-primary-content p-10 w-full mx-auto font-mono grid grid-cols-1">
          <div className="col-span-1">
            <h1 className="pb-5 text-2xl">Transaction Endpoints</h1>
          </div>
          <div className="col-span-1">
            <header className="text-xl text-info py-2">Learners</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/learner/mint">Mint a Learner Token</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/module-list">Commit to a Module Assignment</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/learner/dashboard">Submit Assignment</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/learner/dashboard">Update Your Learner Token</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <header className="text-xl text-info py-2">Course Facilitators</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">Accept an Assignment</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">Deny an Assignment</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <header className="text-xl text-info py-2">Course Creators</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Mint a Course Module</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Update a Course Module</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Burn a Course Module</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
