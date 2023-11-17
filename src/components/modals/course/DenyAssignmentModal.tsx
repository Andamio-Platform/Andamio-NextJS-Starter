"use client";

import React, { Suspense, useEffect, useState } from "react";
import Modal from "../Modal";
import { AssignmentUTxO, getConnectedTokenAsset } from "@andamiojs/core";
import Loading from "../../../app/Loading";
import DenyAssignment from "../../transactions/course/DenyAssignment";
import { useWallet } from "@meshsdk/react";
import { AssetExtended } from "@meshsdk/core";
import { andamioConfig } from "../../../andamio/config";

const DenyAssignmentModal = (props: { assignment: AssignmentUTxO }) => {
  const { connected, wallet } = useWallet();
  const [connectedDecider, setConnectedDecider] = useState<AssetExtended | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getDeciderToken() {
      if (connected) {
        const _res = await getConnectedTokenAsset(wallet, andamioConfig.config.courseManagementTokens.courseDeciderPolicyID);
        setConnectedDecider(_res);
      }
    }

    if (connected) {
      getDeciderToken();
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
      {connectedDecider && (
        <>
          <button
            onClick={openModal}
            className="btn btn-error btn-sm"
            type="button"
          >
            Deny
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={
              <Suspense fallback={<Loading />}>
                <DenyAssignment assignment={props.assignment} closeModal={closeModal} />
              </Suspense>
            }
          />
        </>
      )}
    </div>
  );
};

export default DenyAssignmentModal;
