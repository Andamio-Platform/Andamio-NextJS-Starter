import { useWallet } from "@meshsdk/react";
import { prepareMintLearnerTokenTx } from "@andamiojs/core";
import { ChangeEvent, useState } from "react";
import { andamioConfig } from "../../../andamio/config";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const MintLearnerToken = (props: { closeModal: () => void }) => {
  const [tokenAlias, setTokenAlias] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "tokenAlias") setTokenAlias(value);
  };

  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { wallet, connected } = useWallet();
  if (connected) {
    const handleClick = async () => {
      try {
        if (andamioConfig.nftArtwork?.learnerNFTURL) {
          const MINT_LEARNER_TOKEN_TX = await prepareMintLearnerTokenTx(
            wallet,
            andamioConfig,
            tokenAlias,
            andamioConfig.nftArtwork?.learnerNFTURL
          );
          const res = await MINT_LEARNER_TOKEN_TX.runTx();
          setTxHash(res);
        }
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
        <div className="flex flex-col p-10">
          <div className="mb-4 text-2xl font-bold">Mint a Learner Token</div>
          <div className="mb-4 text-lg font-bold">What is a Learner Token?</div>
          <div className="mb-4 text-base">
            <p>
              An Andamio Learner Token allows you to commit to course assignments, and to create on-chain proof of what
              you have learned.
            </p>
          </div>
          <div className="mb-4 text-lg font-bold">Choosing a &quot;Token Alias&quot;</div>
          <div className="mb-4 text-base">
            <p>
              To mint an Andamio Learner Token, you must provide a name for your token. We call this your &quot;token
              alias&quot;. Some people choose to use their real name as a token alias, and others maintain privacy by
              using a different alias. Keep in mind that your token will be minted on the blockchain, where anyone can
              see it.
            </p>
          </div>
          <div className="py-5">
            <form>
              <input
                type="text"
                name="tokenAlias"
                placeholder="enter your token alias"
                onChange={handleInputChange}
                className="bg-secondary w-full my-2 p-2 text-secondary-content font-mono text-base"
              />
            </form>
          </div>
          {tokenAlias.length > 4 ? (
            <button onClick={handleClick} className="btn btn-success">
              Confirm Mint
            </button>
          ) : (
            <div className="font-mono text-info text-sm uppercase">minimum 5 characters</div>
          )}
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default MintLearnerToken;
