import Layout from '../../components/general/Layout'
import { Heading } from '../../components/general/Heading'
import { AllUniversitiesTable } from '../../components/HEC/AllUniversities/AllUniversitiesTable'
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useEffect, useState, ChangeEvent } from 'react';
import { GetAllUniversities } from '../../store/actions/organisationActions';
import { Loader } from '../../components/general/Loader';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Search } from '../../components/general/Search';

const AllUniversitiesPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getUniversities();
    }, [])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getUniversities = async () => {
        setIsLoading(true)
        await dispatch(GetAllUniversities({}))
        setIsLoading(false)
    }

    return (
        <Layout>
            <div className='mt-6 ml-10 mr-8'>
                <Heading text='All Universities' />
                <div className='mt-6'>
                    <div className="relative rounded-md shadow-sm mb-4 w-full h-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                            <MagnifyingGlassIcon className="text-gray-500 sm:text-sm h-5 w-5" />
                        </div>
                        <Search handleOnChange={handleSearch} placeholder='Search by Name...' />
                    </div>
                </div>
                {isLoading ? (
                    <Loader text='Loading' />
                ) : (
                    <AllUniversitiesTable search={search} />
                )}
            </div>
        </Layout>
    )
}

export default AllUniversitiesPage