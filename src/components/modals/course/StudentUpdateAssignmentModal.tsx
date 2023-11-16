"use client";

import React, { Suspense, useState } from "react";
import Modal from "../Modal";
import { AssignmentUTxO } from "@andamiojs/core";
import Loading from "../../../app/Loading";
import StudentUpdateAssignment from "../../transactions/course/StudentUpdateAssignment";

const StudentUpdateAssignmentModal = (props: { assignment: AssignmentUTxO }) => {
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
        Submit Assignment
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={
          <Suspense fallback={<Loading />}>
            <StudentUpdateAssignment assignment={props.assignment} closeModal={closeModal} />
          </Suspense>
        }
      />
    </div>
  );
};

export default StudentUpdateAssignmentModal;
