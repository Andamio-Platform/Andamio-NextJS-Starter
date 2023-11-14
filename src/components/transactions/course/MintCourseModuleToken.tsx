import { useWallet } from "@meshsdk/react";
import { CourseModule, prepareMintCourseModuleTokenTx } from "@andamiojs/core";
import { ChangeEvent, useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const MintCourseModuleToken = (props: { courseModule: CourseModule; closeModal: () => void }) => {
  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [assignmentContent, setAssignmentContent] = useState("");

  const { wallet, connected } = useWallet();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "assignmentContent") {
      setAssignmentContent(value);
    }
  };

  if (connected) {
    const handleClick = async () => {
      try {
        const MINT_COURSE_MODULE_TOKEN_TX = await prepareMintCourseModuleTokenTx(
          wallet,
          andamioConfig,
          props.courseModule,
          assignmentContent
        );
        const res = await MINT_COURSE_MODULE_TOKEN_TX.runTx();
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
        <div className="flex flex-col p-10 w-max">
          <div className="mb-4 text-xl">Add an Assignment to this Module:</div>
          <div className="mb-4">
            <form>
              <input
                type="text"
                name="assignmentContent"
                placeholder="enter assignment"
                onChange={handleInputChange}
                className="bg-secondary w-full my-2 p-2 text-secondary-content font-mono text-base"
              />
            </form>
          </div>
          {assignmentContent.length > 7 ? (
            <button onClick={handleClick} className="btn btn-success">
              Mint Course Module Token
            </button>
          ) : (
            <div className="font-mono text-info text-sm uppercase">minimum 8 characters</div>
          )}
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default MintCourseModuleToken;
