import MintLearnerTokenModal from "../../../../../components/modals/course/MintLearnerTokenModal";

export default function MintLearnerPage() {
  return (
    <main className="flex flex-col items-center justify-center h-max">
      <div className="flex flex-col py-10 items-center bg-gradient-tl min-w-full mt-1">
        <h1>MINT A LEARNER TOKEN</h1>
        <MintLearnerTokenModal />
      </div>
    </main>
  );
}
