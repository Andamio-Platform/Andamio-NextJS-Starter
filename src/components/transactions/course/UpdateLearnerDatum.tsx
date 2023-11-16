import { useWallet } from "@meshsdk/react";
import { hexToString, LearnerReferenceUTxO, prepareUpdateLearnerDatumTx } from "@andamiojs/core";
import { ChangeEvent, useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const UpdateLearnerDatum = (props: { learnerReferenceUTxO: LearnerReferenceUTxO; closeModal: () => void }) => {
  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [studentInfo, setStudentInfo] = useState("");

  const { wallet, connected } = useWallet();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "inputStudentInfo") {
      setStudentInfo(value);
    }
  };

  if (connected) {
    const handleClick = async () => {
      try {
        const UPDATE_LEARNER_DATUM_TX = await prepareUpdateLearnerDatumTx(
          wallet,
          andamioConfig,
          props.learnerReferenceUTxO,
          studentInfo
        );
        const res = await UPDATE_LEARNER_DATUM_TX.runTx();
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
        <div className="grid grid-cols-1 md:grid-cols-5 p-5 mx-auto">
          <div className="md:col-span-2 p-5 mx-5 bg-secondary text-secondary-content">
            <h3 className="text-xl pb-5">Your Current Learner Info:</h3>
            <p className="font-bold">{hexToString(props.learnerReferenceUTxO.datum.fields[2])}</p>
            {props.learnerReferenceUTxO.data?.matchConnectedAddress ? (
              <div className="p-2 w-5/6 mx-auto mt-5 bg-success text-sm text-primary uppercase">Connected Address matches on-chain address</div>
            ) : (
              <div className="p-2 w-5/6 mx-auto mt-5 bg-error text-sm text-primary uppercase">Address Does Not Match</div>
            )}
          </div>
          <div className="md:col-span-3 p-2 mx-5">
            <div className="text-xl pb-3">Change Your Learner Info</div>
            <p className="text-sm text-info font-bold pb-3">Note: This transaction will change your address to the address of the connected wallet.</p>
            <div className="mb-5">
              <form>
                <input
                  type="text"
                  name="inputStudentInfo"
                  placeholder="enter new student info"
                  onChange={handleInputChange}
                  className="bg-secondary w-full my-2 p-2 text-secondary-content font-mono text-base"
                />
              </form>
            </div>
            <button className="btn btn-sm btn-success" onClick={handleClick}>
              Update My Student Info
            </button>
          </div>
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default UpdateLearnerDatum;
