import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { UserInfo } from '../../store/slice/authSlice'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import View from '../../components/Student/View'
import { GetStudentbyId } from '../../store/actions/studentActions'
import { Student } from '../../store/slice/studentSlice'


const ProfileView = () => {
  const userInfo = useSelector(UserInfo)
  const dispatch = useDispatch<AppDispatch>();
  const studentId = userInfo?.user?.studentID ?? '';
  const student = useSelector(Student);

  useEffect(() => {
      getStudent();
  }, [])

  const getStudent = async () => {
      await dispatch(GetStudentbyId({ studentId: studentId }))
  }

  return (
    <Layout>
      <View student={student} headingText={'STUDENT PROFILE'} />
    </Layout>
  )
}

export default ProfileView