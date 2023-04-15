import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux'
import HeadingWithSpan from '../../components/general/HeadingWithSpan'
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { GetAllDegrees } from '../../store/actions/degreeActions'


const MainPageHec = () => {

  const { userInfo } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getAllDegrees();
  }, [])

  const getAllDegrees = async () => {
    await dispatch(GetAllDegrees({}))
  }


  return (
    <Layout>
      <HeadingWithSpan Text={userInfo?.user?.name} SpanText={"Here's what is happening today"} />
    </Layout>
  )
}

export default MainPageHec