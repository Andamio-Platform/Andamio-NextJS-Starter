import { useWallet } from "@meshsdk/react";
import {
  CommitTx,
  ProjectData,
  escrowByContractToken,
  hexToString,
  posixToDateString,
  prepareCommitTx,
} from "@andamiojs/core";
import { andamioConfig } from "../../../andamio/config";
import { useState } from "react";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const Commit = (props: {
  selectedProject: ProjectData;
  closeModal: () => void;
}) => {
  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { wallet, connected } = useWallet();
  if (connected) {
    const handleClick = async () => {
      try {
        const COMMIT_TX = await prepareCommitTx(
          wallet,
          andamioConfig,
          props.selectedProject,
        );
        const res = await COMMIT_TX.runTx();
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
      {txHash !== "" ? (
          <SuccessTxModal
            txHash={txHash}
            closeModal={props.closeModal}
          />
        ) : null}
        {errorMessage !== "" ? (
          <ErrorModal
            errorMessage={errorMessage}
            closeModal={props.closeModal}
          />
        ) : null}
        <div className="flex flex-col py-10 items-center bg-gradient-br w-max p-24">
          <div className="font-extrabold mb-4 text-xl">Selected Project</div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td className="font-bold">
                    <text className="mr-10">Project:</text>
                  </td>
                  <td>
                    {hexToString(
                      props.selectedProject.projectHashId
                    ).toUpperCase()}
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Expires:</td>
                  <td>
                    {posixToDateString(props.selectedProject.expirationTime)}
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">ADA:</td>
                  <td>{props.selectedProject.lovelaceAmount / 1000000}</td>
                </tr>
                <tr>
                  <td className="font-bold">tGimbals:</td>
                  <td>{props.selectedProject.projectTokenAmount}</td>
                </tr>
                <tr>
                  <td className="font-bold">Escrow:</td>
                  <td>
                    {escrowByContractToken(
                      andamioConfig,
                      props.selectedProject.contractToken
                    ).name.toUpperCase()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-fit mt-6"
            type="button"
          >
            Confirm Commit
          </button>
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default Commit;
