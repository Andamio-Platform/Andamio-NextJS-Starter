import {
  CourseOutline,
  CourseModule,
  queryCourseReferenceInfo,
} from "@andamiojs/core";
import courseOutline from "../../../andamio/data/course.json";
import { andamioConfig } from "../../../andamio/config";
import CourseModuleDetailsCard from "./CourseModuleDetailsCard";


export default async function CourseOutline() {
  const courseReferenceInfo = await queryCourseReferenceInfo(andamioConfig)
  return (
    <div className="my-5 p-5">
      <h2 className="py-5 text-4xl">{courseOutline.courseTitle}</h2>
      <h3 className="pb-5 text-2xl">Authors: {courseOutline.authors}</h3>
      {courseOutline.modules.map((module: CourseModule, index: number) => (
        <CourseModuleDetailsCard courseJSON={module} onChainModules={courseReferenceInfo} key={module.id} />
      ))}
    </div>
  );
}
