import { VerifiedDegreesTable } from '../../components/HEC/VerifiedDegrees/VerifiedDegreesTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'

const VerifiedDegreesPageHec = () => {
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

export default VerifiedDegreesPageHec