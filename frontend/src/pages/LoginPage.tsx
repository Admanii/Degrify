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
import { ethers } from "ethers";

declare global {
    interface Window {
        ethereum: any;
    }
}

const LoginPage = () => {

    // interface Window {
    //     ethereum?: {
    //       request: (args: any) => Promise<any>;
    //       on: (eventName: string, callback: (...args: any[]) => void) => void;
    //       removeListener: (eventName: string, callback: (...args: any[]) => void) => void;
    //       isMetaMask?: boolean;
    //     };
    //   }

    const { userInfo, success } = useSelector((state: any) => state.auth)
    const [errorMessage, setErrorMessage] = useState('');
    const [defaultAccount, setDefaultAccount] = useState('');
    const [userBalance, setUserBalance] = useState('');
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, reset } = useForm()

    const connectWalletHandler = () => {
        if ((window.ethereum) && window.ethereum.isMetaMask) {
            console.log("MetaMask Here!");
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((result: string[]) => {
                    console.log("result:  " + result)
                    console.log("result[0]:  " + result[0])
                    accountChangedHandler(result[0]);
                    setConnButtonText("Wallet Connected");
                    getAccountBalance(result[0]);
                    localStorage.setItem("accountAddress", result[0]);
                })
                .catch((error: { message: string }) => {
                    console.log("jheree")
                    setErrorMessage(error.message);
                });
        } else {
            console.log("Need to install MetaMask");
            setErrorMessage("Please install MetaMask browser extension to interact");
        }
    };

    const getAccountBalance = (account: string) => {
        window.ethereum
            .request({ method: "eth_getBalance", params: [account, "latest"] })
            .then((balance: string) => {
                setUserBalance(ethers.formatEther(balance));
            })
            .catch((error: { message: string }) => {
                setErrorMessage(error.message);
            });
    };

    const accountChangedHandler = (newAccount: string) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    };

    window.ethereum.on("accountsChanged", accountChangedHandler);

    function getAddressFromLocalStorage(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const accessToken = localStorage.getItem('accountAddress');
                resolve(accessToken ?? '');
            }, 0);
        });
    }

    const getAccountAddress = async () => {
        const temp = await getAddressFromLocalStorage();
        const accountAddress = defaultAccount ? defaultAccount : temp;
        setDefaultAccount(accountAddress);
    };

    const navigate = useNavigate()

    useEffect(() => {
        //console.log(userInfo);
        getAccountAddress();
        var userRole = userInfo?.user?.userRole ?? '';
        console.log("defaultAccount: BEFORE " + defaultAccount)
        // need to store defaultAccount in redux or local storage -- done in local storage
        if (success && defaultAccount != '') {
            console.log("defaultAccount: AFTER " + defaultAccount)
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
    }, [navigate, success, defaultAccount])

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
                    connectWalletHandler();
                } else {
                    toast.error(result?.message, {
                        position: toast.POSITION.TOP_RIGHT
                    },);
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            <div>
                <Navbar isButton={false} onMenuButtonClick={() => { }} />
            </div>

            {/* <div className="WalletCard">
                <h4>{"Connection to MetaMask using window.ethereum methods"}</h4>
                <button onClick={connectWalletHandler}>{connButtonText}</button>
                <div className="accountDisplay">
                    <h3> Address: {defaultAccount}</h3>
                </div>
                <div className="balanceDisplay">
                    <h3>Balance: {userBalance}</h3>
                </div>
                {errorMessage}
            </div> */}

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
                                    type="password"
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