import React from 'react'
import DegreeCertificate from '../components/University/DegreeViewPage/DegreeCertificate'
import Layout from '../components/general/Layout'
import View from '../components/University/StudentProfile/View'
import { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { GetStudentbyId } from '../store/actions/studentActions'
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

    useEffect(() => {
        getStudent();
    }, [])

    const getStudent = async () => {
        await dispatch(GetStudentbyId({ studentId: studentId }))
    }

    return (
        <Layout>
            <View headingText={'STUDENT PROFILE'} />
        </Layout>
    )
}

export default StudentProfileView