import { useWallet } from "@meshsdk/react";
import { andamioConfig } from "../../../andamio/config";
import { ChangeEvent, useState } from "react";
import { prepareFundNewUTxOTx } from "@andamiojs/core";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const FundNewUTxO = (props: { closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    adaAmount: 0,
    projectTokenAmount: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "adaAmount" || name === "projectTokenAmount"
          ? parseInt(value, 10)
          : value,
    });
  };

  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { wallet, connected } = useWallet();
  if (connected) {
    const handleClick = async () => {
      try {
        const MANAGE_ADD_PROJECT_TX = await prepareFundNewUTxOTx(
          wallet,
          andamioConfig,
          formData.adaAmount,
          formData.projectTokenAmount
        );
        const res = await MANAGE_ADD_PROJECT_TX.runTx();
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
          <SuccessTxModal txHash={txHash} closeModal={props.closeModal} />
        ) : null}
        {errorMessage !== "" ? (
          <ErrorModal
            errorMessage={errorMessage}
            closeModal={props.closeModal}
          />
        ) : null}
        <div className="flex flex-col py-10 items-center bg-gradient-br w-max p-24">
          <div className="font-extrabold mb-4 text-xl">Enter Amounts</div>
          <div>
            <form>
              <table>
                <tr>
                  <td>ADA Amount:</td>
                  <td className="p-4">
                    <input
                      type="number"
                      name="adaAmount"
                      value={formData.adaAmount}
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Project Token Amount:</td>
                  <td className="p-4">
                    <input
                      type="number"
                      name="projectTokenAmount"
                      value={formData.projectTokenAmount}
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-fit mt-6"
            type="button"
          >
            Confirm Add New Fund UTxO
          </button>
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default FundNewUTxO;
