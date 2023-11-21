"use client";

import React, { Suspense, useState } from "react";
import Modal from "../Modal";
import { andamioConfig } from "../../../andamio/config";
import Link from "next/link";

const SelectEscrowModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="btn btn-success btn-wide">Stats of Individual Escows</button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={ListOfEscrow()}
      />
    </>
  );
};

function ListOfEscrow() {
  return (
    <>
      {andamioConfig.config.escrows.map((escrow) => (
        <Link
          key={escrow.contractTokenName}
          href={`/contributor-platform/escrow/${escrow.contractTokenName}`}
          className="btn btn-success btn-wide"
        >
          {escrow.name.toUpperCase()}
        </Link>
      ))}
    </>
  );
}

export default SelectEscrowModal;
