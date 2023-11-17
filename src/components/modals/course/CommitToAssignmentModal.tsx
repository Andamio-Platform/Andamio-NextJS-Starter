"use client";

import React, { Suspense, useEffect, useState } from "react";
import Modal from "../Modal";
import { CourseReferenceUTxO, getConnectedTokenAsset } from "@andamiojs/core";
import Loading from "../../../app/Loading";
import CommitToAssignment from "../../transactions/course/CommitToAssignment";
import { useWallet } from "@meshsdk/react";
import { AssetExtended } from "@meshsdk/core";
import { andamioConfig } from "../../../andamio/config";

const CommitToAssignmentModal = (props: { selectedModuleUTxO: CourseReferenceUTxO }) => {
  const { connected, wallet } = useWallet();
  const [connectedLearner, setConnectedLearner] = useState<AssetExtended | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getLearnerToken() {
      if (connected) {
        const _res = await getConnectedTokenAsset(wallet, andamioConfig.config.courseManagementTokens.learnerPolicyID);
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
            className="btn btn-sm btn-info hover:scale-105"
          >
            Commit to Assignment
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={
              <Suspense fallback={<Loading />}>
                <CommitToAssignment selectedModuleUTxO={props.selectedModuleUTxO} closeModal={closeModal} />
              </Suspense>
            }
          />
        </>
      )}
    </div>
  );
};

export default CommitToAssignmentModal;
