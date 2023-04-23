import { useEffect } from 'react';
import { AllStudentsTable } from '../../components/University/All Students/AllStudentsTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../store/slice/authSlice';
import { GetAllStudentsbyUniId } from '../../store/actions/studentActions';

const AllStudentPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)

    const organisation_id = userInfo?.user?.organisationID ?? '';

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = async () => {
        await dispatch(GetAllStudentsbyUniId({ organisation_id: organisation_id }))
    }

    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='All Students' />
                <div className='mt-6'>
                    <AllStudentsTable search='' />
                </div>
            </div>
        </Layout>
    )
}

export default AllStudentPage