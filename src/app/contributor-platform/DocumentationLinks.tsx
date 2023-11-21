import Link from "next/link";

export default function DocumentationLinks() {
  return (
    <>
      {process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes("cm") && (
        <div className="card bg-primary text-primary-content p-10 w-full mx-auto mb-5 font-mono grid grid-cols-1">
          <div className="col-span-1">
            <h1 className="pb-5 text-2xl">Documentation</h1>
          </div>
          <div className="col-span-1">
            <header className="text-xl text-info py-2">AndamioJS</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/learner/mint">Git Repo</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/module-list">Module API Docs</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <header className="text-xl text-info py-2">In Andamio PBL</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">Key Module A</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">Key Module B</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <header className="text-xl text-info py-2">Inquire</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Schedule a Consultation</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Join a Public Meeting</Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">Read Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
