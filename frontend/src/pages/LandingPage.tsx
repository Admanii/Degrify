import React, { useState, ChangeEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/general/Button';
import Navbar from '../components/general/Navbar'
import { IMAGES } from '../constants/images';
import { GetDegreebyHashValue } from '../store/actions/degreeActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IsLoggedIn, UserInfo } from '../store/slice/authSlice';
import ScrollTop from '../components/general/ScrollTop';

const LandingPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [hashValue, setHashValue] = useState('');
    const navigate = useNavigate()
    const accountAddress = localStorage.getItem('accountAddress') ?? '';
    const isAuthenticated = useSelector(IsLoggedIn);
    const userInfo = useSelector(UserInfo)
    const userRole = userInfo?.user?.userRole ?? '';

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

    useEffect(() => {
        if (isAuthenticated && accountAddress !== '') {
            if (userRole === 'UNIVERSITY') {
                navigate('/uni/dashboard')
            }
            else if (userRole === 'HEC') {
                navigate('/hec/dashboard')
            }
            else if (userRole === 'STUDENT') {
                navigate('/student/view')
            }
        }
    }, [accountAddress, isAuthenticated, userRole])

    return (
        // <div className="grid max-h-screen min-h-screen grid-rows-header bg-zinc-100">
        <div className="flex flex-col h-screen">
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
                        <div className="relative mt-4 font-sans">
                            <input
                                type="text"
                                className="block w-full h-14 py-2 pl-4 pr-32 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring-gray-500"
                                placeholder="Enter Hash Value"
                                value={hashValue}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                className="text-white absolute bottom-1.5 top-1.5 right-1 bg-black hover:bg-gray-800 font-bold rounded-lg text-base px-12 py-1.5 font-sans"
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                    <div className='flex justify-start w-full mt-8 text-left gap-x-24 font-sans items-center'>
                        <div className="container w-24">
                            <div className="grid grid-cols-2 gap-x-2 items-center">
                                <div className="text-4xl font-semibold">
                                    29
                                </div>
                                <div className="text-sm text-gray-900 font-medium">
                                    Universities On Board
                                </div>
                            </div>
                        </div>

                        <div className="container w-32">
                            <div className="grid grid-cols-2 gap-x-8">
                                <div className="text-4xl font-semibold">
                                    1M+
                                </div>
                                <div className="text-sm text-gray-900 font-medium">
                                    Verified Degrees
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-2 flex items-center justify-center'>
                    <img src={IMAGES.landing_image} className='w-12/12'></img>
                </div>
            </div >

            <div className='py-16 px-64 min-h-full flex flex-col items-center justify-center'>

                <div className='font-semibold text-black text-3xl mb-4'>About Us</div>

                With an increasing number of graduates in Pakistan, it is becoming increasingly 
                important to regulate the degree verification system. Despite the increasing 
                digitalization of government departments, the current system still relies on a 
                lengthy document-based process, which creates unnecessary overhead as degrees move 
                from one institution to another. To address this issue, this paper proposes a solution 
                using web 3.0 technologies to combat the problem of fake and duplicate degrees. This 
                paper proposes a blockchain-based degree verification system using web 3.0 technologies 
                to combat the problem of fake and duplicate degrees in Pakistan. The current system 
                relies on a lengthy document-based process, creating unnecessary overheads as degrees 
                move from one institution to another. Utilizing the decentralized nature of blockchain 
                technology, the proposed system stores degree information securely and verifies it 
                through every institution along the path, such as universities and the higher education 
                commission. The front-end web app provides an easy-to-use interface for students and 
                graduates to register their degrees and view their information, while the back-end 
                extracts data from the blockchain and performs verification checks using smart contracts. 
                The automation of the verification process streamlines the process and makes it more 
                efficient. In conclusion, this blockchain-based degree verification system is a 
                cutting-edge solution that utilizes web 3.0, blockchain, and smart contract technologies 
                to provide a secure, tamper-proof, and efficient means of verifying degrees. This 
                innovative solution would be a significant step towards combating the problem of fake 
                and duplicate degrees in Pakistan, making the degree verification process more reliable 
                and efficient.

            </div>
            <ScrollTop/>

           

        </div>
    )
}

export default LandingPage
