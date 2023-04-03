import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { VerifiedDegreesTable } from '../../components/VerifiedDegrees/VerifiedDegreesTable'

const VerifiedDegreesPage = () => {
    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='Verified Degrees' />
                <div className='mt-6'>
                    <VerifiedDegreesTable search='' />
                </div>
            </div>
        </Layout>
    )
}

export default VerifiedDegreesPage