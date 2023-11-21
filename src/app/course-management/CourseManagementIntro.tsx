export default function CourseManagementIntro() {
  return (
    <div className="card bg-secondary mb-5 p-5 grid grid-cols-5 gap-5 content-center border border-primary ">
      <div className="col-span-3 prose text-secondary-content my-auto">
        <h2 className="text-3xl pt-5 text-secondary-content">About Andamio Course Management</h2>
        <p>
          In any Andamio Course instance, there are three <span className="font-bold text-primary">roles</span>:
        </p>
        <p>
          <span className="font-bold text-primary">Learners</span> can commit to Assignments and build an on-chain
          record of accomplishments.
        </p>
        <p>
          <span className="font-bold text-primary">Course Creators</span> publish content and create on-chain references
          to Course Modules.
        </p>
        <p>
          <span className="font-bold text-primary">Course Deciders</span> review evidence of learning and approve the
          completion of Assignments.
        </p>
      </div>
      <div className="col-span-2 flex content-center justify-center bg-[url('/andamio.png')] bg-contain bg-no-repeat">
      </div>
    </div>
  );
}
