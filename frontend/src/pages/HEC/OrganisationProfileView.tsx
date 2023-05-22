import Layout from '../../components/general/Layout'
import { AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Organisation } from '../../store/slice/organisationSlice';
import { useEffect } from 'react';
import { GetOrganisationbyId } from '../../store/actions/organisationActions';
import OrganisationView from '../../components/University/OrganisationProfile/OrganisationView';

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
            <OrganisationView organisation={organisation} headingText={'UNIVERSITY PROFILE'} />
        </Layout>
    )
}

export default OrganisationProfileView