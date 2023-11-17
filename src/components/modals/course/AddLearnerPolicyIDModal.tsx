"use client";

import React, { Suspense, useEffect, useState } from "react";
import Modal from "../Modal";
import { CourseReferenceUTxO, getConnectedTokenAsset } from "@andamiojs/core";
import { useFormik } from "formik";
import UpdateAssignmentModal from "./UpdateAssignmentModal";
import { AssetExtended } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { andamioConfig } from "../../../andamio/config";

const AddLearnerPolicyIDModal = (props: { selectedModuleUTxO: CourseReferenceUTxO }) => {
  const { connected, wallet } = useWallet();
  const [connectedCourseCreator, setConnectedCourseCreator] = useState<AssetExtended | undefined>(undefined);
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [learnerCS, setLearnerCS] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function getCourseCreator() {
      if (connected) {
        const _res = await getConnectedTokenAsset(wallet, andamioConfig.config.courseManagementTokens.courseCreatorPolicyID);
        if (_res) {
          setConnectedCourseCreator(_res);
        }
      }
    }

    if (connected) {
      getCourseCreator();
    }
  }, [connected, wallet]);

  const formik = useFormik({
    initialValues: {
      newCS: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setLearnerCS(values.newCS);
      closeModal1();
    },
  });
  const openModal1 = () => {
    setIsModal1Open(true);
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
  };

  return (
    <div>
      {connectedCourseCreator && (
        <>
          <button
            onClick={openModal1}
            className="btn btn-wide btn-warning rounded-md"
            type="button"
          >
            Update the Assignment
          </button>
          <Modal
            isOpen={isModal1Open}
            closeModal={closeModal1}
            content={
              <div className="flex flex-col gap-3">
                <h3>Enter the Policy ID of the new learner token</h3>
                <form onSubmit={formik.handleSubmit} className="text-black">
                  <input
                    id="newCS"
                    name="newCS"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.newCS}
                  />
                  <button type="submit">SUBMIT</button>
                </form>
                {learnerCS && (
                  <UpdateAssignmentModal selectedModuleUTxO={props.selectedModuleUTxO} learnerCS={learnerCS} />
                )}
              </div>
            }
          />
        </>
      )}
    </div>
  );
};

export default AddLearnerPolicyIDModal;
