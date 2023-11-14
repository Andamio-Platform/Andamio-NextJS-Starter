import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <img className="h-24" src="/andamio.png" alt="Andamio" />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-secondary-content">
                <span>Alpha v1.0 now live</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-secondary-content sm:text-6xl">
            Find your collaborators
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-content">Learn, commit, contribute and build an organization</p>
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
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/andamio-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
