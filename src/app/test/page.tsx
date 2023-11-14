'use client';
import React, { useState } from 'react';
import Modal from '../../components/modals/Modal';

import { queryTreasuryInfo } from "@andamiojs/core";
import { andamioConfig } from "../../andamio/config";

export default function Test() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} content="Modal content goes here." />
    </div>
  );
}