import React from 'react'
import DegreeCertificate from '../components/University/DegreeViewPage/DegreeCertificate'
import Layout from '../components/general/Layout'
import View from '../components/University/StudentProfile/View'
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


function StudentProfileView() {
    return (
        <Layout>
        <View/>
    
      </Layout>
    )
}

export default StudentProfileView