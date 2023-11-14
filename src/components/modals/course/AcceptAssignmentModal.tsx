"use client";

import React, { Suspense, useEffect, useState } from "react";
import Modal from "../Modal";
import { AssignmentUTxO, getConnectedTokenAsset } from "@andamiojs/core";
import Loading from "../../../app/Loading";
import AcceptAssignment from "../../transactions/course/AcceptAssignment";
import { AssetExtended } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { andamioConfig } from "../../../andamio/config";

const AcceptAssignmentModal = (props: { assignment: AssignmentUTxO }) => {
  const { connected, wallet } = useWallet();
  const [connectedDecider, setConnectedDecider] = useState<AssetExtended | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getDeciderToken() {
      if (connected) {
        const _res = await getConnectedTokenAsset(wallet, andamioConfig.tokens.courseDeciderPolicyID);
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
            className="btn btn-primary btn-sm"
            type="button"
          >
            Accept Assignment
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={
              <Suspense fallback={<Loading />}>
                <AcceptAssignment assignment={props.assignment} closeModal={closeModal} />
              </Suspense>
            }
          />
        </>
      )}
    </div>
  );
};

export default AcceptAssignmentModal;
