import { useDispatch, useSelector } from 'react-redux';
import { VerifiedDegreesTable } from '../../components/HEC/VerifiedDegrees/VerifiedDegreesTable'
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AppDispatch } from '../../store/store';
import { GetVerifiedDegreesHec } from '../../store/actions/degreeActions';
import { useState, useEffect, ChangeEvent } from 'react';
import { Search } from '../../components/general/Search';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Loader } from '../../components/general/Loader';
import { UserInfo } from '../../store/slice/authSlice';

const VerifiedDegreesPageHec = () => {

    const dispatch = useDispatch<AppDispatch>();
    const userInfo = useSelector(UserInfo)
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getVerifiedDegrees();
    }, [])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getVerifiedDegrees = async () => {
        setIsLoading(true);
        await dispatch(GetVerifiedDegreesHec({}))
        setIsLoading(false);
    }

    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8 '>
                {userInfo?.user?.userRole === 'UNIVERSITY' ? (
                    <Heading text='HEC Verified Degrees' />
                ) : (
                    <Heading text='Verified Degrees' />
                )}
                <div className='mt-6'>
                    <div className="relative rounded-md shadow-sm mb-4 w-full h-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                            <MagnifyingGlassIcon className="text-gray-500 sm:text-sm h-5 w-5" />
                        </div>
                        <Search handleOnChange={handleSearch} />
                    </div>
                </div>
                {isLoading ? (
                    <Loader text='Loading' />
                ) : (
                    <VerifiedDegreesTable search={search} />
                )}
            </div>
        </Layout>
    )
}

export default VerifiedDegreesPageHec