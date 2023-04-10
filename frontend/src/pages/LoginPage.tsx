import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/general/Button';
import Navbar from '../components/general/Navbar'
import { IMAGES } from '../constants/images';

const LoginPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            <div>
                <Navbar onMenuButtonClick={() => { }} />
            </div>

            <div className="grid min-h-full grid-cols-2">
                <div className='p-16 flex flex-col items-center justify-center'>
                    <div className='font-semibold text-black text-3xl mb-4'>Sign in to your Account</div>
                    <div className="mt-3">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Email Address"
                            // value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <div className="mt-3">
                        <input
                            type="text"
                            name="password"
                            id="password"
                            autoComplete="password"
                            placeholder="Password"
                            // value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <Button className='mt-8' buttonText="Sign In" width={384} onClick={() => { }} />
                    <div className='flex justify-between mt-2 w-96 text-gray-900'>
                        <Link to="/">
                            Remember me
                        </Link>
                        <Link to="/">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <div className='p-2 flex items-center justify-center'>
                    <img src={IMAGES.landing_image}></img>
                </div>
            </div >
        </div>
    )
}

export default LoginPage