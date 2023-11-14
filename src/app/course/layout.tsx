import type { Metadata } from "next";
import { Suspense } from "react";
import Sidebar from "../../components/Sidebar";
import Loading from "../Loading";

export const metadata: Metadata = {
  title: "Andamio PBL Course",
  description: "Learn about Andamio",
};

export default async function CourseLayout({ children }: { children: React.ReactNode }) {
  const loading = Loading();
  const SideBar = await Sidebar();

  return (
    <>
      <div className="w-2/5 mx-auto fixed right-0 min-h-screen bg-[url('/scaffold.svg')] z-0 opacity-40" />
      <div className="grid grid-cols-12 w-full my-5 z-10">
        <div className="col-span-4 md:col-span-3 lg:col-span-2 ml-5 ">
          <Suspense fallback={loading}>
            <div>{SideBar}</div>
          </Suspense>
        </div>
        <div className="col-span-7 md:col-span-8 lg:col-span-8 px-5">{children}</div>
        {/* <div className="card col-span-2 bg-neutral mr-5 opacity-50">

      </div> */}
      </div>
    </>
  );
}
