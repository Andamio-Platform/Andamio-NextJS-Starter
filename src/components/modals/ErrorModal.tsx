"use client";

import React, { Suspense, useState } from "react";
import Modal from "./Modal";

const ErrorModal = (props: {
  errorMessage: string;
  closeModal?: () => void;
}) => {
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
      content={<div className="p-10">Error: {props.errorMessage}</div>}
    />
  );
};

export default ErrorModal;
