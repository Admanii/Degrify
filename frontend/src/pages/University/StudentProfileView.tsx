import React, { useState } from 'react'
import DegreeCertificate from '../../components/University/DegreeViewPage/DegreeCertificate'
import Layout from '../../components/general/Layout'
import View from '../../components/University/StudentProfile/View'
import { AppDispatch } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { GetStudentbyId } from '../../store/actions/studentActions'
import { Student } from '../../store/slice/studentSlice'
import { GetDegreebyStudentId } from '../../store/actions/degreeActions'
import { unwrapResult } from '@reduxjs/toolkit'
import { IStudentDetails } from '../../store/types/types'
const name = "Muhammad Ahmed"
const erp = "19717"
const NameErp = name + " " + erp
const programDeg = "BSCS"
const graduatingYear = "2023"

function getCaseClass(programDeg: string) {
    switch (programDeg) {
        case 'BSCS':
            return programDeg = "Bachelor of Science in Computer Science (BSCS)";
        case 'BBA':
            return 'Bachelor of Business Administration (BBA)';
        default:
            return '';
    }
}

const StudentProfileView = () => {

    const dispatch = useDispatch<AppDispatch>();
    const query = new URLSearchParams(window.location.search);
    const studentId = query.get('studentId') ?? '';
    const [isDegreeExist, setIsDegreeExists] = useState(false);
    const [degreeId, setdegreeId] = useState('');
    const student = useSelector(Student);

    useEffect(() => {
        getStudent();
        isDegreeExists()
    }, [isDegreeExist])

    const getStudent = async () => {
        await dispatch(GetStudentbyId({ studentId: studentId }))
    }

    const isDegreeExists = async () => {
        const response = await dispatch(GetDegreebyStudentId({ studentId: studentId }))
        const result = unwrapResult(response);
        if (result?.message === 'Exists' && (result?.statusCode === 200)) {
            setIsDegreeExists(true);
            setdegreeId(result?.data._id)
        }
    }

    return (
        <Layout>
            <View student={student} isDegreeExist={isDegreeExist} degreeId={degreeId} headingText={'STUDENT PROFILE'} />
        </Layout>
    )
}

export default StudentProfileView