import { useDispatch } from 'react-redux';
import { Heading } from '../../components/general/Heading'
import Layout from '../../components/general/Layout'
import { AllDegreesTable } from '../../components/HEC/AllDegrees/AllDegreesTable'
import { AppDispatch } from '../../store/store';
import { useEffect, useState, ChangeEvent } from 'react';
import { GetAllDegreesHec } from '../../store/actions/degreeActions';
import { Loader } from '../../components/general/Loader';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Search } from '../../components/general/Search';

const AllDegreesPageHec = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAllDegrees();
    }, [])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getAllDegrees = async () => {
        setIsLoading(true);
        await dispatch(GetAllDegreesHec({}))
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
                    <Loader text='Loading' />
                ) : (
                    <AllDegreesTable search={search} />
                )}
            </div>
        </Layout>
    )
}

export default AllDegreesPageHec