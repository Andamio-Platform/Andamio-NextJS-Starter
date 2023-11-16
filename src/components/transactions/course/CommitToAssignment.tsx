import { useWallet } from "@meshsdk/react";
import { CourseReferenceUTxO, prepareCommitToAssignmentTx } from "@andamiojs/core";
import { ChangeEvent, useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";
import { truncateString } from "../../../utils/truncate";

const CommitToAssignment = (props: { selectedModuleUTxO: CourseReferenceUTxO; closeModal: () => void }) => {
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
        const COMMIT_TO_ASSIGNMENT_TX = await prepareCommitToAssignmentTx(
          wallet,
          andamioConfig,
          props.selectedModuleUTxO,
          studentAssignmentInfo
        );
        const res = await COMMIT_TO_ASSIGNMENT_TX.runTx();
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
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col p-5">
            <div className="mb-4 text-lg">Enter Your Assignment Info:</div>
            <div className="mb-4 text-base">
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
              <button className="btn btn-sm btn-success" onClick={handleClick}>
                Confirm Your Commitment to Module {props.selectedModuleUTxO.data?.moduleId}
              </button>
            ) : (
              <div className="font-mono text-info text-sm uppercase">String must be 8-56 characters</div>
            )}
          </div>
          <div className="p-5 text-base">
            <div className="text-primary-content pb-3">
              <span className="text-info">Assignment:</span> {props.selectedModuleUTxO.data?.assignmentName}
            </div>
            <div className="text-primary-content pb-3">
              <span className="text-info">Module Id:</span> {props.selectedModuleUTxO.data?.moduleId}
            </div>
            <div className="text-info">Module Hash:</div>
            <pre className="text-primary-content text-xs pb-3 tooltip" data-tip="learn more">
              {truncateString(props.selectedModuleUTxO.data?.moduleHash, 40)}
            </pre>
          </div>
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default CommitToAssignment;
