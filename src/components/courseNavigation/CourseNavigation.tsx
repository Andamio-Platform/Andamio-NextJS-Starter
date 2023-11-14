"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ sortedPaths }: { sortedPaths: string[] }) {
  const path = usePathname();
  let currentPath = "";
  if (path?.includes("/course/module/")) {
    const startIndex = path.indexOf("/course/module/") + "/course/module/".length;
    currentPath = path.substring(startIndex);
  }
  const index = sortedPaths.indexOf(currentPath);

  let prePath = null;
  let nextPath = null;

  if (index !== -1) {
    if (index > 0) {
      prePath = sortedPaths[index - 1];
    }
    if (index < sortedPaths.length - 1) {
      nextPath = sortedPaths[index + 1];
    }
  }

  return (
    <div className="w-full mx-auto mb-10 font-mono" key={index}>
      <div className="flex flex-row justify-between">
        {prePath ? (
          <div className="btn btn-info hover:scale-105">
            <Link href={`/course/module/${prePath}`}>&lt;&lt; Previous Lesson</Link>
          </div>
        ) : null}
        {/* {currentPath && <div className="join-item btn btn-primary">Lesson {currentPath}</div>} */}
        {nextPath ? (
          <div className="btn btn-info hover:scale-105">
            <Link href={`/course/module/${nextPath}`}>Next Lesson &gt;&gt;</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
