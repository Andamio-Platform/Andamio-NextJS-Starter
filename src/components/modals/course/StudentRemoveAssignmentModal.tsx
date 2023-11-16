"use client";

import React, { Suspense, useState } from "react";
import Modal from "../Modal";
import { AssignmentUTxO } from "@andamiojs/core";
import Loading from "../../../app/Loading";
import StudentRemoveAssignment from "../../transactions/course/StudentRemoveAssignment";

const StudentRemoveAssignmentModal = (props: { assignment: AssignmentUTxO }) => {
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
        className="btn btn-error btn-sm"
        type="button"
      >
        Remove
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={
          <Suspense fallback={<Loading />}>
            <StudentRemoveAssignment assignment={props.assignment} closeModal={closeModal} />
          </Suspense>
        }
      />
    </div>
  );
};

export default StudentRemoveAssignmentModal;
