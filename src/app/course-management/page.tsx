import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../Loading";
import CourseReferenceInfo from "./CourseReferenceInfo";
import LearnerReferenceInfo from "./LearnerReferenceInfo";
import AssignmentInfo from "./AssignmentInfo";
import MintLearnerTokenModal from "../../components/modals/course/MintLearnerTokenModal";

export const dynamic = "force-dynamic";

const CourseManagement = async () => {
  const LearnerReferenceHero = await LearnerReferenceInfo();
  const CourseReferenceHero = await CourseReferenceInfo();
  const AssignmentHero = await AssignmentInfo();

  return (
    <main className="py-10 lg:w-3/4 mx-auto">
      <div className="card bg-secondary text-secondary-content border border-primary shadow-xl p-5 w-3/4 mx-auto">
        <h2 className="text-6xl pt-5 text-secondary-content">
          About Andamio Course Management
        </h2>
        <div className="flex flex-row gap-10 w-3/4 mx-auto">
          <Image src="/andamio.png" width={250} height={200} alt="andamio" />
          <div className="flex flex-col my-auto">
            <p className="py-2">
              In any Andamio Course instance, there are three{" "}
              <span className="font-bold text-primary">roles</span>:
            </p>
            <p className="py-2">
              <span className="font-bold text-primary">Learners</span> can
              commit to Assignments and build an on-chain record of
              accomplishments.
            </p>
            <p className="py-2">
              <span className="font-bold text-primary">Course Creators</span>{" "}
              publish content and create on-chain references to Course Modules.
            </p>
            <p className="py-2">
              <span className="font-bold text-primary">Course Deciders</span>{" "}
              review evidence of learning and approve the completion of
              Assignments.
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading />}>{LearnerReferenceHero}</Suspense>
      <Suspense fallback={<Loading />}>{CourseReferenceHero}</Suspense>
      <Suspense fallback={<Loading />}>{AssignmentHero}</Suspense>
      {process.env.NEXT_PUBLIC_EXPERIMENTAL_FEATURES?.split(",").includes(
        "cm"
      ) && (
        <div className="card bg-primary text-primary-content p-10 w-3/4 mx-auto font-mono grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <h1 className="py-5 text-4xl">Transaction Endpoints</h1>
          </div>
          <div className="col-span-2">
            <header className="text-2xl text-info py-2">Learners</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/learner/mint">
                  Mint a Learner Token
                </Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/module-list">
                  Commit to a Module Assignment
                </Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/learner/dashboard">
                  Submit Assignment
                </Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/learner/dashboard">
                  Update Your Learner Token
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <header className="text-2xl text-info py-2">
              Course Facilitators
            </header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">
                  Accept an Assignment
                </Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/assignment-commitments">
                  Deny an Assignment
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <header className="text-2xl text-info py-2">Course Creators</header>
            <ul className="text-sm uppercase">
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">
                  Mint a Course Module
                </Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">
                  Update a Course Module
                </Link>
              </li>
              <li className="py-1">
                <Link href="/course-management/roles/course-creator/dashboard">
                  Burn a Course Module
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};

export default CourseManagement;
