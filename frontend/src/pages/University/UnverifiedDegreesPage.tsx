import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { UnverifiedDegreesTable } from '../../components/University/UnverifiedDegrees/UnverifiedDegreesTable'

const UnverifiedDegreesPage = () => {
    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='Unverified Degrees' />
                <div className='mt-6'>
                    <UnverifiedDegreesTable search='' />
                </div>
            </div>
        </Layout>
    )
}

export default UnverifiedDegreesPage