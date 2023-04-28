import Layout from '../components/general/Layout'
import { AppDispatch } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Organisation } from '../store/slice/organisationSlice';
import { useEffect } from 'react';
import { GetOrganisationbyId } from '../store/actions/organisationActions';

const OrganisationProfileView = () => {
    const dispatch = useDispatch<AppDispatch>();
    const query = new URLSearchParams(window.location.search);
    const organisationId = query.get('organisationId') ?? '';
    const organisation = useSelector(Organisation);

    useEffect(() => {
        getOrganisationbyId();
    }, [])

    const getOrganisationbyId = async () => {
        await dispatch(GetOrganisationbyId({ organisationId: organisationId }))
    }

    return (
        <Layout>
            <div className='text-2xl font-bold mt-4'>MAKE ORGANISATION DETAILS UI HERE -- FEROZE/RIAZ
            
                {/* <div className='mt-4'>{organisation?.name}</div> */}
                
            </div>
        </Layout>
    )
}

export default OrganisationProfileView