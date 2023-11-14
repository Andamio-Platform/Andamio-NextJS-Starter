"use client";

import React, { Suspense, useEffect, useState } from "react";
import Modal from "../Modal";
import { getConnectedTokenAsset, LearnerReferenceUTxO } from "@andamiojs/core";
import Loading from "../../../app/Loading";
import UpdateLearnerDatum from "../../transactions/course/UpdateLearnerDatum";
import { AssetExtended } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { andamioConfig } from "../../../andamio/config";

const UpdateLearnerDatumModal = (props: { learnerReferenceUTxO: LearnerReferenceUTxO }) => {
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
          <button
            onClick={openModal}
            className="btn btn-primary"
            type="button"
          >
            Update my Learner Info
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={
              <Suspense fallback={<Loading />}>
                <UpdateLearnerDatum learnerReferenceUTxO={props.learnerReferenceUTxO} closeModal={closeModal} />
              </Suspense>
            }
          />
        </>
      )}
    </div>
  );
};

export default UpdateLearnerDatumModal;
