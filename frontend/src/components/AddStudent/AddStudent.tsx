import Heading from "../../pages/University/Components/test";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../general/Button';
import Layout from '../general/Layout';
import Navbar from "../general/Navbar";

const AddStudent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">

            <div>
                <Navbar onMenuButtonClick={() => { }} />
            </div>

            <div className='font-semibold text-black text-3xl mb-4 mt-10'>Add Student Details</div>

            <div className="grid min-h-full grid-cols-2">

                <div className='p-16 flex flex-col items-center justify-center'>

                    <div className="mt-3">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Name"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <div className="mt-3">
                        <input
                            type="string"
                            name="enrolment number"
                            id="enrolment_number"
                            autoComplete="enrolment number"
                            placeholder="Enrolment Number"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <div className="mt-3">
                        <input
                            type="string"
                            name="cnic"
                            id="cnic"
                            autoComplete="cnic"
                            placeholder="CNIC Number"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <div
                        //className="relative mb-3 xl:w-96" 
                        className="mt-3"
                        data-te-datepicker-init
                        data-te-input-wrapper-init>
                        
                        <input
                            type="date"
                            name="DoA"
                            id="DoA"
                            autoComplete="DoA"
                            placeholder="Date of Admission"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    
                </div>

                <div className='p-16 flex flex-col items-center justify-center'>

                    <div className="mt-3">
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            autoComplete="fname"
                            placeholder="Father Name"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <div className="mt-3">
                        <input
                            type="string"
                            name="erp"
                            id="erp"
                            autoComplete="erp"
                            placeholder="ERP"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <div
                        //className="relative mb-3 xl:w-96" 
                        className="mt-3"
                        data-te-datepicker-init
                        data-te-input-wrapper-init>
                        <label htmlFor="DoB" className="block mt-2 mb-1 text-gray-700 font-bold">Date of Birth</label>

                        <input
                            type="date"
                            name="DoB"
                            id="DoB"
                            autoComplete="DoB"
                            placeholder="Date of Birth"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                        <div className="relative mt-2">
                            <input
                                type="date"
                                name="DoB"
                                id="DoB"
                                autoComplete="DoB"
                                value=""
                                //   onChange={}
                                required
                                className="appearance-none block w-96 px-3 py-3 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#E6EDF0]"
                            />
                            <label htmlFor="DoB" className="absolute left-3 top-2 text-gray-400 text-sm pointer-events-none">
                                Date of Birth
                            </label>
                        </div>
                    </div>
                    <div
                        //className="relative mb-3 xl:w-96" 
                        className="mt-3"
                        data-te-datepicker-init
                        data-te-input-wrapper-init>

                        <input
                            type="date"
                            name="DoC"
                            id="DoC"
                            autoComplete="DoC"
                            placeholder="Date of Completion"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>

                </div>

                

            </div >
            <Button className='mt-8' buttonText="Add" width={384} onClick={() => { }} />
        </div>
    )
}

export default AddStudent