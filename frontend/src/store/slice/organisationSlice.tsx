import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { IOrganisationDetails } from '../types/types';
import { GetAllUniversities, GetOrganisationbyId } from '../actions/organisationActions';


const initialState: IState = {
    loading: false,
    organisation: {} as IOrganisationDetails,
    allUniversities: [],
    error: {},
    success: false,
}

interface IState {
    loading: boolean;
    organisation: IOrganisationDetails;
    allUniversities: Array<IOrganisationDetails>;
    error: {};
    success: boolean;
}

const organisationSlice = createSlice({
    name: 'organisation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllUniversities.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetAllUniversities.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allUniversities = payload
                state.success = true
            })
            .addCase(GetAllUniversities.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
            .addCase(GetOrganisationbyId.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetOrganisationbyId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.organisation = payload
                state.success = true
            })
            .addCase(GetOrganisationbyId.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
    },
})

export default organisationSlice.reducer
export const AllUniversities = (state: RootState) => state.organisation.allUniversities;
export const Organisation = (state: RootState) => state.organisation.organisation;