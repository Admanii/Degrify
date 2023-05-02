import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../general/Button';
import Layout from '../../general/Layout';
import Navbar from "../../general/Navbar";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { RegisterStudent } from '../../../store/actions/studentActions';
import { IRegisterOrganisation, IRegisterStudent } from '../../../store/types/types';
import { UserInfo } from '../../../store/slice/authSlice';

const AddStudent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit } = useForm<IRegisterStudent>()
    const userInfo = useSelector(UserInfo)
    const organisationID = userInfo?.user?.organisationID ?? '';

    const submitForm = async (data: IRegisterStudent) => {
        // console.log(data);
        data.organisationID=organisationID
        await dispatch(RegisterStudent(data))
    }

    return (
        <div className='bg-zinc-100'>

            <div className="grid min-h-screen grid-rows-header bg-zinc-100">

                <div>
                    <Navbar onMenuButtonClick={() => { }} />
                </div>

                <div className='font-semibold text-black text-3xl mb-4 mt-10'>Add Student Details</div>

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
                                    <label htmlFor="cnic" className="flex justify-left mt-2 text-gray-700 font-bold">CNIC</label>
                                    <input
                                        type="string"
                                        id="CNIC"
                                        {...register('CNIC')}
                                        //value=""
                                        //   onChange={}
                                        required
                                        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="en" className="flex justify-left mt-2 text-gray-700 font-bold">Enrolment Number</label>
                                    <input
                                        type="string"
                                        id="enrollmentNumber"
                                        {...register('enrollmentNumber')}
                                        //value=""
                                        //   onChange={}
                                        required
                                        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="Program" className="flex justify-left mt-2 text-gray-700 font-bold">Program</label>
                                    <input
                                        type="string"
                                        id="Program"
                                        {...register('Program')}
                                        //value=""
                                        //   onChange={}
                                        required
                                        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                    />
                                </div>

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

                            </div>

                            <div className='p-16 flex flex-col items-start justify-start'>

                                <div>
                                    <label htmlFor="fname" className="flex justify-left mt-2 text-gray-700 font-bold">Father Name</label>
                                    <input
                                        type="string"
                                        id="fatherName"
                                        {...register('fatherName')}
                                        //value=""
                                        //   onChange={}
                                        required
                                        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                    />
                                </div>

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

                                <div>
                                    <label htmlFor="studentID" className="flex justify-left mt-2 text-gray-700 font-bold">Student ID</label>
                                    <input
                                        type="string"
                                        id="studentID"
                                        {...register('studentID')}
                                        //value=""
                                        //   onChange={}
                                        required
                                        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="gy" className="flex justify-left mt-2 text-gray-700 font-bold">Graduating Year</label>
                                    <input
                                        type="string"
                                        id="GraduatingYear"
                                        {...register('GraduatingYear')}
                                        //value=""
                                        //   onChange={}
                                        required
                                        className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                                    />
                                </div>

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

                        <Button className=' mb-8 text-lg' buttonText="Add" width={384} onClick={() => { }} />

                    </div>

                </form>

            </div>

        </div>

    )
}

export default AddStudent