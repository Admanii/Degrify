import React, { useState } from 'react';
import Modal from './Modal';
import DegreeCertificate from '../../University/DegreeViewPage/DegreeCertificate';

// NOT BEING USED ANYWHERE
// EXTRA CODE
interface Props {
    name: string;
    program: string;
    graduatingYear: string;
  }
  
  function Degree({ name, program, graduatingYear }: Props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal modalState={modalIsOpen} closeButton={true} onClick={()=> closeModal()}>
          <DegreeCertificate name={name} program={program} graduatingYear={graduatingYear} />
        </Modal>
      </div>
    );
  }

export default Degree;