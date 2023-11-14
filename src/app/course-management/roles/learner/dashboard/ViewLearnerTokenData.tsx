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
      <div className="card shadow-xl p-5 bg-secondary text-secondary-content">
        <h2 className="text-2xl text-secondary-content font-mono pb-5">Your Learner Token</h2>
        {connectedLearnerToken ? (
          <>
            <p className="text-secondary-content">You have a Learner Token:</p>
            <pre>{connectedLearnerToken}</pre>
          </>
        ) : (
          <p>
            This wallet does not current hold a Learner Token{" "}
            {learnerReferenceUTxO?.data?.currentAssignment ? (
              <span>{`because you locked your Learner Token when you committed to Module ${hexToString(
                learnerReferenceUTxO?.data?.currentAssignment
              )}.`}</span>
            ) : (
              ". Do you want to mint one?"
            )}
          </p>
        )}
        <div>
          {connectedLearnerToken == undefined && learnerReferenceUTxO == undefined ? (
            <MintLearnerTokenModal />
          ) : (
            <>
              <div className="py-3">
                <h2>Your Address</h2>
                <p>
                  {learnerReferenceUTxO?.data?.matchConnectedAddress
                    ? "Matches your on-chain address"
                    : "Does not match!"}
                </p>
              </div>
              <div className="py-3">
                <h2>Your Learner Token</h2>
                {/* Todo: There is more we could do here */}
                {connectedLearnerToken ? (
                  <p>
                    {learnerReferenceUTxO?.data?.learnerCS == connectedLearnerToken?.substring(0, 56)
                      ? "Is Valid"
                      : "Does not match!"}
                  </p>
                ) : (
                  <>
                    {address &&
                    learnerReferenceUTxO &&
                    learnerReferenceUTxO?.data?.rewardAddress.fields[0].fields[0] == resolvePaymentKeyHash(address)
                      ? "Will be sent back to this wallet"
                      : "Will not be sent to this wallet"}
                  </>
                )}
                {learnerReferenceUTxO && (
                  <BurnLearnerReferenceTokensModal learnerReferenceUTxO={learnerReferenceUTxO} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="card shadow-xl p-5 bg-secondary text-secondary-content">
        <div>
          <div>
            <h2 className="text-2xl text-secondary-content font-mono pb-5">Update Your Learner Token</h2>
            <>{learnerReferenceUTxO && <UpdateLearnerDatumModal learnerReferenceUTxO={learnerReferenceUTxO} />}</>
          </div>
          <div>
            <div>
              <h2>Current Learner Info</h2>
              <p>{learnerReferenceUTxO?.data?.learnerInfo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-xl p-5 bg-secondary text-secondary-content">
        <div>
          <div>
            <h2 className="text-2xl text-secondary-content font-mono pb-5">Current Assignment</h2>
            <>
              {learnerReferenceUTxO?.data?.currentAssignment ? (
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
                <div>No current assignment. Why not try the next one!</div>
              )}
            </>
          </div>
        </div>
      </div>
      <div className="card shadow-xl p-5 bg-secondary text-secondary-content">
        <div>
          <h2 className="text-2xl text-secondary-content font-mono pb-5">Accomplishments</h2>
          <div>
            <div className="p-2 bg-success mb-5">
              <h2>Your Completed Assigments:</h2>
              <ul>
                {learnerReferenceUTxO?.data?.completedAssignments.map((a: string, index: number) => (
                  <li key={index}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="p-2 bg-success">
              <h2>Contributor Credentials Earned</h2>
              <p>Coming Soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
