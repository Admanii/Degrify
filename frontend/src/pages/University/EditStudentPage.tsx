import { useState, useEffect } from 'react'
import Button from '../../components/general/Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { GetStudentbyId, RegisterStudent, UpdateStudentbyId } from '../../store/actions/studentActions';
import { IRegisterStudent, IStudentDetails, IUpdateStudent, IUpdateStudentPayload } from '../../store/types/types';
import { UserInfo } from '../../store/slice/authSlice';
import InputField from '../../components/general/InputField';
import Modal from '../../components/general/Modal/Modal';
import { IMAGES } from '../../constants/images';
import { Title } from '../../components/general/Modal/Title';
import Layout from '../../components/general/Layout';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const EditStudentPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<IUpdateStudentPayload>()
    const userInfo = useSelector(UserInfo)
    const [student, setStudent] = useState<IStudentDetails | null>(null);
    const organisationID = userInfo?.user?.organisationID ?? '';
    const query = new URLSearchParams(window.location.search);
    const studentId = query.get('studentId') ?? '';

    const submitForm = async (data: IUpdateStudentPayload) => {
        console.log(data);
        const response = await dispatch(UpdateStudentbyId({ studentId: studentId, payload: data }))
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
        setModal(false);
    };

    const getStudent = async () => {
        const response = await dispatch(GetStudentbyId({ studentId: studentId }))
        const result = unwrapResult(response);
        setStudent(result);
        const initialValues: IUpdateStudentPayload = {
            name: result?.name ?? '',
            CNIC: result?.CNIC ?? '',
            enrollmentNumber: result?.enrollmentNumber ?? '',
            Program: result?.Program ?? '',
            CGPA: result?.CGPA ?? '',
            DateOfAdmission: result?.DateOfAdmission?.slice(0, 10) ?? '',
            fatherName: result?.fatherName ?? '',
            DateOfBirth: result?.DateOfBirth?.slice(0, 10) ?? '',
            studentID: result?.studentID ?? '',
            GraduatingYear: result?.GraduatingYear ?? '',
            TotalCreditHours: result?.TotalCreditHours ?? '',
            DateOfompletion: result?.DateOfompletion?.slice(0, 10) ?? '',
        };
        reset(initialValues);
    }

    useEffect(() => {
        getStudent();
    }, []);

    return (
        <Layout>
            <div>
                <div className='bg-zinc-100'>
                    <div className="grid min-h-screen grid-rows-header bg-zinc-100">

                        <div className='font-semibold text-black text-3xl mb-4 mt-10'>Edit Student Details</div>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div>
                                <div className="grid min-h-full grid-cols-2">
                                    <div className='p-16 flex flex-col items-end justify-start'>
                                        <div>
                                            <InputField type={'text'} {...register('name')} id={'name'} label={'Name'} hintText={'Full Name'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('CNIC')} id={"CNIC"} label={"CNIC"} hintText='42000-1234567-8' required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('enrollmentNumber')} id={'enrollmentNumber'} label={'Enrolment Number'} hintText={'2021-BSCS'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('Program')} id={'Program'} label={'Program'} hintText={'BSCS'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('CGPA')} id={'CGPA'} label={'CGPA'} hintText={'3.5'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfAdmission')} id={'DateOfAdmission'} label={'Date Of Admission'} hintText={'dd/mm/yyyy'} required={false} register={register} />
                                        </div>
                                    </div>
                                    <div className='p-16 flex flex-col items-start justify-start'>
                                        <div>
                                            <InputField type={'text'} {...register('fatherName')} id={'fatherName'} label={'Father Name'} hintText={'Father Name'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfBirth')} id={'DateOfBirth'} label={'Date of Birth'} hintText={'dd/mm/yyyy'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('studentID')} id={'studentID'} label={'Student ID'} hintText={'18041'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('GraduatingYear')} id={'GraduatingYear'} label={'Graduating Year'} hintText={'2023'} required={false} register={register} />
                                        </div>
                                        <div>
                                            <InputField type={'text'} {...register('TotalCreditHours')} id={'TotalCreditHours'} label={'Total Credit Hours'} hintText={'120'} required={false} register={register} />
                                        </div>
                                        <div
                                            data-te-datepicker-init
                                            data-te-input-wrapper-init>
                                            <InputField type={'date'} {...register('DateOfompletion')} id={'DateOfompletion'} label={'Date of Completion'} hintText={'dd/mm/yyyy'} required={false} register={register} />
                                        </div>
                                    </div>
                                </div>
                                <Button className=' mb-8 text-lg' buttonText="Update Student" width={384} />
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <Modal closeButton={true} modalState={modal} onClick={() => closeModal()}>
                        <div className='flex justify-center'>
                            <img src={IMAGES.verified_tick_icon}></img>
                        </div>
                        <Title text="Student Updated" />

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
                                    onClick={() => { navigate(`/view/studentprofile?studentId=${studentId}`) }}
                                >
                                    View Student
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>

            </div >
        </Layout>

    )
}

export default EditStudentPage