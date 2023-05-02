import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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

const AddUniversity = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit } = useForm<IRegisterOrganisation>();
    const userInfo = useSelector(UserInfo)

    const submitForm = async (data: IRegisterOrganisation) => {
        // console.log(data);
        data.userRole = 'UNIVERSITY'
        await dispatch(RegisterOrganisation(data))
    }

    return (
        <div className='bg-zinc-100'>

            <div className="grid min-h-screen grid-rows-header bg-zinc-100">

                <div>
                    <Navbar onMenuButtonClick={() => { }} />
                </div>

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

                        <Button className=' mb-8 text-lg' buttonText="Add" width={384} onClick={() => { }} />

                    </div>

                </form>

            </div>

        </div>

    )
}

export default AddUniversity