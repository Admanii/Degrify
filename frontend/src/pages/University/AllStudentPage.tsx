import { AllStudentsTable } from '../../components/University/All Students/AllStudentsTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'

const AllStudentPage = () => {
    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='All Students' />
                <div className='mt-6'>
                    <AllStudentsTable search='' />
                </div>
            </div>
        </Layout>
    )
}

export default AllStudentPage