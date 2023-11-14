import Link from "next/link";
import Accordion from "./Accordion";
import { getModuleOverviewData } from "../lib/getModuleOverviewData";
import { ModuleOverview } from "@andamiojs/core";

export default async function Sidebar() {
  const moduleOverviewValues = await getModuleOverviewData();

  return (
    <div className="card min-h-screen bg-primary shadow-xl text-primary-content flex w-full flex-col">
      {moduleOverviewValues.modules.map((module: ModuleOverview) => (
        <div key={module.id} className="uppercase tracking-wider border-b border-primary">
          <Accordion moduleId={module.id} moduleTitle={module.title} pageList={module.pages} />
        </div>
      ))}
    </div>
  );
}
