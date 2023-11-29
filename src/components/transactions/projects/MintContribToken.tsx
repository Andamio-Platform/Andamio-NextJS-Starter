import { useWallet } from "@meshsdk/react";
import { prepareMintContribTokenTx } from "@andamiojs/core";
import { ChangeEvent, useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import SuccessTxModal from "../../modals/SuccessTxModal";
import ErrorModal from "../../modals/ErrorModal";

const MintContribToken = (props: { closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    tokenAlias: "",
    contributorAddress: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { wallet, connected } = useWallet();
  if (connected) {
    const handleClick = async () => {
      try {
        const MINT_CONTIB_TOKEN_TX = await prepareMintContribTokenTx(
          wallet,
          andamioConfig,
          formData.tokenAlias,
          formData.contributorAddress
        );
        const res = await MINT_CONTIB_TOKEN_TX.runTx();
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
          <div>
            <form>
              <div className="flex flex-col">
                <div>
                  <p>Token Alias:</p>
                  <input
                    type="text"
                    name="tokenAlias"
                    value={formData.tokenAlias}
                    onChange={handleInputChange}
                    className="bg-slate-700 p-2 rounded-md font-extrabold"
                  />
                </div>
                <div>
                  <p>Contributor Address:</p>
                  <input
                    type="text"
                    name="contributorAddress"
                    value={formData.contributorAddress}
                    onChange={handleInputChange}
                    className="bg-slate-700 p-2 rounded-md font-extrabold"
                  />
                </div>
              </div>
            </form>
          </div>
          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-fit mt-6"
            type="button"
          >
            Confirm Mint
          </button>
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default MintContribToken;
