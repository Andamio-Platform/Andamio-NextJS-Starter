import { getModuleOverviewData } from "../../lib/getModuleOverviewData";
import Link from "next/link";
import { andamioConfig } from "../../andamio/config";

export default async function LessonList() {
  const moduleOverviewValues = await getModuleOverviewData();

  return (
    <div className="card bg-primary text-primary-content shadow-xl p-5">
      <h1 className="py-5">{andamioConfig.title} Course Index</h1>
      <div className="grid grid-cols-2 gap-5">
        {moduleOverviewValues.modules.map((module, index: number) => (
          <div className="m-5">
            <h3 className="my-3 pb-3 border-b border-info font-light">
              <Link href={`course/module/${module.id}`}>Module {module.id}</Link>
            </h3>
            <div className="grid grid-cols-1 gap-5">
              {module.pages.map((page) => (
                <div className="px-2" key={page.slug}>
                  <Link href={`/course/module/${module.id}/${page.slug}`}>
                    <div className="card">
                      <div className="text-lg">{page.title}</div>
                      <div className="text-xs">Edited on: {page.lastEdited}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
