import { useDispatch, useSelector } from 'react-redux';
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { UnverifiedDegreesTable } from '../../components/University/UnverifiedDegrees/UnverifiedDegreesTable'
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../store/slice/authSlice';
import { GetUnverifiedDegreesbyUniId } from '../../store/actions/degreeActions';
import { useEffect, useState, ChangeEvent } from 'react';
import { Loader } from '../../components/general/Loader';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Search } from '../../components/general/Search';
import LoadingScreen from '../../components/general/LoadingScreen';

const UnverifiedDegreesPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const organisation_id = userInfo?.user?.organisationID ?? '';

    useEffect(() => {
        getUnverifiedDegrees();
    }, [])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getUnverifiedDegrees = async () => {
        setIsLoading(true)
        await dispatch(GetUnverifiedDegreesbyUniId({ organisation_id: organisation_id }))
        setIsLoading(false)
    }

    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8'>
                <Heading text='Unverified Degrees' />
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
                    <UnverifiedDegreesTable search={search} />
                )}
            </div>
        </Layout>
    )
}

export default UnverifiedDegreesPage