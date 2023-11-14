import { useWallet } from "@meshsdk/react";
import { CourseReferenceUTxO, prepareUpdateModuleTx } from "@andamiojs/core";
import { useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const UpdateAssignmentDatum = (props: {
  selectedModuleUTxO: CourseReferenceUTxO;
  newLearnerCS: string;
  closeModal: () => void;
}) => {
  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { wallet, connected } = useWallet();
  if (connected) {
    const handleClick = async () => {
      try {
        const UPDATE_COURSE_TX = await prepareUpdateModuleTx(
          wallet,
          andamioConfig,
          props.selectedModuleUTxO,
          props.newLearnerCS
        );
        const res = await UPDATE_COURSE_TX.runTx();
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
      <>
        {txHash !== "" ? <SuccessTxModal txHash={txHash} closeModal={props.closeModal} /> : null}
        {errorMessage !== "" ? <ErrorModal errorMessage={errorMessage} closeModal={props.closeModal} /> : null}
        <div className="flex flex-col py-10 items-center bg-gradient-br w-max p-24">
          <h3 className="py-3">Selected Module</h3>
          <p className="py-3">{props.selectedModuleUTxO.datum.fields[0]}</p>
          <p className="py-3">{props.newLearnerCS}</p>
          <button className="button-1" onClick={handleClick}>
            Confirm Module Update Tx
          </button>
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default UpdateAssignmentDatum;
