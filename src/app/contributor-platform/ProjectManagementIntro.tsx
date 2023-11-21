export default function ProjectManagmentIntro() {
    return (
      <div className="card bg-secondary mb-5 p-5 grid grid-cols-5 gap-5 content-center border border-primary ">
        <div className="col-span-3 prose text-secondary-content my-auto">
          <h2 className="text-3xl pt-5 text-secondary-content">About Andamio Contribution Management</h2>
          <p>
            In any Andamio Project Contribution Management instance, there are three <span className="font-bold text-primary">roles</span>:
          </p>
          <p>
            <span className="font-bold text-primary">Contributors</span> can commit to Projects, earn rewards and build an on-chain
            record of accomplishments.
          </p>
          <p>
            <span className="font-bold text-primary">Admins</span> approve projects in a Treasury. Can be multi-sig. Wait until you see the Andmaio Governance Engine. Read our whitepaper and roadmap to learn more.
          </p>
          <p>
            <span className="font-bold text-primary">Deciders</span> review evidence of contribution and approve the
            completion of Projects. Also multi-sig. More coming soon.
          </p>
        </div>
        <div className="col-span-2 flex content-center justify-center bg-[url('/andamio.png')] bg-contain bg-no-repeat">
        </div>
      </div>
    );
  }
  