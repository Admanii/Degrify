import Layout from '../../components/general/Layout'
import HeyUni from '../../components/University/Dashboard/HeyUni'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect } from "react";
import { GetAllDegreesbyUniId, GetCountDegreeByProgram, GetCountDegreeByYears, GetUnverifiedDegreesbyUniId, GetVerifiedDegreesbyUniId } from '../../store/actions/degreeActions';
import { GetAllStudentsbyUniId, RegisterStudent } from '../../store/actions/studentActions';
import { IRegisterStudent } from '../../store/types/types';


const MainPageUni = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { userInfo } = useSelector((state: any) => state.auth)

  const organisation_id = userInfo?.user?.organisationID ?? '';

  useEffect(() => {
    getDegrees();
    getStudents();
  }, [])

  const student: IRegisterStudent = {
    "name": "Ahmed", "enrollmentNumber": "2023-BSCS", "fatherName": "Riaz", "studentID": "18638",
    "DateOfBirth": "1999-04-18", "CNIC": "4220195724309", "DateOfAdmission": "2017-04-03", "DateOfompletion": "2021-04-03", "Program": "BSCS",
    "GraduatingYear": "2023", "organisationID": "64389305e39fc28b20e5646d",
    "email": "ahmed@gmail.com", "password": "ahmed123456", "userRole": "STUDENT"
  }

  const getDegrees = async () => {
    await dispatch(GetAllDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetVerifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetUnverifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetCountDegreeByYears({}))
    await dispatch(GetCountDegreeByProgram({}))
  }

  const getStudents = async () => {
    await dispatch(GetAllStudentsbyUniId({ organisation_id: organisation_id }))
    await dispatch(RegisterStudent(student))
  }

  return (

    <Layout>
      <HeyUni />
    </Layout>

  )
}

export default MainPageUni