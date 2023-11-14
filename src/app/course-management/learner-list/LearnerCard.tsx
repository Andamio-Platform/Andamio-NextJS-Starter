import { LearnerReferenceUTxO } from "@andamiojs/core";

export default function LearnerCard(props: { learnerUTxO: LearnerReferenceUTxO }) {
  return (
    <div className="bg-slate-300 text-black p-5" key={props.learnerUTxO.utxo.input.txHash}>
      <h1>{props.learnerUTxO.data?.contributorAlias}</h1>
      <pre>About: {props.learnerUTxO.data?.learnerInfo}</pre>
      <pre>Policy Id: {props.learnerUTxO.data?.learnerCS}</pre>
      <h3>Completed Modules:</h3>
      <ul>{props.learnerUTxO.data?.completedAssignments.map((item: string, index) => <li key={index}>{item}</li>)}</ul>
      <h3>Currency Symbol References:</h3>
      <pre>{JSON.stringify(props.learnerUTxO.data?.pointToCss)}</pre>
    </div>
  );
}
