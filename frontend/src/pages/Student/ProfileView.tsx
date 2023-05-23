import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { UserInfo } from '../../store/slice/authSlice'
import { AppDispatch } from '../../store/store'
import { useEffect, useState } from 'react'
import View from '../../components/Student/View'
import { GetStudentbyId } from '../../store/actions/studentActions'
import { Student } from '../../store/slice/studentSlice'
import { GetDegreebyStudentId } from '../../store/actions/degreeActions'
import { unwrapResult } from '@reduxjs/toolkit'


const ProfileView = () => {
  const userInfo = useSelector(UserInfo)
  const dispatch = useDispatch<AppDispatch>();
  const studentId = userInfo?.user?.studentID ?? '';
  const [loading, setLoading] = useState(true);
  const [isDegreeExist, setIsDegreeExists] = useState(false);
  const [degreeId, setdegreeId] = useState('');
  const student = useSelector(Student);

  useEffect(() => {
    getStudent();
    isDegreeExists();
  }, [isDegreeExist, degreeId])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const isDegreeExists = async () => {
    const response = await dispatch(GetDegreebyStudentId({ studentId: studentId }))
    const result = unwrapResult(response);
    if (result?.message === 'Exists' && (result?.statusCode === 200)) {
      setIsDegreeExists(true);
      setdegreeId(result?.data._id)
    }
  }

  const getStudent = async () => {
    setLoading(true);
    await dispatch(GetStudentbyId({ studentId: studentId }))
    setLoading(false);
  }

  return (
    <Layout>
      <View student={student} headingText={'STUDENT PROFILE'} isDegreeExist={isDegreeExist} degreeId={degreeId} />
    </Layout>
  )
}

export default ProfileView