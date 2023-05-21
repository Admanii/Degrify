import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import HeadingWithSpan from '../../components/general/HeadingWithSpan'
import { UserInfo } from '../../store/slice/authSlice'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { UpdateDegreeStudent } from '../../store/actions/degreeActions'
import StudentProfileView from '../StudentProfileView'


const MainPageStudent = () => {
  const userInfo = useSelector(UserInfo)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    //updateDegreeStudent("6442740ba9fd0ee7fdbd856a");
  }, [])

  const updateDegreeStudent = async (degreeId: string) => {
    await dispatch(UpdateDegreeStudent({ degreeId }))
  }

  return (
    <StudentProfileView/>
  )
}

export default MainPageStudent