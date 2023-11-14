import React from 'react';
import styles from '../../styles/Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, content }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className="card bg-primary text-primary-content border border-info z-30 p-5 w-1/2">
        <div className={styles.closeButton} onClick={closeModal}>
          <div className='text-lg'>&times;</div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;