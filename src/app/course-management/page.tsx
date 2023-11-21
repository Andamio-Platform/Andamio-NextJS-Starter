import Link from "next/link";
import { Suspense } from "react";
import Loading from "../Loading";
import CourseReferenceInfo from "./CourseReferenceInfo";
import LearnerReferenceInfo from "./LearnerReferenceInfo";
import AssignmentInfo from "./AssignmentInfo";
import CourseManagementIntro from "./CourseManagementIntro";
import CourseTransactionEndpointList from "./CourseTransactionsEndpointList";
import DocumentationLinks from "./DocumentationLinks";

export const dynamic = "force-dynamic";

const CourseManagement = async () => {
  const LearnerReferenceCard = await LearnerReferenceInfo();
  const CourseReferenceCard = await CourseReferenceInfo();
  const AssignmentCard = await AssignmentInfo();

  return (
    <main className="grid grid-cols-4 p-5">
      <div className="col-span-3 mr-5">
        <CourseManagementIntro />
        <Suspense fallback={<Loading />}>{LearnerReferenceCard}</Suspense>
        <Suspense fallback={<Loading />}>{CourseReferenceCard}</Suspense>
        <Suspense fallback={<Loading />}>{AssignmentCard}</Suspense>
      </div>
      <div className="col-span-1">
        <DocumentationLinks />
        <CourseTransactionEndpointList />
      </div>
    </main>
  );
};

export default CourseManagement;
