import Layout from '../../components/general/Layout'
import HeyUni from '../../components/University/Dashboard/HeyUni'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect } from "react";
import { GetAllDegreesbyUniId, GetCountDegreeByProgram, GetCountDegreeByYears, GetUnverifiedDegreesbyUniId, GetVerifiedDegreesbyUniId } from '../../store/actions/degreeActions';


const MainPageUni = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { userInfo } = useSelector((state: any) => state.auth)

  const organisation_id = userInfo?.user?.organisationID ?? '';

  useEffect(() => {
    getDegrees();
  }, [])

  const getDegrees = async () => {
    await dispatch(GetAllDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetVerifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetUnverifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetCountDegreeByYears({}))
    await dispatch(GetCountDegreeByProgram({}))
  }

  return (

    <Layout>
      <HeyUni />
    </Layout>

  )
}

export default MainPageUni