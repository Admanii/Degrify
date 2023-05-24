import Layout from '../../components/general/Layout'
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Organisation } from '../../store/slice/organisationSlice';
import { useEffect, useState } from 'react';
import { GetOrganisationbyId } from '../../store/actions/organisationActions';
import OrganisationView from '../../components/University/OrganisationProfile/OrganisationView';
import LoadingScreen from '../../components/general/LoadingScreen';

const OrganisationProfileView = () => {
    const dispatch = useDispatch<AppDispatch>();
    const query = new URLSearchParams(window.location.search);
    const organisationId = query.get('organisationId') ?? '';
    const organisation = useSelector(Organisation);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrganisationbyId();
    }, [])

    const getOrganisationbyId = async () => {
        setLoading(true);
        await dispatch(GetOrganisationbyId({ organisationId: organisationId }))
        setLoading(false);
    }

    return (
        <Layout>
            {loading? (
                <LoadingScreen/>
            ):(
                <OrganisationView organisation={organisation} headingText={'UNIVERSITY PROFILE'} />
            )}
        </Layout>
    )
}

export default OrganisationProfileView