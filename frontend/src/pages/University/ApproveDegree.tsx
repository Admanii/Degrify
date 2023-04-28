import React from 'react'
import Layout from '../../components/general/Layout'
import View from '../../components/University/StudentProfile/View'
import Button from '../../components/general/Button'
import { IStudentDetails } from '../../store/types/types'

function ApproveDegree() {
  return (
    <Layout>
      <div>
        <View student={{} as IStudentDetails} headingText={'APPROVE DEGREE'} />
        <div className=' items-end'>
          <Button buttonText="Approve" width={200} />
          <Button className='bg-white text-black' buttonText="Cancel" width={200} />
        </div>
      </div>
    </Layout>
  )
}

export default ApproveDegree
