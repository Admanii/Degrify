import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/general/Button';
import Navbar from '../components/general/Navbar'
import { IMAGES } from '../constants/images';

const LandingPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            <div>
                <Navbar onMenuButtonClick={() => { }} />
            </div>

            <div className="grid min-h-full grid-cols-2">
                <div className='p-16 flex flex-col items-center justify-center'>
                    <div className='font-semibold text-black text-5xl mb-4'>Verify Degree</div>
                    <div className="mt-3">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Enter Hash Value"
                            // value=""
                            //   onChange={}
                            required
                            className="appearance-none block mt-2 px-3 py-3 w-96 bg-white text-base text-center shadow-sm placeholder-gray-400 rounded-md border-none focus:outline-none ring-0 focus:ring-2 focus:ring-[#E6EDF0]"
                        />
                    </div>
                    <Button className='mt-8' buttonText="Verify" width={384} onClick={() => { }} />
                    <div className='flex justify-between mt-2 w-96 text-gray-900'>
                        <Link to="/">
                            Remember me
                        </Link>
                    </div>
                </div>

                <div className='p-2 flex items-center justify-center'>
                    <img src={IMAGES.landing_image}></img>
                </div>
            </div >

            <div className='p-48 flex flex-col items-center justify-center'>

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

            <div className='p-48 flex flex-col items-center justify-center'>

                <div className='font-semibold text-black text-3xl mb-4'>Meet Our Team</div>

                Clarity gives you the blocks & components you need to create a truly professional website,
                landing page or admin panel for your SaaS.

            </div>

        </div>
    )
}

export default LandingPage