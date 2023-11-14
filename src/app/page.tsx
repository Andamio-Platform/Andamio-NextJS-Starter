import { ChevronRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const features = [
  { name: "Education", description: "Support people to learn new skills." },
  {
    name: "Onboarding",
    description: "Provide opportunities for people to join impactful projects.",
  },
  {
    name: "Course Management",
    description: "Publish Lessons and Assignments, track progress of everyone participating in your course..",
  },
  {
    name: "Contribution Management",
    description: "When learners are ready to make valuable contributions, use an Andamio Treasury to approve projects and manage funds.",
  },
  {
    name: "Organization Development",
    description: "Gain insights into what's working best in your organization and where there is room to improve..",
  },

];

export default function HomePage() {
  return (
    <main>
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-secondary-content">
                  <span>Alpha v1.0 now live</span>
                  <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </span>
              </a>
            </div>
            <h1 className="text-6xl my-10 font-bold leading-[5rem] text-secondary-content">
              Onboard Your Collaborators
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-content">
              Learn, commit, contribute and build an organization
            </p>
            <div className="flex flex-row gap-5 my-5">
              <div className="btn btn-success btn-sm rounded-full">
                <a href="#">Start Andamio PBL</a>
              </div>
              <div className="btn btn-success btn-sm rounded-full">
                <a href="#" className="">
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
      <div className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-accent">Flourishing Communities</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-content sm:text-4xl">
                Learners and Contributors
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                We are here to push power to the edges. Andamio is the tool for the job.
              </p>
              <img className="h-80 rounded-xl shadow-xl" src="/andamio.png" alt="Andamio" />
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-secondary-content sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-secondary-content">
                    <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-success" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="card bg-secondary text-secondary-content w-2/3 mx-auto my-10 shadow-xl p-5 grid grid-cols-3">
        <div className="col-span-1">
          <Image src="/icons/human-network-1-primary.png" width={300} height={300} alt="people-network" />
        </div>
        <div className="col-span-2">
          <h2 className="text-3xl font-mono font-bold py-10">From Community to Collaboration</h2>
          <p className="">
            Andamio supports communmities to set clear intentions for onboarding and engagement. You need contributors.
            Contributors need clarity. Everyone is learning together.
          </p>
        </div>
      </div>
      <div className="card bg-secondary text-secondary-content w-2/3 mx-auto my-10 shadow-xl p-5 grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-3xl font-mono font-bold py-10">From Local Collaboration to Global Contribution</h2>
          <p className="">
            Any organization using Andamio can hook up to the network and share learning credentials. Because learning
            targets are clearly stated, everyone can have clear expectations. Organizations can remain independent, or
            can opt in, any time, to the part of the Andamio network that is helpful.
          </p>
        </div>
        <div className="col-span-1">
          <Image src="/icons/global-2-primary.png" width={300} height={300} alt="global-network" />
        </div>
      </div>
      <div className="card bg-secondary text-secondary-content w-2/3 mx-auto my-10 shadow-xl p-5 grid grid-cols-3">
        <div className="col-span-1">
          <Image src="/icons/scaffolding-primary-xl.png" width={500} height={500} alt="scaffolding" />
        </div>
        <div className="col-span-2">
          <h2 className="text-3xl font-mono font-bold py-10">Turn Your Docs into a Learning Journey</h2>
          <p className="">
            Any existing markdown documentation looks great in Andamio. Just drop your Markdown into an Andamio instance
            and publish.
          </p>
        </div>
      </div>
      <div className="card bg-secondary text-secondary-content w-2/3 mx-auto my-10 shadow-xl p-5 grid grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-3xl font-mono font-bold py-10">Don&apos;t Trust, Verify</h2>
          <p className="">
            Learners can validate that organizations are teaching what they promised. Anyone can verify that learning
            and contribution is happening. In a world of fractal impact that adds up, everyone is an oracle.
          </p>
        </div>
        <div className="col-span-1">
          <Image src="/icons/validate-primary.png" width={400} height={400} alt="validate" />
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
