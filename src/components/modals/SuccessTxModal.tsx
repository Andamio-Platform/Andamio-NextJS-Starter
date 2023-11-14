"use client";

import React, { Suspense, useState } from "react";
import Modal from "./Modal";

const SuccessTxModal = (props: { txHash: string; closeModal?: () => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeErrorModal = () => {
    setIsModalOpen(false);
    if (props.closeModal) {
      props.closeModal();
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeErrorModal}
      content={
        <div className="flex flex-col items-center text-base">
          <div className="flex flex-col mb-6 font-extrabold">Tx Success!</div>
          <div className="flex flex-col font-mono">TxHash: {props.txHash}</div>
        </div>
      }
    />
  );
};

export default SuccessTxModal;
