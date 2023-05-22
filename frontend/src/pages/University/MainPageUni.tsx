import Layout from '../../components/general/Layout'
import HeyUni from '../../components/University/Dashboard/HeyUni'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect } from "react";
import { UserInfo } from '../../store/slice/authSlice';
import { GetDegreeCountByYearAndUniId, GetUnverifiedDegreesbyUniId, GetDegreeCountByProgramAndUniId, GetVerifiedDegreesbyUniId, GetAllDegreesbyUniId } from '../../store/actions/degreeActions';
import { GetAllStudentsbyUniId } from '../../store/actions/studentActions';


const MainPageUni = () => {

  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector(UserInfo)

  const organisation_id = userInfo?.user?.organisationID ?? '';

  useEffect(() => {
    getDegrees();
    getAllStudents();
  }, [])

  const getDegrees = async () => {
    await dispatch(GetAllDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetVerifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetUnverifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetDegreeCountByYearAndUniId({ organisationId: organisation_id }))
    await dispatch(GetDegreeCountByProgramAndUniId({ organisationId: organisation_id }))
  }

  const getAllStudents = async () => {
    await dispatch(GetAllStudentsbyUniId({ organisation_id: organisation_id }))
  }

  return (

    <Layout>
      <HeyUni />
    </Layout>

  )
}

export default MainPageUni