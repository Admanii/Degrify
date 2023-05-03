import React, { useState } from 'react'
import Button from '../../general/Button'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterStudent } from '../../../store/actions/studentActions';
import { UserInfo } from '../../../store/slice/authSlice';
import { AppDispatch } from '../../../store/store';
import { IRegisterStudent } from '../../../store/types/types';
import Modal from '../../general/Modal/Modal';
import { IMAGES } from '../../../constants/images';
import { Title } from '../../general/Modal/Title';
import { SubTitle } from '../../general/Modal/SubTitle';
import { Student } from '../../../store/slice/studentSlice';
import TextField from './TextField';


function FormView() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit } = useForm<IRegisterStudent>()
    const userInfo = useSelector(UserInfo)
    const organisationID = userInfo?.user?.organisationID ?? '';
    const [modal, setModal] = useState(false);
    const student = useSelector(Student);

    
    const submitForm = async (data: IRegisterStudent) => {
        // console.log(data);
        data.organisationID = organisationID
        await dispatch(RegisterStudent(data))
    }
    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">

            <div className='font-semibold text-black text-3xl mb-4 mt-10'>Add Student Degree</div>

            <form onSubmit={handleSubmit(submitForm)}>

                <div>

                    <div className="grid min-h-full grid-cols-2">

                        <div className='p-16 flex flex-col items-end justify-start'>
                            <TextField defaultText={`${student?.name}`} label={'Name'}></TextField>
                            <TextField defaultText={`${student?.CNIC}`} label={'CNIC'}></TextField>
                            <TextField defaultText={student?.enrollmentNumber} label={'Enrolment Number'}></TextField>
                            <TextField defaultText={student?.Program} label={'Program'}></TextField>


                            <div
                                //className="relative mb-3 xl:w-96" 
                                data-te-datepicker-init
                                data-te-input-wrapper-init>
                                <label htmlFor="DoA" className="flex justify-left mt-2 text-gray-700 font-bold">Date of Admission</label>
                                <input
                                    type="date"
                                    id="DateOfAdmission"
                                    {...register('DateOfAdmission')}
                                    //value=""
                                    //   onChange={}
                                    required
                                    className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                />
                            </div>

                            <TextField defaultText={student?.email} label={'Email'}></TextField>

                        </div>

                        <div className='p-16 flex flex-col items-start justify-start'>

                            <TextField defaultText={student?.fatherName} label={'Father\'s Name'}></TextField>

                            <div
                                //className="relative mb-3 xl:w-96" 
                                data-te-datepicker-init
                                data-te-input-wrapper-init>

                                <label htmlFor="DateOfBirth" className="flex justify-left mt-2 text-gray-700 font-bold">Date of Birth</label>

                                <input
                                    type="date"
                                    id="DateOfBirth"
                                    {...register('DateOfBirth')}
                                    //value=""
                                    //   onChange={}
                                    required
                                    className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                />
                            </div>

                            <TextField defaultText={student?.studentID} label={'Student ID'}></TextField>

                            <TextField defaultText={student?.GraduatingYear} label={'Graduating Year'}></TextField>

                            <div
                                //className="relative mb-3 xl:w-96" 
                                data-te-datepicker-init
                                data-te-input-wrapper-init>
                                <label htmlFor="DateOfompletion" className="flex justify-left mt-2 text-gray-700 font-bold">Date of Completion</label>
                                <input
                                    type="date"
                                    id="DateOfompletion"
                                    {...register('DateOfompletion')}
                                    //value=""
                                    //   onChange={}
                                    required
                                    className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="flex justify-left mt-2 text-gray-700 font-bold">Password</label>
                                <input
                                    type="string"
                                    id="password"
                                    {...register('password')}
                                    //value=""
                                    //   onChange={}
                                    required
                                    className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                />
                            </div>


                        </div>

                    </div>
                    <Modal closeButton={true} modalState={modal} onClick={() => closeModal()}>
                        <div className='flex justify-center'>
                            <img src={IMAGES.info_icon}></img>
                        </div>
                        <Title text="Upload this degree?" />
                        <SubTitle text='Are you sure you want to upload this degree?' />
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
                                    Upload
                                </button>
                            </div>
                        </div>
                    </Modal>
                    <Button className=' mb-8 text-lg' buttonText="Upload" width={384} onClick={() => openModal()} />
                </div>
            </form>
        </div>
    )
}

export default FormView