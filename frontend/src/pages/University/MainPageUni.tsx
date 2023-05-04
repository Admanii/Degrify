import Layout from '../../components/general/Layout'
import HeyUni from '../../components/University/Dashboard/HeyUni'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect } from "react";
import { UserInfo } from '../../store/slice/authSlice';
import { GetCountDegreeByProgram, GetCountDegreeByYearAndUni, GetCountDegreeByYears, GetUnverifiedDegreesbyUniId } from '../../store/actions/degreeActions';


const MainPageUni = () => {

  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector(UserInfo)

  const organisation_id = userInfo?.user?.organisationID ?? '';

  useEffect(() => {
    getDegrees();
  }, [])

  const getDegrees = async () => {
    await dispatch(GetUnverifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetCountDegreeByYears({}))
    await dispatch(GetCountDegreeByProgram({}))
    await dispatch(GetCountDegreeByYearAndUni({ organisationId: organisation_id }))
  }

  return (

    <Layout>
      <HeyUni />
    </Layout>

  )
}

export default MainPageUni