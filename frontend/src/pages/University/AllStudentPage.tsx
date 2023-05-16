import { useEffect, ChangeEvent, useState } from 'react';
import { AllStudentsTable } from '../../components/University/All Students/AllStudentsTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../store/slice/authSlice';
import { GetAllStudentsbyUniId } from '../../store/actions/studentActions';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Search } from '../../components/general/Search';

const AllStudentPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)
    const [search, setSearch] = useState("");

    const organisation_id = userInfo?.user?.organisationID ?? '';

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = async () => {
        await dispatch(GetAllStudentsbyUniId({ organisation_id: organisation_id }))
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                <Heading text='All Students' />
                <div className='mt-6'>
                    <div className="relative rounded-md shadow-sm mb-4 w-full h-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                            <MagnifyingGlassIcon className="text-gray-500 sm:text-sm h-5 w-5" />
                        </div>
                        <Search handleOnChange={handleSearch} />
                    </div>
                    <AllStudentsTable search={search} />
                </div>
            </div>
        </Layout>
    )
}

export default AllStudentPage