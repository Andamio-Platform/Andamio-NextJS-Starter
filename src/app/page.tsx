import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="text-6xl my-10 font-bold leading-[5rem] text-secondary-content">
              Mesh Project-Based Learning
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-content">
              Build + Contribute to Mesh
            </p>
            <div className="flex flex-row gap-5 my-5">
              <div className="btn btn-success btn-sm rounded-full">
                <Link href="/course">Start Mesh PBL</Link>
              </div>
              <div className="btn btn-success btn-sm rounded-full">
                <a href="/course" className="">
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none rounded-xl p-3 sm:max-w-5xl lg:max-w-none">
              <Link href="/course">
                <img
                  src="/andamio-screenshot.png"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

// Existing devs: your markdown looks great in Andaio
// Turn your documenation into a PBL course
// Build an on-chain record of contributions
// Turn your community into contributors
// Turn your community into collaborators
// Launch community collaborations
// Collaborate with other organizations - the andamio network
