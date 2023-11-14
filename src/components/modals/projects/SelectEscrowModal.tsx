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
      <button onClick={openModal} className="button-1 p-3 w-fit">Stats of Individual Escows</button>
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
      {andamioConfig.escrows.map((escrow) => (
        <Link
          key={escrow.contractTokenName}
          href={`/contributor-platform/escrow/${escrow.contractTokenName}`}
          className="button-1 p-3 w-fit"
        >
          {escrow.name.toUpperCase()}
        </Link>
      ))}
    </>
  );
}

export default SelectEscrowModal;
