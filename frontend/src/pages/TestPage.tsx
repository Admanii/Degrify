import React, { useState } from 'react'
import Modal from '../components/general/Modal/Modal';
import Button from '../components/general/Button';
import { IMAGES } from '../constants/images';
import { Title } from '../components/general/Modal/Title';
import { SubTitle } from '../components/general/Modal/SubTitle';

const TestPage = () => {

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal2 = () => {
    setModal2(true);
  };

  const closeModal2 = () => {
    setModal2(false);
  };

  return (
    <div>
      <div className='text-3xl font-bold'>
        Testing Modals
      </div>

      <div className='my-2'>
        <Button buttonText='modal 1' onClick={() => openModal()} />
      </div>

      <div className='my-2'>
        <Button buttonText='modal 2' onClick={() => openModal2()} />
      </div>



      <Modal closeButton={true} modalState={modal} onClick={() => closeModal()}>
        <div className='flex justify-center'>
          <img src={IMAGES.info_icon}></img>
        </div>
        <Title text="Approve this degree?" />
        <SubTitle text='Are you sure you want to approve? This action cannot be undone. Degrees uploaded to blockchain can not be altered!' />
        <div className='flex my-2'>
          <div className='flex px-2 w-1/2 justify-center'>
            <button
              type="submit"
              className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-[#344054] text-xl border border-gray-300 rounded-lg shadow-md font-medium focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-gray-400"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
          <div className='flex px-2 w-1/2 justify-center'>
            <button
              type="submit"
              className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-xl border border-transparent rounded-lg shadow-sm font-medium text-white bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-red-700"
              onClick={closeModal}
            >
              Approve
            </button>
          </div>
        </div>
      </Modal>

      <Modal closeButton={true} modalState={modal2} onClick={() => closeModal2()}>
        <div className='flex justify-center'>
          <img src={IMAGES.verified_tick_icon}></img>
        </div>
        <Title text="Degree Approved?" />
        <div className='flex my-2'>
          <div className='flex px-2 w-1/2 justify-center'>
            <button
              type="submit"
              className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-[#344054] text-xl border border-gray-300 rounded-lg shadow-md font-medium focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-gray-400"
              onClick={closeModal2}
            >
              View Degree
            </button>
          </div>
          <div className='flex px-2 w-1/2 justify-center'>
            <button
              type="submit"
              className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-xl border border-transparent rounded-lg shadow-sm font-medium text-white bg-black focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-black"
              onClick={closeModal2}
            >
              Home
            </button>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default TestPage