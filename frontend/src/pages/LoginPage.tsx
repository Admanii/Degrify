import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/general/Button';
import Navbar from '../components/general/Navbar'
import { IMAGES } from '../constants/images';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/actions/authActions';
import { AppDispatch } from '../store/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { loading, userInfo, success } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, reset } = useForm()

    const navigate = useNavigate()

    useEffect(() => {
        //console.log(userInfo);
        console.log("in ecffect")
        var userRole = userInfo?.user?.userRole ?? '';
        if (success) {
            if (userRole === 'UNIVERSITY') {
                navigate('/uni/dashboard')
            }
            else if (userRole === 'HEC') {
                navigate('/hec/dashboard')
            }
            else if (userRole === 'STUDENT') {
                navigate('/student/dashboard')
            }

        }
    }, [navigate, success])

    const submitForm = async (data: any) => {

        try {
            const response = await dispatch(userLogin(data))

            if (response.type === 'user/login/fulfilled') {
                console.log("fulfilledd")
                const result = unwrapResult(response)
                console.log(result)
                if (result?.data != null && (result?.statusCode === 200)) {
                    toast.success(result?.message, {
                        position: toast.POSITION.TOP_RIGHT
                    },);
                } else {
                    toast.error(result?.message, {
                        position: toast.POSITION.TOP_RIGHT
                    },);
                }
            }
            // if (response.type === 'user/login/rejected') {
            //     console.log("rejected")
            //     const result = unwrapResult(response)
            //     console.log("after rejected")
            //     console.log(result)
            //     toast.error(result?.message, {
            //         position: toast.POSITION.TOP_RIGHT
            //     },);
            // }

            // var result;
            // console.log("before wrap")
            // result = unwrapResult(response)
            // console.log("after wrap")
            // console.log(result)
            // if (result?.data != null && (result?.statusCode === 200)) {
            //     toast.success(result?.message, {
            //         position: toast.POSITION.TOP_RIGHT
            //     },);
            // }
            // else {
            //     toast.error(result?.message, {
            //         position: toast.POSITION.TOP_RIGHT
            //     },);
            // }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        // console.log("in submittt")
        // // console.log(data);
        // const response = await dispatch(userLogin(data))
        // const result = unwrapResult(response)
        // console.log("loginnnnnnnnnnnnnn")
        // console.log(result)
        // if (result?.data != null && (result?.statusCode === 200)) {
        //     toast.success(result?.message, {
        //         position: toast.POSITION.TOP_RIGHT
        //     },);
        // }
        // else {
        //     toast.error(result?.message, {
        //         position: toast.POSITION.TOP_RIGHT
        //     },);
        // }
    }

    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            <div>
                <Navbar onMenuButtonClick={() => { }} />
            </div>

            <div className="grid min-h-full grid-cols-2">
                <div className='p-16 flex flex-col items-center justify-center'>
                    <div className='font-semibold text-black text-3xl mb-4'>Sign in to your Account</div>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div>
                            <div className="mt-3">
                                <input
                                    type="text"
                                    id="email"
                                    autoComplete="email"
                                    placeholder="Email Address"
                                    {...register('email')}
                                    // value=""
                                    //   onChange={}
                                    required
                                    className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                                />
                            </div>
                            <div className="mt-3">
                                <input
                                    type="text"
                                    id="password"
                                    autoComplete="password"
                                    placeholder="Password"
                                    // value=""
                                    //   onChange={}
                                    {...register('password')}
                                    required
                                    className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                                />
                            </div>
                            <Button className='mt-8' buttonText="Sign In" width={384} />
                            <div className='flex justify-between mt-2 w-96 text-gray-900'>
                                <Link to="/">
                                    Remember me
                                </Link>
                                <Link to="/">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                    </form>

                </div>

                <div className='p-2 flex items-center justify-center'>
                    <img src={IMAGES.landing_image}></img>
                </div>
            </div >
        </div>
    )
}

export default LoginPage