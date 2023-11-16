import Link from "next/link";
import { getModuleTitle } from "../../../../../lib/course";
import { LMSObjectMetadata } from "@andamiojs/core";
import { andamioConfig } from "../../../../../andamio/config";

export default function ModuleBreadcrumbs({
  moduleId,
  frontmatter,
}: {
  moduleId: string | undefined;
  frontmatter: LMSObjectMetadata | undefined;
}) {

  return (
    <div className="card bg-secondary text-secondary-content shadow-xl px-4 py-2 font-mono">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link href="/course" className="btn btn-sm btn-info text-sm uppercase">
              {andamioConfig.title}
            </Link>
          </li>
          {moduleId && frontmatter && (
            <>
              <li>
                <Link
                  href={`/course/module/${moduleId}`}
                  className={`btn btn-sm text-sm uppercase ${
                    frontmatter.type == "ModuleOverview" ? "btn-success" : "btn-info"
                  }`}
                >
                  Module {moduleId}: {getModuleTitle({ moduleId })}
                </Link>
              </li>
              {frontmatter.type != "ModuleOverview" && (
                <li>
                  <Link href={`#`} className="btn btn-sm btn-success text-sm uppercase">
                    {frontmatter.title}
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
