"use client";

import { ChangeEvent, Suspense, useState } from "react";
import Loading from "../../../app/Loading";
import Modal from "../Modal";
import { ProjectData } from "@andamiojs/core";
import ManageAddProject from "../../transactions/projects/AddNewProject";

const ManageAddProjectModal = () => {
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
        Add Project
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={
          <Suspense fallback={<Loading />}>
            <ManageAddProject closeModal={closeModal} />
          </Suspense>
        }
      />
    </div>
  );
};

export default ManageAddProjectModal;
