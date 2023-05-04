import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/general/Button';
import Layout from '../../components/general/Layout';
import Navbar from '../../components/general/Navbar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { RegisterStudent } from '../../store/actions/studentActions';
import { IRegisterOrganisation, IRegisterStudent } from '../../store/types/types';
import { UserInfo } from '../../store/slice/authSlice';
import { RegisterOrganisation } from '../../store/actions/organisationActions';
import Modal from '../../components/general/Modal/Modal';
import { IMAGES } from '../../constants/images';
import { Title } from '../../components/general/Modal/Title';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const AddUniversity = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<IRegisterOrganisation>();

    const submitForm = async (data: IRegisterOrganisation) => {
        // console.log(data);
        data.userRole = 'UNIVERSITY'
        const response = await dispatch(RegisterOrganisation(data))
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

    const closeModal = () => {
        setModal(false);
    };

    const clearForm = () => {
        reset();
        setModal(false);
    };

    return (

        <Layout>

            <div>

                <div className='bg-zinc-100'>

                    <div className="grid min-h-screen grid-rows-header bg-zinc-100">

                        <div className='font-semibold text-black text-3xl mt-16'>Add University Details</div>

                        <form onSubmit={handleSubmit(submitForm)}>

                            <div>

                                <div className="grid min-h-full grid-cols-2">

                                    <div className='p-16 flex flex-col items-end justify-start'>

                                        <div>
                                            <label htmlFor="Name" className=" flex justify-left mt-2 text-gray-700 font-bold">Name</label>
                                            <input
                                                type="string"
                                                id="name"
                                                {...register('name')}
                                                //value=""
                                                //   onChange={}
                                                required
                                                className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="flex justify-left mt-2 text-gray-700 font-bold">Email</label>
                                            <input
                                                type="string"
                                                id="email"
                                                {...register('email')}
                                                //value=""
                                                //   onChange={}
                                                required
                                                className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="address" className="flex justify-left mt-2 text-gray-700 font-bold">Address</label>
                                            <input
                                                type="string"
                                                id="address"
                                                {...register('address')}
                                                //value=""
                                                //   onChange={}
                                                required
                                                className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                            />
                                        </div>

                                    </div>

                                    <div className='p-16 flex flex-col items-start justify-start'>

                                        <div>
                                            <label htmlFor="pNo" className="flex justify-left mt-2 text-gray-700 font-bold">Phone Number</label>
                                            <input
                                                type="string"
                                                id="phoneNumber"
                                                {...register('phoneNumber')}
                                                //value=""
                                                //   onChange={}
                                                required
                                                className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="flex justify-left mt-2 text-gray-700 font-bold">Password</label>
                                            <input
                                                type="password"
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
                        <Title text="University Added" />

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

export default AddUniversity