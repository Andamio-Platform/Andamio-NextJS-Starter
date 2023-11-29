"use client";

import { ChangeEvent, Suspense, useState } from "react";
import Loading from "../../../app/Loading";
import Modal from "../Modal";
import { ProjectData } from "@andamiojs/core";
import ManageAddProject from "../../transactions/projects/AddNewProject";
import FundNewUTxO from "../../transactions/projects/FundNewUTxO";
import MintContribToken from "../../transactions/projects/MintContribToken";

const MintContribTokenModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="btn btn-success btn-wide" type="button">
        Mint and Send Contributor Token Pair
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={
          <Suspense fallback={<Loading />}>
            <MintContribToken closeModal={closeModal} />
          </Suspense>
        }
      />
    </div>
  );
};

export default MintContribTokenModal;
