import { useEffect, useState } from 'react'
import Button from '../../components/general/Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { RegisterStudent } from '../../store/actions/studentActions';
import { IRegisterStudent } from '../../store/types/types';
import { UserInfo } from '../../store/slice/authSlice';
import InputField from '../../components/general/InputField';
import Modal from '../../components/general/Modal/Modal';
import { IMAGES } from '../../constants/images';
import { Title } from '../../components/general/Modal/Title';
import Layout from '../../components/general/Layout';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import DropDownField from '../../components/general/DropDownField';

const AddStudent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, setValue } = useForm<IRegisterStudent>()
    const userInfo = useSelector(UserInfo)
    const organisationID = userInfo?.user?.organisationID ?? '';
    const organisationName = userInfo?.user?.name ?? '';
    const [name, setName] = useState('');
    const [erp, setErp] = useState('');
    const [email, setEmail] = useState('');
    const [program, setProgram] = useState('');
    const [gradYear, setgradYear] = useState('');
    const [enrollmentNumber, setEnrollmentNumber] = useState('');

    const submitForm = async (data: IRegisterStudent) => {
        // console.log(data);
        data.organisationID = organisationID
        const response = await dispatch(RegisterStudent(data))
        const result = unwrapResult(response)
        //console.log(result?.statusCode)
        if (result?.data != null && (result?.statusCode === 200)) {
            setModal(true);
        }
        else {
            toast.error(result?.message, {
                position: toast.POSITION.TOP_RIGHT
            },);
        }
    }

    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    };

    const clearForm = () => {
        reset();
        setValue('GraduatingYear', '');
        setValue('enrollmentNumber', '');
        setValue('email', '');
        setModal(false);
    };

    const handleDateCompletionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const year = e.target.value.split("-")[0];
        setgradYear(year);
        setValue('GraduatingYear', year);
        console.log(gradYear)
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = e.target.value;
        setName(enteredName);
    }

    const handleErpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredERP = e.target.value;
        setErp(enteredERP);
    }

    const handleProgramChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const enteredProgram = e.target.value;
        setProgram(enteredProgram);
    }
    const handleGradYearChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const enteredGradYear = e.target.value;
        setgradYear(enteredGradYear);
    }

    function removeSpaces(str: string) {
        return str.replace(/\s/g, "");
    }

    const generateEmail = () => {
        const generatedEmail = name.toLowerCase() + "_" + erp + "@" + organisationName.toLowerCase() + ".degrify.com";
        return removeSpaces(generatedEmail);
    }
    
    const generateEnrolmentNumber = () => {
        var generatedEnrolmentNumber = ''
        if (gradYear || program) {
            generatedEnrolmentNumber = gradYear + "-" + program;
        }
        return generatedEnrolmentNumber;
    }

    useEffect(() => {
        const generatedEmail = generateEmail()
        setEmail(generatedEmail)
        setValue('email', generatedEmail);
        console.log(email)
    }, [name, erp, email])

    useEffect(() => {
        const generatedEnrolmentNumber = generateEnrolmentNumber();
        setEnrollmentNumber(generatedEnrolmentNumber)
        setValue('enrollmentNumber', generatedEnrolmentNumber);
    }, [gradYear, program, enrollmentNumber])

    return (
        <Layout>
            <div>
                <div className='bg-zinc-100'>
                    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
                        {/* <HeadingWithSpan Text={'Add Student Details'} marginTop={'6'} marginLeft={'48'}/> */}
                        <div className='font-bold text-2xl mt-10 ml-4'>Add Student Details</div>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div>
                                <div className="grid grid-cols-2">
                                    <div className='px-16 py-6 flex flex-col items-end justify-start'>
                                        <div>
                                            <InputField type={'text'} {...register('name')} id={'name'} label={'First Name'} hintText={'First Name'} required={false} register={register} onChange={handleNameChange} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('CNIC')} id={"CNIC"} label={"CNIC"} hintText='42000-1234567-8' required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfAdmission')} id={'DateOfAdmission'} label={'Date Of Admission'} hintText={'2023-05-17'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <DropDownField type={'text'} {...register('Program')} id={'Program'} label={'Program'} hintText={'BSCS'} required={false} register={register} onChange={handleProgramChange} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('enrollmentNumber')} id={'enrollmentNumber'} label={'Enrolment Number'} hintText={'2021-BSCS'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('CGPA')} id={'CGPA'} label={'CGPA'} hintText={'3.5'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('email')} id={'email'} label={'Email'} hintText={'example@gmail.com'} required={false} register={register} defaultValue={email} />
                                        </div>
                                    </div>
                                    <div className='px-16 py-6 flex flex-col items-start justify-start'>
                                        <div>
                                            <InputField type={'text'} {...register('fatherName')} id={'fatherName'} label={'Father Name'} hintText={'Father Name'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfBirth')} id={'DateOfBirth'} label={'Date of Birth'} hintText={'dd/mm/yyyy'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfompletion')} id={'DateOfompletion'} label={'Date of Completion'} hintText={'dd/mm/yyyy'} required={false} register={register} onChange={handleDateCompletionChange} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('GraduatingYear')} id={'GraduatingYear'} label={'Graduating Year'} hintText={'2023'} required={false} register={register} onChange={handleGradYearChange} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('studentID')} id={'studentID'} label={'Student ID'} hintText={'12345'} required={false} register={register} onChange={handleErpChange} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('TotalCreditHours')} id={'TotalCreditHours'} label={'Total Credit Hours'} hintText={'120'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'password'} {...register('password')} id={'password'} label={'Password'} hintText={'*******'} required={false} register={register} />
                                        </div>
                                    </div>
                                </div>
                                <Button className=' mb-8 text-lg' buttonText="Add" width={384} />
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <Modal closeButton={true} modalState={modal} onClick={() => closeModal()}>
                        <div className='flex justify-center'>
                            <img src={IMAGES.verified_tick_icon}></img>
                        </div>
                        <Title text="Student Added" />

                        <div className='flex my-2'>
                            <div className='flex px-2 w-1/2 justify-center'>
                                <button
                                    type="submit"
                                    className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-[#344054] text-xl border border-gray-300 rounded-lg shadow-md font-medium focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-gray-400"
                                    onClick={() => { navigate("/uni/dashboard") }}
                                >
                                    Home
                                </button>
                            </div>
                            <div className='flex px-2 w-1/2 justify-center'>
                                <button
                                    type="submit"
                                    className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-xl border border-transparent rounded-lg shadow-sm font-medium text-white bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-red-700"
                                    onClick={clearForm}
                                >
                                    Add New
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>

            </div >
        </Layout>

    )
}

export default AddStudent