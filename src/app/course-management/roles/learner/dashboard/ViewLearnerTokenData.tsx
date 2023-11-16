"use client";

import { resolvePaymentKeyHash } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { getConnectedTokenAsset, hexToString, LearnerReferenceUTxO, queryIndividualLearnerData } from "@andamiojs/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import BurnLearnerReferenceTokensModal from "../../../../../components/modals/course/BurnLearnerReferenceTokensModal";
import MintLearnerTokenModal from "../../../../../components/modals/course/MintLearnerTokenModal";
import UpdateLearnerDatumModal from "../../../../../components/modals/course/UpdateLearnerDatumModal";
import { andamioConfig } from "../../../../../andamio/config";
import CompletedModule from "./CompletedModule";


export default function ViewLearnerTokenData() {
  const { connected, wallet } = useWallet();
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [connectedLearnerToken, setConnectedLearnerToken] = useState<string | undefined>(undefined);
  const [learnerReferenceUTxO, setLearnerReferenceUTxO] = useState<LearnerReferenceUTxO | undefined>(undefined);

  useEffect(() => {
    async function getLearnerToken() {
      const token = await getConnectedTokenAsset(wallet, andamioConfig.tokens.learnerPolicyID);
      if (token) {
        setConnectedLearnerToken(token.unit);
      }
    }
    async function getConnectedAddress() {
      if (wallet) {
        const addr = await wallet.getChangeAddress();
        setAddress(addr);
      }
    }
    if (wallet) {
      getLearnerToken();
      getConnectedAddress();
    }
  }, [wallet]);

  useEffect(() => {
    async function getLearnerDatum() {
      if (connectedLearnerToken) {
        const _datum = await queryIndividualLearnerData(wallet, andamioConfig, connectedLearnerToken);
        if (_datum) {
          setLearnerReferenceUTxO(_datum);
        }
      } else if (wallet) {
        const _datum = await queryIndividualLearnerData(wallet, andamioConfig);
        if (_datum) {
          setLearnerReferenceUTxO(_datum);
        }
      }
    }
    if (wallet) {
      getLearnerDatum();
    }
  }, [connectedLearnerToken, wallet]);

  return (
    <div className="grid grid-cols-2 gap-5 w-full">
      <div className="col-span-2 card shadow-xl p-5 bg-secondary text-secondary-content border border-primary">
        <h2 className="text-2xl text-secondary-content font-mono pb-3">Your Learner Token</h2>

        {connected ? (
          <div>
            {connectedLearnerToken == undefined && learnerReferenceUTxO == undefined ? (
              <div>
                <p className="py-3">You do not yet hold Learner Token. Click here to mint one:</p>
                <MintLearnerTokenModal />
              </div>
            ) : (
              <>
                <div className="pb-3">
                  <div className="">
                    {connectedLearnerToken ? (
                      <>
                        {learnerReferenceUTxO?.data?.learnerCS == connectedLearnerToken?.substring(0, 56) ? (
                          <div className="p-3 bg-success font-bold text-center">
                            &#127881;Your learner token is valid!&#127881;
                          </div>
                        ) : (
                          <div className="p-3 bg-error font-bold text-center">
                            Your Learner Token is not valid. Ask for help on Discord.
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="font-bold">
                        Your Learner Token{" "}
                        {address &&
                        learnerReferenceUTxO &&
                        learnerReferenceUTxO?.data?.rewardAddress.fields[0].fields[0] == resolvePaymentKeyHash(address)
                          ? `will be sent back to this wallet after you complete ${learnerReferenceUTxO.data.currentAssignment}`
                          : "will not be sent to this wallet"}
                      </p>
                    )}
                  </div>
                  <h2 className="text-2xl py-3 mt-3 border-t border-secondary-content">About Your Learner Token:</h2>
                  {/* <pre>{JSON.stringify(learnerReferenceUTxO?.data, null, 2)}</pre> */}
                  <pre>Asset Id: {connectedLearnerToken}</pre>
                  <pre>Policy Id: {connectedLearnerToken?.substring(0, 56)}</pre>
                  <pre>Token Name: {connectedLearnerToken && hexToString(connectedLearnerToken?.substring(56))}</pre>
                  <h2 className="text-2xl py-3 mt-3 border-t border-secondary-content">
                    Your Connected Wallet Address
                  </h2>
                  <p>
                    {learnerReferenceUTxO?.data?.matchConnectedAddress
                      ? "Matches your on-chain address"
                      : "Does not match!"}
                  </p>
                  {learnerReferenceUTxO?.data?.currentAssignment &&
                    learnerReferenceUTxO?.data?.currentAssignment != "no" && (
                      <p>{`Your Learner Token is locked by your commitment to Module ${hexToString(
                        learnerReferenceUTxO?.data?.currentAssignment
                      )}.`}</p>
                    )}
                </div>
              </>
            )}
          </div>
        ) : (
          <p>Connect a wallet to see your Learner Token Status</p>
        )}
      </div>

      {connected && (connectedLearnerToken || learnerReferenceUTxO?.data?.learnerInfo) && (
        <>
          <div className="card shadow-xl p-5 bg-secondary text-secondary-content border border-primary">
            <div>
              <div>
                <h2 className="text-2xl text-secondary-content font-mono pb-3">Personal Information</h2>
                {learnerReferenceUTxO?.data?.learnerInfo ? (
                  <>
                    <p className="py-2">
                      You can add a string, up to 64 characters in length, to your Learner Token. It can be a friendly
                      message, a goal you want to accomplish, a social media handle, or a personal URL. We are excited
                      to learn along with you how to use this optional personal information.
                    </p>
                    <p className="py-2 font-bold">
                      Just remember that whatever personal information you add, it will be public on the blockchain.
                    </p>
                    <div className="bg-primary text-primary-content p-3 mb-3">
                      <h2 className="text-xl font-bold text-info pb-3">Current Learner Info:</h2>
                      <p className="font-mono text-xl">"{learnerReferenceUTxO?.data?.learnerInfo}"</p>
                    </div>
                  </>
                ) : (
                  <>Connect a Wallet</>
                )}
                <>{learnerReferenceUTxO && <UpdateLearnerDatumModal learnerReferenceUTxO={learnerReferenceUTxO} />}</>
              </div>
              {learnerReferenceUTxO && <BurnLearnerReferenceTokensModal learnerReferenceUTxO={learnerReferenceUTxO} />}
            </div>
          </div>
          <div className="card shadow-xl p-5 bg-secondary text-secondary-content border border-primary">
            <div>
              <div>
                <h2 className="text-2xl text-secondary-content font-mono pb-5">Current Assignment</h2>
                <>
                  {learnerReferenceUTxO?.data?.currentAssignment &&
                  learnerReferenceUTxO?.data?.currentAssignment != "no" ? (
                    <>
                      <div className="p-2 bg-info mb-5">
                        <h2>Your Current Assigment</h2>
                        <p>
                          {learnerReferenceUTxO?.data?.currentAssignment &&
                            hexToString(learnerReferenceUTxO?.data?.currentAssignment)}
                        </p>
                      </div>
                      <Link
                        className="btn"
                        href={`/course/module/${hexToString(
                          learnerReferenceUTxO?.data?.currentAssignment
                        )}/assignment${hexToString(learnerReferenceUTxO?.data?.currentAssignment)}`}
                      >
                        Go to Current Assignment
                      </Link>
                    </>
                  ) : (
                    <div>No current assignment. Try the next one!</div>
                  )}
                </>
              </div>
            </div>
          </div>
          <div className="card shadow-xl p-5 bg-secondary text-secondary-content border border-primary">
            <div>
              <h2 className="text-2xl text-secondary-content font-mono pb-5">Accomplishments</h2>
              <div>
                <h2 className="text-xl py-3 mt-3 border-t border-secondary-content">Completed Modules:</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                  {learnerReferenceUTxO?.data?.completedAssignments.map((a: string) => (
                    <CompletedModule moduleId={a} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl py-3 mt-3 border-t border-secondary-content">Contributor Credentials Earned</h2>
                <p>Coming Soon!</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
