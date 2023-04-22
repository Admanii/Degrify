import { useDispatch } from 'react-redux';
import { VerifiedDegreesTable } from '../../components/HEC/VerifiedDegrees/VerifiedDegreesTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { GetVerifiedDegreesHec } from '../../store/actions/degreeActions';

const VerifiedDegreesPageHec = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        getVerifiedDegrees();
    }, [])

    const getVerifiedDegrees = async () => {
        await dispatch(GetVerifiedDegreesHec({}))
    }

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