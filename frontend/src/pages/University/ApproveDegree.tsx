import React from 'react'
import Layout from '../../components/general/Layout'
import View from '../../components/University/DegreeViewPage/View'
import Button from '../../components/general/Button'

function ApproveDegree() {
  return (
    <Layout>
      <div>
      <View/>
      <div className=' items-end'>
      <Button buttonText="Approve" width={200} />
      <Button className='bg-white text-black' buttonText="Cancel" width={200} />
      </div>
      </div>
    </Layout>
  )
}

export default ApproveDegree