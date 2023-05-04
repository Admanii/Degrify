import { useState } from 'react'
import Button from '../../general/Button';
import Navbar from "../../general/Navbar";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { RegisterStudent } from '../../../store/actions/studentActions';
import { IRegisterStudent } from '../../../store/types/types';
import { UserInfo } from '../../../store/slice/authSlice';
import InputField from '../../general/InputField';
import Modal from '../../general/Modal/Modal';
import { IMAGES } from '../../../constants/images';
import { Title } from '../../general/Modal/Title';
import { SubTitle } from '../../general/Modal/SubTitle';
import Layout from '../../general/Layout';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const AddStudent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<IRegisterStudent>()
    const userInfo = useSelector(UserInfo)
    const organisationID = userInfo?.user?.organisationID ?? '';

    const submitForm = async (data: IRegisterStudent) => {
        // console.log(data);
        data.organisationID = organisationID
        const response = await dispatch(RegisterStudent(data))
        const result = unwrapResult(response)
        console.log(result?.statusCode)
        if (result?.data != null && (result?.statusCode === 200)) {
            setModal(true);
        }
        else {
            toast.error(result?.message, {
                position: toast.POSITION.TOP_RIGHT
            },);
        }
    }

    const [modal, setModal] = useState(false);

    // const openModal = () => {
    //     setModal(true);
    // };

    const closeModal = () => {
        setModal(false);
    };

    const clearForm = () => {
        reset();
        setModal(false);
    };

    const redirectToHome = () => {
        setModal(false);
    };

    return (
        <Layout>
            <div>
                <div className='bg-zinc-100'>
                    <div className="grid min-h-screen grid-rows-header bg-zinc-100">

                        <div className='font-semibold text-black text-3xl mb-4 mt-10'>Add Student Details</div>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div>
                                <div className="grid min-h-full grid-cols-2">
                                    <div className='p-16 flex flex-col items-end justify-start'>
                                        <div>
                                            <InputField type={'text'} {...register('name')} id={'name'} label={'Name'} hintText={'Full Name'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('CNIC')} id={"CNIC"} label={"CNIC"} hintText='42000-1234567-8' required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('enrollmentNumber')} id={'enrollmentNumber'} label={'Enrolment Number'} hintText={'Enrolment Number'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('Program')} id={'Program'} label={'Program'} hintText={'BSCS'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfAdmission')} id={'DateOfAdmission'} label={'Date Of Admission'} hintText={'dd/mm/yyyy'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('email')} id={'email'} label={'Email'} hintText={'abc@xyz.com'} required={false} register={register} />
                                        </div>
                                    </div>
                                    <div className='p-16 flex flex-col items-start justify-start'>
                                        <div>
                                            <InputField type={'text'} {...register('fatherName')} id={'fatherName'} label={'Father Name'} hintText={'Father Name'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfBirth')} id={'DateOfBirth'} label={'Date of Birth'} hintText={'dd/mm/yyyy'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('studentID')} id={'studentID'} label={'Student ID'} hintText={'123'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('GraduatingYear')} id={'GraduatingYear'} label={'Graduating Year'} hintText={'2023'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfompletion')} id={'DateOfompletion'} label={'Date of Completion'} hintText={'dd/mm/yyyy'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'password'} {...register('password')} id={'password'} label={'Password'} hintText={'*******'} required={false} register={register} />
                                        </div>
                                    </div>
                                </div>
                                <Button className=' mb-8 text-lg' buttonText="Add" width={384} />
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <Modal closeButton={true} modalState={modal} onClick={() => closeModal()}>
                        <div className='flex justify-center'>
                            <img src={IMAGES.verified_tick_icon}></img>
                        </div>
                        <Title text="Student Added" />

                        <div className='flex my-2'>
                            <div className='flex px-2 w-1/2 justify-center'>
                                <button
                                    type="submit"
                                    className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-[#344054] text-xl border border-gray-300 rounded-lg shadow-md font-medium focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-gray-400"
                                    onClick={() => { navigate("/uni/dashboard") }}
                                >
                                    Home
                                </button>
                            </div>
                            <div className='flex px-2 w-1/2 justify-center'>
                                <button
                                    type="submit"
                                    className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-xl border border-transparent rounded-lg shadow-sm font-medium text-white bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-red-700"
                                    onClick={clearForm}
                                >
                                    Add New
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>

            </div >
        </Layout>

    )
}

export default AddStudent