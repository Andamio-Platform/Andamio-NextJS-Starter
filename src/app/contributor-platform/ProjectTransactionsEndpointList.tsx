import Link from "next/link";

export default function ProjectTransactionsEndpointList() {
  return (
    <>
      {process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes("pm") && (
        <div className="card bg-primary text-primary-content p-10 w-full mx-auto font-mono grid grid-cols-1">
          <div className="col-span-1">
            <h1 className="pb-5 text-2xl">Transaction Endpoints</h1>
          </div>
          <div className="col-span-1">
            <header className="text-xl text-info py-2">Contributors</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/learner/mint">Mint a Contrib Token</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/module-list">Commit to a Project</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/learner/dashboard">Update Your Learner Token</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <header className="text-xl text-info py-2">Deciders</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">Accept a Project</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">Deny a Project</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <header className="text-xl text-info py-2">Admins</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Mint a Contract Token</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Update a Project List</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Burn a Contract Token</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
