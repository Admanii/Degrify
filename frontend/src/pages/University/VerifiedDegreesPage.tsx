import { useDispatch, useSelector } from 'react-redux';
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { VerifiedDegreesTable } from '../../components/University/VerifiedDegrees/VerifiedDegreesTable'
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../store/slice/authSlice';
import { useEffect } from 'react';
import { GetVerifiedDegreesbyUniId } from '../../store/actions/degreeActions';

const VerifiedDegreesPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)

    const organisation_id = userInfo?.user?.organisationID ?? '';

    useEffect(() => {
        getVerifiedDegrees();
    }, [])

    const getVerifiedDegrees = async () => {
        await dispatch(GetVerifiedDegreesbyUniId({ organisation_id: organisation_id }))
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

export default VerifiedDegreesPage