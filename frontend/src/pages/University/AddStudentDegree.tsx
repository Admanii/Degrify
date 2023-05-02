import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { IRegisterStudent } from '../../store/types/types';
import { UserInfo } from '../../store/slice/authSlice';
import { RegisterStudent } from '../../store/actions/studentActions';
import Button from '../../components/general/Button';
import Navbar from '../../components/general/Navbar';
import Layout from '../../components/general/Layout';
import FormView from '../../components/University/AddStudentDegree/FormView';

function AddStudentDegree() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit } = useForm<IRegisterStudent>()
    const userInfo = useSelector(UserInfo)
    const organisationID = userInfo?.user?.organisationID ?? '';
  

    const submitForm = async (data: IRegisterStudent) => {
        // console.log(data);
        data.organisationID=organisationID
        await dispatch(RegisterStudent(data))
    }
  return (
    <Layout>
    
    <FormView/>
</Layout>

            
    
        )
    }


export default AddStudentDegree