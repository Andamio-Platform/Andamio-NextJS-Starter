"use client";

import React, { Suspense, useEffect, useState } from "react";
import Modal from "../Modal";
import { CourseReferenceUTxO, getConnectedTokenAsset } from "@andamiojs/core";
import Loading from "../../../app/Loading";
import UpdateAssignmentDatum from "../../transactions/course/UpdateAssignmentDatum";
import { useWallet } from "@meshsdk/react";
import { AssetExtended } from "@meshsdk/core";
import { andamioConfig } from "../../../andamio/config";

const UpdateAssignmentModal = (props: { selectedModuleUTxO: CourseReferenceUTxO; learnerCS: string }) => {
  const { connected, wallet } = useWallet();
  const [connectedCourseCreator, setConnectedCourseCreator] = useState<AssetExtended | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getCourseCreator() {
      if (connected) {
        const _res = await getConnectedTokenAsset(wallet, andamioConfig.tokens.courseCreatorPolicyID);
        if (_res) {
          setConnectedCourseCreator(_res);
        }
      }
    }

    if (connected) {
      getCourseCreator();
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
      {connectedCourseCreator && (
        <>
          <button
            onClick={openModal}
            className="btn btn-primary"
            type="button"
          >
            Update Assignment
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={
              <Suspense fallback={<Loading />}>
                <UpdateAssignmentDatum
                  selectedModuleUTxO={props.selectedModuleUTxO}
                  newLearnerCS={props.learnerCS}
                  closeModal={closeModal}
                />
              </Suspense>
            }
          />
        </>
      )}
    </div>
  );
};

export default UpdateAssignmentModal;
