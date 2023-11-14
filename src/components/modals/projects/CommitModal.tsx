'use client'

import React, { Suspense, useState } from 'react';
import Modal from '../Modal';
import Commit from '../../transactions/projects/Commit';
import { ProjectData } from '@andamiojs/core';
import Loading from '../../../app/Loading';

const CommitModal = (props: {selectedProject: ProjectData}) => {
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        Commit
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} content={<Suspense fallback={<Loading />}><Commit selectedProject={props.selectedProject} closeModal={closeModal} /></Suspense>} />
    </div>
  );
}

export default CommitModal