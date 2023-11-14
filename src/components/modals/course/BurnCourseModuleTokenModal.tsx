"use client";

import { CourseReferenceUTxO, getConnectedTokenAsset } from "@andamiojs/core";
import { Suspense, useEffect, useState } from "react";
import Loading from "../../../app/Loading";
import Modal from "../Modal";

import BurnCourseModuleToken from "../../transactions/course/BurnCourseModuleToken";
import { useWallet } from "@meshsdk/react";
import { AssetExtended } from "@meshsdk/core";
import { andamioConfig } from "../../../andamio/config";

// Todo change type name from Module to CourseModule?
const BurnCourseModuleTokenModal = (props: { selectedModuleUTxO: CourseReferenceUTxO }) => {
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
          <button onClick={openModal} className="btn btn-warning btn-wide rounded-md" type="button">
            Burn this Module Token
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={
              <Suspense fallback={<Loading />}>
                <div className="text-sm">
                  <h1>Burn Module Token</h1>
                  <p>Burning Module: {props.selectedModuleUTxO.data?.moduleId}</p>
                  <BurnCourseModuleToken selectedModuleUTxO={props.selectedModuleUTxO} closeModal={closeModal} />
                </div>
              </Suspense>
            }
          />
        </>
      )}
    </div>
  );
};

export default BurnCourseModuleTokenModal;
