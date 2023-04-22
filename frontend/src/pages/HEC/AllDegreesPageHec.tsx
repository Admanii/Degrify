import { useDispatch } from 'react-redux';
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AllDegreesTable } from '../../components/HEC/AllDegrees/AllDegreesTable'
import { AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { GetAllDegreesHec } from '../../store/actions/degreeActions';

const AllDegreesPageHec = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        getAllDegrees();
    }, [])

    const getAllDegrees = async () => {
        await dispatch(GetAllDegreesHec({}))
    }

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