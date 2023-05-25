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

const Metamask = () => {

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
                Please connect to your Metamask wallet before login.
            <div>
                <div className='p-2 flex items-center justify-center'>
                    <img src={IMAGES.landing_image}></img>
                </div>

            </div>
            <ScrollTop />



        </div>
    )
}

export default Metamask
