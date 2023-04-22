import Layout from '../../components/general/Layout'
import { Heading } from '../../components/general/Heading'
import { AllUniversitiesTable } from '../../components/HEC/AllUniversities/AllUniversitiesTable'
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetAllUniversities } from '../../store/actions/organisationActions';

const AllUniversitiesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      getUniversities();
    }, [])
  
    const getUniversities = async () => {
      await dispatch(GetAllUniversities({}))
    }

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