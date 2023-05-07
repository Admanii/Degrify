import React, { useState, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/general/Button';
import Navbar from '../components/general/Navbar'
import { IMAGES } from '../constants/images';
import { GetDegreebyHashValue } from '../store/actions/degreeActions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const LandingPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [hashValue, setHashValue] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await dispatch(GetDegreebyHashValue({ hashValue: hashValue }))
        const result = unwrapResult(response)
        if (result?.statusCode === 200 && result?.data != null) {
            toast.success(result?.message, {
                position: toast.POSITION.TOP_RIGHT
            },);
            navigate(`/view/degreecertificate?hashValue=${hashValue}`);
        } else {
            toast.error(result?.message, {
                position: toast.POSITION.TOP_RIGHT
            },);
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHashValue(event.target.value);
    };

    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            <div>
                <Navbar isButton={true} onMenuButtonClick={() => { }} />
            </div>

            <div className="grid min-h-full grid-cols-2">
                <div className='p-16 flex flex-col items-left justify-center ml-24'>

                    <div className='font-semibold text-black text-5xl mb-4 text-left'>Verify Degree</div>
                    <div className=' text-gray-600 text-1xl mb-4 mr-28 mt-8 text-left'>
                        Are you a recruiter trying to verify student Degree?
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mt-4">
                            <input
                                type="text"
                                className="block w-3/4 py-2 pl-4 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="Enter Hash Value"
                                value={hashValue}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                className="text-white absolute bottom-1.5 bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-9 py-1.5"
                            >
                                Verify
                            </button>
                        </div>
                    </form>

                    <div className="grid grid-cols-2 mt-10 text-left">

                        <div className="container w-20">
                            <div className="grid grid-cols-2 gap-x-2">

                                <div className="text-3xl font-bold">
                                    29
                                </div>

                                <div className="text-sm text-gray-900 font-normal">
                                    Universities On Board
                                </div>

                            </div>
                        </div>

                        <div className="container w-28">
                            <div className="grid grid-cols-2 gap-x-8">

                                <div className="text-3xl font-bold">
                                    1M+
                                </div>

                                <div className="text-sm text-gray-900 font-normal">
                                    Verified Degrees
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className='p-2 flex items-center justify-center'>
                    <img src={IMAGES.landing_image}></img>
                </div>
            </div >

            <div className='py-16 px-64 flex flex-col items-center justify-center'>

                <div className='font-semibold text-black text-3xl mb-4'>About Us</div>

                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.

            </div>

            <div className='py-16 px-64 flex flex-col items-center justify-center'>

                <div className='font-semibold text-black text-3xl mb-4'>Meet Our Team</div>

                Clarity gives you the blocks & components you need to create a truly professional website,
                landing page or admin panel for your SaaS.

            </div>

        </div>
    )
}

export default LandingPage
