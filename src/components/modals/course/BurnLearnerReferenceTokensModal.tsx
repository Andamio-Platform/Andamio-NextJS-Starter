"use client";

import { AssetExtended } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { getConnectedTokenAsset, LearnerReferenceUTxO } from "@andamiojs/core";
import { Suspense, useEffect, useState } from "react";
import Loading from "../../../app/Loading";
import { andamioConfig } from "../../../andamio/config";
import BurnLearnerTokens from "../../transactions/course/BurnLearnerTokens";
import Modal from "../Modal";

// Todo change type name from Module to CourseModule?
const BurnLearnerReferenceTokensModal = (props: { learnerReferenceUTxO: LearnerReferenceUTxO }) => {
  const { connected, wallet } = useWallet();
  const [connectedLearner, setConnectedLearner] = useState<AssetExtended | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getLearnerToken() {
      if (connected) {
        const _res = await getConnectedTokenAsset(wallet, andamioConfig.tokens.learnerPolicyID);
        setConnectedLearner(_res);
      }
    }

    if (connected) {
      getLearnerToken();
    }
  }, [connected, wallet]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {connectedLearner && (
        <>
          <button onClick={openModal} className="btn btn-error btn-sm my-2" type="button">
            Burn Your Learner Token
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={
              <Suspense fallback={<Loading />}>
                <div className="text-sm">
                  <h1>Burn Learner Tokens</h1>
                  <p>Burning Tokens for: {props.learnerReferenceUTxO.data?.contributorAlias}</p>
                  <BurnLearnerTokens learnerReferenceUTxO={props.learnerReferenceUTxO} closeModal={closeModal} />
                </div>
              </Suspense>
            }
          />
        </>
      )}
    </div>
  );
};

export default BurnLearnerReferenceTokensModal;
