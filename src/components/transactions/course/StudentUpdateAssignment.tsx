import { useWallet } from "@meshsdk/react";
import { AssignmentUTxO, hexToString, prepareStudentUpdateAssignmentTx, stringToHex } from "@andamiojs/core";
import { ChangeEvent, useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const StudentUpdateAssignment = (props: { assignment: AssignmentUTxO; closeModal: () => void }) => {
  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [studentAssignmentInfo, setStudentAssignmentInfo] = useState("");
  const { wallet, connected } = useWallet();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "inputStudentAssignmentInfo") {
      setStudentAssignmentInfo(value);
    }
  };

  if (connected) {
    const handleClick = async () => {
      try {
        const Update_ASSIGMENT_TX = await prepareStudentUpdateAssignmentTx(
          wallet,
          andamioConfig,
          props.assignment,
          studentAssignmentInfo
        );
        const res = await Update_ASSIGMENT_TX.runTx();
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
        <div className="flex flex-col p-10 mx-auto">
          <div className="mb-4 text-lg">Assignment: {hexToString(props.assignment.datum.fields[0])}</div>
          <div className="font-extrabold mb-3 text-xl">Enter New Assignment Info</div>
          <div className="mb-5">
            <form>
              <input
                type="text"
                name="inputStudentAssignmentInfo"
                placeholder="assignment evidence"
                onChange={handleInputChange}
                className="bg-secondary w-full my-2 p-2 text-secondary-content font-mono text-base"
              />
            </form>
          </div>
          {studentAssignmentInfo.length > 7 && studentAssignmentInfo.length < 57 ? (
            <button className="btn btn-success btn-sm" onClick={handleClick}>
              Confirm Update Assignment Info
            </button>
          ) : (
            <div className="font-mono text-info text-sm uppercase">String must be 8-56 characters</div>
          )}
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default StudentUpdateAssignment;
