import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import HeadingWithSpan from '../../components/general/HeadingWithSpan'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { GetAllDegreesHec, GetUnverifiedDegreesHec, GetVerifiedDegreesHec } from '../../store/actions/degreeActions'
import { GetAllUniversities } from '../../store/actions/organisationActions'


const MainPageHec = () => {

  const { userInfo } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getDegrees();
    getUniversities();
  }, [])

  const getDegrees = async () => {
    await dispatch(GetAllDegreesHec({}))
    await dispatch(GetVerifiedDegreesHec({}))
    await dispatch(GetUnverifiedDegreesHec({}))
  }

  const getUniversities = async () => {
    await dispatch(GetAllUniversities({}))
  }

  return (
    <Layout>
      <HeadingWithSpan Text={userInfo?.user?.name} SpanText={"Here's what is happening today"} marginTop={'6'} />
    </Layout>
  )
}

export default MainPageHec