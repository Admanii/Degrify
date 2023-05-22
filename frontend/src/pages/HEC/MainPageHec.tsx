import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import HeadingWithSpan from '../../components/general/HeadingWithSpan'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { GetAllDegreesHec, GetCountDegreeByYearHEC, GetDegreeCountByUniversityName, GetUnverifiedDegreesHec, GetVerifiedDegreesHec, UpdateDegreeHec } from '../../store/actions/degreeActions'
import { GetAllUniversities, RegisterOrganisation } from '../../store/actions/organisationActions'
import { IRegisterOrganisation } from '../../store/types/types'
import { UserInfo } from '../../store/slice/authSlice'
import HeyHec from '../../components/HEC/Dashboard/HeyHec'


const MainPageHec = () => {

  const userInfo = useSelector(UserInfo)
  const dispatch = useDispatch<AppDispatch>();

  const organisation: IRegisterOrganisation = { "name": "IBA", "phoneNumber": "034532455433", "address": "University Road", "email": "iba@gmail.com", "password": "iba123456", "userRole": "UNIVERSITY" }

  useEffect(() => {
    getDegrees();
    //registerOrganisation(organisation);
    //updateDegreeHec("6442740ba9fd0ee7fdbd856a");
  }, [])

  const getDegrees = async () => {
    await dispatch(GetUnverifiedDegreesHec({}))
    await dispatch(GetCountDegreeByYearHEC({}))
    await dispatch(GetDegreeCountByUniversityName({}))
  }

  const updateDegreeHec = async (degreeId: string) => {
    await dispatch(UpdateDegreeHec({ degreeId }))
  }

  const registerOrganisation = async (organisation: IRegisterOrganisation) => {
    await dispatch(RegisterOrganisation(organisation))
  }

  return (
    <Layout>
      <HeyHec></HeyHec>
      {/* <HeadingWithSpan Text={userInfo?.user?.name} SpanText={"Here's what is happening today"} marginTop={'6'} /> */}
    </Layout>
  )
}

export default MainPageHec