import { useDispatch, useSelector } from 'react-redux';
import { AllDegreesTable } from '../../components/University/AllDegrees/AllDegreesTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../store/slice/authSlice';
import { useEffect, useState, ChangeEvent } from 'react';
import { GetAllDegreesbyUniId } from '../../store/actions/degreeActions';
import { Loader } from '../../components/general/Loader';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Search } from '../../components/general/Search';
import LoadingScreen from '../../components/general/LoadingScreen';

const AllDegreesPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const organisation_id = userInfo?.user?.organisationID ?? '';

    useEffect(() => {
        getAllDegrees();
    }, [])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getAllDegrees = async () => {
        setIsLoading(true);
        await dispatch(GetAllDegreesbyUniId({ organisation_id: organisation_id }))
        setIsLoading(false);
    }

    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8'>
                <Heading text='All Degrees' />
                <div className='mt-6'>
                    <div className="relative rounded-md shadow-sm mb-4 w-full h-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                            <MagnifyingGlassIcon className="text-gray-500 sm:text-sm h-5 w-5" />
                        </div>
                        <Search handleOnChange={handleSearch} />
                    </div>
                </div>
                {isLoading ? (
                    <LoadingScreen/>
                ) : (
                    <AllDegreesTable search={search} />
                )}
            </div>
        </Layout>
    )
}

export default AllDegreesPage