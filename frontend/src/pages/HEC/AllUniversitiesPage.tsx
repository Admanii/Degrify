import Layout from '../../components/general/Layout'
import { Heading } from '../../components/general/Heading'
import { AllUniversitiesTable } from '../../components/HEC/AllUniversities/AllUniversitiesTable'

const AllUniversitiesPage = () => {
    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='All Universities' />
                <div className='mt-6'>
                    <AllUniversitiesTable search='' />
                </div>
            </div>
        </Layout>
    )
}

export default AllUniversitiesPage