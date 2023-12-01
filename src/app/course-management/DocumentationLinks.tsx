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
                <a href="https://www.npmjs.com/package/@andamiojs/core">NPM Package</a>
              </li>
              <li className="py-1">
                <a href="https://andamiojs.andamio.io">Andamio JS Docs</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <header className="text-xl text-info py-2">In Andamio PBL</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="https://www.andamio.io/course/module/101/overview">Module 101: How to Learn in Andamio</Link>
              </li>
              <li className="py-1">
                <Link href="https://www.andamio.io/course/module/201/overview">Module 201: How to Teach With Andamio</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <header className="text-xl text-info py-2">Inquire: Coming Soon</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="#">Schedule a Consultation</Link>
              </li>
              <li className="py-1">
                <Link href="#">Join a Public Meeting</Link>
              </li>
              <li className="py-1">
                <Link href="#">Read Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
