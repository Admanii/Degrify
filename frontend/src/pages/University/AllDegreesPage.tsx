import { useDispatch, useSelector } from 'react-redux';
import { AllDegreesTable } from '../../components/University/AllDegrees/AllDegreesTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../store/slice/authSlice';
import { useEffect } from 'react';
import { GetAllDegreesbyUniId } from '../../store/actions/degreeActions';

const AllDegreesPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)

    const organisation_id = userInfo?.user?.organisationID ?? '';

    useEffect(() => {
        getAllDegrees();
    }, [])

    const getAllDegrees = async () => {
        await dispatch(GetAllDegreesbyUniId({ organisation_id: organisation_id }))
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

export default AllDegreesPage