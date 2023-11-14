"use client";

import { ChangeEvent, Suspense, useState } from "react";
import Loading from "../../../app/Loading";
import Modal from "../Modal";
import { ProjectData } from "@andamiojs/core";
import ManageAddProject from "../../transactions/projects/AddNewProject";
import FundNewUTxO from "../../transactions/projects/FundNewUTxO";

const FundNewUTxOModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="button-1 p-3 w-fit" type="button">
        Add New Fund UTxO
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={
          <Suspense fallback={<Loading />}>
            <FundNewUTxO closeModal={closeModal} />
          </Suspense>
        }
      />
    </div>
  );
};

export default FundNewUTxOModal;
