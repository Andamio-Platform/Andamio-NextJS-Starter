import {
  CourseOutline,
  CourseModule,
  queryCourseReferenceInfo,
} from "@andamiojs/core";
import courseOutline from "../../andamio/data/course.json";
import { andamioConfig } from "../../andamio/config";
import CourseModuleDetailsCard from "./CourseModuleDetailsCard";
import { getModuleOverviewData } from "../../lib/getModuleOverviewData";


export default async function CourseOutline() {
  const courseReferenceInfo = await queryCourseReferenceInfo(andamioConfig)
  const moduleOverviewValues = await getModuleOverviewData();

  return (
    <div>
      <div className="card p-5 border border-primary bg-secondary text-secondary-content shadow-xl">
      <div className="pt-10 pb-5 text-2xl text-secondary-content">{courseOutline.courseTitle}</div>
      <h3 className="pb-3 text-xl text-secondary-content">Authors: {courseOutline.authors}</h3>
        <p className="font-medium text-base">Welcome to Andamio!</p>
        <p className="font-medium text-base">The purpose this course is to teach you how Andamio works. Because Andamio is built to help people learn new things, we are using Andamio to teach you about itself. It&apos;s self-referential, but not for long. In this course, you will learn how to build your own course, about anything you want, in Andamio.</p>
        <p className="font-medium text-base">A Project-Based Learning course like this one is organized into <span className="font-bold">Course Modules</span>. Each module is numbered. Every course module includes a list of <span className="font-bold">Student Learning Targets</span> that describe you will know and be able to do after completing this course.</p>
        <p className="font-medium text-base">On this page, you can read the outline of this Andamio Project-Based Learning course. Access to the course is free and open, and anyone can start learning any time. If content is published, you can click on the <span className="font-bold">Learn Button</span> to get started. If the module is published the blockchain, you can <span className="font-bold">view an Assignment, and Commit</span> to it. You can also verify that the correct Module is on-chain. </p>
        <p className="font-medium text-base">New course modules will go live each week.</p>
      </div>
      {courseOutline.modules.map((module: CourseModule, index: number) => (
        <CourseModuleDetailsCard courseJSON={module} onChainModules={courseReferenceInfo} publishedContent={moduleOverviewValues.modules} key={module.id} />
      ))}
    </div>
  );
}
