import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/general/Button';
import Navbar from '../components/general/Navbar'
import { IMAGES } from '../constants/images';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/actions/authActions';
import { AppDispatch } from '../store/store';

const LoginPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { loading, userInfo, error, success } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    useEffect(() => {
        //console.log(userInfo);
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
        // console.log(data);
        await dispatch(userLogin(data))
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
                        <Button className='mt-8' buttonText="Sign In" width={384} disabled={loading} />
                        <div className='flex justify-between mt-2 w-96 text-gray-900'>
                            <Link to="/">
                                Remember me
                            </Link>
                            <Link to="/">
                                Forgot password?
                            </Link>
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