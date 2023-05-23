import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { UserInfo } from '../../store/slice/authSlice'
import { AppDispatch } from '../../store/store'
import { useEffect, useState } from 'react'
import View from '../../components/Student/View'
import { GetStudentbyId } from '../../store/actions/studentActions'
import { Student } from '../../store/slice/studentSlice'
import LoadingScreen from '../../components/general/LoadingScreen'


const ProfileView = () => {
  const userInfo = useSelector(UserInfo)
  const dispatch = useDispatch<AppDispatch>();
  const studentId = userInfo?.user?.studentID ?? '';
  const student = useSelector(Student);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getStudent();
  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const getStudent = async () => {
    setLoading(true);
    await dispatch(GetStudentbyId({ studentId: studentId }))
    setLoading(false);
  }

  return (

    <Layout>
      {loading ? (
        <LoadingScreen/>
      ):(
        <View student={student} headingText={'STUDENT PROFILE'} />
      )}
      
    </Layout>
  )
}

export default ProfileView