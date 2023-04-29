import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../general/Button';
import Layout from '../../general/Layout';
import Navbar from "../../general/Navbar";

const AddStudent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className='bg-zinc-100'>
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">

            <div>
                <Navbar onMenuButtonClick={() => { }} />
            </div>

            <div className='font-semibold text-black text-3xl mb-4 mt-10'>Add Student Details</div>

            <div className="grid min-h-full grid-cols-2">

                <div className='p-16 flex flex-col items-center justify-start'>

                    <div>
                        <label htmlFor="Name" className=" flex justify-left mt-2 text-gray-700 font-bold">Name</label>
                        <input
                            type="text"
                            id="name"
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
                            id="enrolment_number"
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
                            id="cnic"
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
                            id="DoA"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="semester" className="flex justify-left mt-2 text-gray-700 font-bold">Semester</label>
                        <input
                            type="string"
                            id="semester"
                            value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="cd" className="flex justify-left mt-2 text-gray-700 font-bold">Course Description</label>
                        <input
                            type="string"
                            id="cd"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"/>
                    </div>
                    <div>
                        <label htmlFor="gpa" className="flex justify-left mt-2 text-gray-700 font-bold">GPA</label>
                        <input
                            type="string"
                            id="gpa"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="marks" className="flex justify-left mt-2 text-gray-700 font-bold">Marks</label>
                        <input
                            type="string"
                            id="marks"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="CGPA" className="flex justify-left mt-2 text-gray-700 font-bold">CGPA</label>
                        <input
                            type="string"
                            id="cgpa"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="tch" className="flex justify-left mt-2 text-gray-700 font-bold">Total Credit Hours</label>
                        <input
                            type="string"
                            id="tch"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    
                </div>

                <div className='p-16 flex flex-col justify-start'>

                    <div>
                        <label htmlFor="fname" className="flex justify-left mt-2 text-gray-700 font-bold">Father Name</label>
                        <input
                            type="text"
                            id="fname"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="erp" className="flex justify-left mt-2 text-gray-700 font-bold">ERP</label>
                        <input
                            type="string"
                            id="erp"
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

                        <label htmlFor="DoB" className="flex justify-left mt-2 text-gray-700 font-bold">Date of Birth</label>

                        <input
                            type="date"
                            id="DoB"
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
                        <label htmlFor="DoC" className="flex justify-left mt-2 text-gray-700 font-bold">Date of Completion</label>
                        <input
                            type="date"
                            id="DoC"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="cno" className="flex justify-left mt-2 text-gray-700 font-bold">Course Number</label>
                        <input
                            type="string"
                            id="cno"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="ch" className="flex justify-left mt-2 text-gray-700 font-bold">Credit Hours</label>
                        <input
                            type="string"
                            id="ch"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="cg" className="flex justify-left mt-2 text-gray-700 font-bold">CNIC Grade</label>
                        <input
                            type="string"
                            id="cg"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="rg" className="flex justify-left mt-2 text-gray-700 font-bold">Relative Grading</label>
                        <input
                            type="string"
                            id="rg"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="cp" className="flex justify-left mt-2 text-gray-700 font-bold">Cumulative Percentage</label>
                        <input
                            type="string"
                            id="cp"
                            //value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm rounded-md border-none"
                        />
                    </div>

                </div>

            </div>
   
        </div>

            <Button className=' mb-8 text-lg' buttonText="Add" width={384} onClick={() => { }} />

        </div>
        
    )
}

export default AddStudent