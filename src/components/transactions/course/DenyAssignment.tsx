import { useWallet } from "@meshsdk/react";
import { AssignmentUTxO, hexToString, prepareDenyAssignmentTx } from "@andamiojs/core";
import { useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const DenyAssignment = (props: { assignment: AssignmentUTxO; closeModal: () => void }) => {
  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { wallet, connected } = useWallet();

  if (connected) {
    const handleClick = async () => {
      try {
        const DENY_ASSIGMENT_TX = await prepareDenyAssignmentTx(wallet, andamioConfig, props.assignment);
        const res = await DENY_ASSIGMENT_TX.runTx();
        console.log(res);
        setTxHash(res);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage(JSON.stringify(error));
        }
      }
    };

    return (
      <div>
        {txHash !== "" ? <SuccessTxModal txHash={txHash} closeModal={props.closeModal} /> : null}
        {errorMessage !== "" ? <ErrorModal errorMessage={errorMessage} closeModal={props.closeModal} /> : null}
        <h1 className="p-5">Assignment: {hexToString(props.assignment.datum.fields[0])}</h1>
        <button className="btn btn-sm btn-info" onClick={handleClick}>
          Deny Student Input on Assignment {props.assignment.datum.fields[0]}
        </button>
      </div>
    );
  }
  return <>Wallet not connected</>;
};

export default DenyAssignment;
