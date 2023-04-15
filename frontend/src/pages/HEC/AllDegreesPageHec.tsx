import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AllDegreesTable } from '../../components/HEC/AllDegrees/AllDegreesTable'

const AllDegreesPageHec = () => {
    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='All Degrees' />
                <div className='mt-6'>
                    <AllDegreesTable search='' />
                </div>
            </div>
        </Layout>
    )
}

export default AllDegreesPageHec