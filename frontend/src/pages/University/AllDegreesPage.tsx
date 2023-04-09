import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AllDegreesTable } from '../../components/University/AllDegrees/AllDegreesTable'
import { VerifiedDegreesTable } from '../../components/University/VerifiedDegrees/VerifiedDegreesTable'

const AllDegreesPage = () => {
    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='Verified Degrees' />
                <div className='mt-6'>
                    <AllDegreesTable search='' />
                </div>
            </div>
        </Layout>
    )
}

export default AllDegreesPage