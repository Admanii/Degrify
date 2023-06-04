import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Button from '../components/general/Button';
import Navbar from '../components/general/Navbar'
import { IMAGES } from '../constants/images';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/actions/authActions';
import { AppDispatch } from '../store/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ethers } from "ethers";
import { logout } from '../store/slice/authSlice';
import LoadingScreen from '../components/general/LoadingScreen';

declare global {
    interface Window {
        ethereum: any;
    }
}

const LoginPage = () => {

    const { userInfo, success } = useSelector((state: any) => state.auth)
    const [errorMessage, setErrorMessage] = useState('');
    const [defaultAccount, setDefaultAccount] = useState('');
    const [accountAddress, setAccountAddress] = useState('');
    const [userBalance, setUserBalance] = useState('');
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(true);


    const { register, handleSubmit, reset } = useForm()

    const connectWalletHandler = async () => {
        if ((window.ethereum) && window.ethereum.isMetaMask) {
            console.log("MetaMask Here!");
            await window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then(async () => {
                    console.log("then!");
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const addr = await signer.getAddress();
                    console.log("addr");
                    console.log(addr)
                    accountChangedHandler(addr);
                    setConnButtonText("Wallet Connected");
                    getAccountBalance(addr);
                    localStorage.setItem("accountAddress", addr);
                    setErrorMessage('');
                })
                .catch((error: { message: string }) => {
                    console.log("Already processing eth_requestAccounts. Please wait")
                    setErrorMessage(error.message);
                    toast.error("Please Connect Your MetaMask Account and Login Again!", {
                        position: toast.POSITION.TOP_RIGHT
                    },);
                });
        } else {
            console.log("Need to install MetaMask");
            setErrorMessage("metamask installation error");
            toast.error("Please install MetaMask Wallet!", {
                position: toast.POSITION.TOP_RIGHT
            },);
        }
    };

    const getAccountBalance = (account: string) => {
        window.ethereum
            .request({ method: "eth_getBalance", params: [account, "latest"] })
            .then((balance: string) => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch((error: { message: string }) => {
                setErrorMessage(error.message);
            });
    };

    const accountChangedHandler = async (newAccount: string) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    };

    function getAddressFromLocalStorage(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const address = localStorage.getItem('accountAddress');
                resolve(address ?? '');
            }, 0);
        });
    }

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const temp = await getAddressFromLocalStorage();
            setAccountAddress(temp)
        })();
        var userRole = userInfo?.user?.userRole ?? '';
        //console.log("success " + success)
        if (success && accountAddress !== '') {
            // console.log("accountAddressfromlocal: " + accountAddress)
            console.log("Login Successfull");
            toast.success("Login Successfull", {
                position: toast.POSITION.TOP_RIGHT
            },);
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
    }, [navigate, success, defaultAccount, accountAddress, errorMessage])

    const logoutHandler = async () => {
        console.log("Logout clicked");
        await dispatch(logout())
    };

    const submitForm = async (data: any) => {

        try {
            const response = await dispatch(userLogin(data))
            if (response.type === 'user/login/fulfilled') {
                console.log("fulfilledd")
                const result = unwrapResult(response)
                console.log(result)
                if (result?.data != null && (result?.statusCode === 200)) {
                    await connectWalletHandler();
                    const address = await getAddressFromLocalStorage();
                    console.log("address")
                    console.log(address)
                    if (address === '') {
                        console.log("logoutHandler()")
                        logoutHandler()
                    }
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

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="grid min-h-screen grid-rows-header bg-zinc-100">
            {loading ? (
                <LoadingScreen />
            ) : (
                <>
                    <div>
                        <Navbar isButton={false} onMenuButtonClick={() => { }} />
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
                                    {/* <div className='flex justify-between mt-2 w-96 text-gray-900'>
                 <Link to="/">
                     Remember me
                 </Link>
                 <Link to="/">
                     Forgot password?
                 </Link>
             </div> */}
                                </div>
                            </form>

                        </div>

                        <div className='p-2 flex items-center justify-center'>
                            <img src={IMAGES.landing_image}></img>
                        </div>
                    </div >
                </>
            )}


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


        </div>
    )
}

export default LoginPage