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
                    <div className=' text-gray-600 text-1xl mb-4'>
                        Verify Degree
                    </div>
                    <form>
                        <div className="relative">
                            <input
                                type="search"
                                id="search"
                                className="block w-full pr-16 py-2 pl-4 text-lg  text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="Enter Hash Value"
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-1.5 bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-8 py-1.5 "
                            >
                                Verify
                            </button>
                        </div>
                    </form>


                    <div className='flex justify-between mt-2 w-96 text-gray-900'>
                       
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


