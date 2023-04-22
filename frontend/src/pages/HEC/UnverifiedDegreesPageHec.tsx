import { useDispatch } from 'react-redux';
import { UnverifiedDegreesTable } from '../../components/HEC/UnverifiedDegrees/UnverifiedDegreesTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { GetUnverifiedDegreesHec } from '../../store/actions/degreeActions';

const UnverifiedDegreesPageHec = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        getUnverifiedDegrees();
    }, [])

    const getUnverifiedDegrees = async () => {
        await dispatch(GetUnverifiedDegreesHec({}))
    }

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

export default UnverifiedDegreesPageHec