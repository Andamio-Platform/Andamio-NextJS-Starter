'use client'

import React, { Suspense, useState } from 'react';
import Modal from '../Modal';
import { ProjectData } from '@andamiojs/core';
import Loading from '../../../app/Loading';
import Distribute from '../../transactions/projects/Distribute';

const DistributeModal = (props: {selectedProject: ProjectData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="btn btn-success btn-sm"
        type="button"
      >
        Distribute
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} content={<Suspense fallback={<Loading />}><Distribute selectedProject={props.selectedProject} closeModal={closeModal} /></Suspense>} />
    </div>
  );
}

export default DistributeModal