import { useDispatch, useSelector } from 'react-redux';
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { UnverifiedDegreesTable } from '../../components/University/UnverifiedDegrees/UnverifiedDegreesTable'
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../store/slice/authSlice';
import { useEffect } from 'react';
import { GetUnverifiedDegreesbyUniId } from '../../store/actions/degreeActions';

const UnverifiedDegreesPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)

    const organisation_id = userInfo?.user?.organisationID ?? '';

    useEffect(() => {
        getUnverifiedDegrees();
    }, [])

    const getUnverifiedDegrees = async () => {
        await dispatch(GetUnverifiedDegreesbyUniId({ organisation_id: organisation_id }))
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

export default UnverifiedDegreesPage