import { Suspense } from "react";
import Loading from "../../Loading";
import CourseOutline from "./CourseOutline";

// Exploring choices for data caching and fetching. It might be this simple:
export const dynamic = "force-dynamic";
// export const revalidate = 30; // revalidate the data at most every 30s

export default async function ModuleListPage() {
  const courseOutline = await CourseOutline();

  return (
    <main className="flex flex-col items-center justify-center font-semibold">
      <div className="mt-20">
        <Suspense fallback={<Loading />}>{courseOutline}</Suspense>
      </div>
    </main>
  );
}
