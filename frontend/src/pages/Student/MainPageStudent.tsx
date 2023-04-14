import Layout from '../../components/general/Layout'
import { useSelector } from 'react-redux'
import HeadingWithSpan from '../../components/general/HeadingWithSpan'


const MainPageStudent = () => {
  const { userInfo } = useSelector((state: any) => state.auth)
  return (
    <Layout>
      <HeadingWithSpan Text={userInfo?.user?.name} SpanText={"Here's what is happening today"} />
    </Layout>
  )
}

export default MainPageStudent