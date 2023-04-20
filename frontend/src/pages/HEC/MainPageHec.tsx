import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import HeadingWithSpan from '../../components/general/HeadingWithSpan'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { GetAllDegreesHec, GetUnverifiedDegreesHec, GetVerifiedDegreesHec } from '../../store/actions/degreeActions'
import { GetAllUniversities, RegisterOrganisation } from '../../store/actions/organisationActions'
import { IRegisterOrganisation } from '../../store/types/types'


const MainPageHec = () => {

  const { userInfo } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch<AppDispatch>();

  const organisation: IRegisterOrganisation = { "name": "IBA", "phoneNumber": "034532455433", "address": "University Road", "email": "iba@gmail.com", "password": "iba123456", "userRole": "UNIVERSITY" }

  useEffect(() => {
    getDegrees();
    getUniversities();
    //registerOrganisation(organisation);
  }, [])

  const getDegrees = async () => {
    await dispatch(GetAllDegreesHec({}))
    await dispatch(GetVerifiedDegreesHec({}))
    await dispatch(GetUnverifiedDegreesHec({}))
  }

  const getUniversities = async () => {
    await dispatch(GetAllUniversities({}))
  }

  const registerOrganisation = async (organisation: IRegisterOrganisation) => {
    await dispatch(RegisterOrganisation(organisation))
  }

  return (
    <Layout>
      <HeadingWithSpan Text={userInfo?.user?.name} SpanText={"Here's what is happening today"} marginTop={'6'} />
    </Layout>
  )
}

export default MainPageHec