import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { GetAllDegrees, GetAllDegreesbyUniId, GetCountDegreeByYears } from '../actions/degreeActions';
import { IDegreeCountByYear, IDegreeDetails } from '../types/types';

const initialState: IState = {
    loading: false,
    allDegrees: [],
    verifiedDegrees: [],
    unverifiedDegrees: [],
    degreesByYear: [],
    error: {},
    success: false,
}

interface IState {
    loading: boolean;
    allDegrees: Array<IDegreeDetails>;
    verifiedDegrees: Array<IDegreeDetails>;
    unverifiedDegrees: Array<IDegreeDetails>;
    degreesByYear: Array<IDegreeCountByYear>;
    error: {};
    success: boolean;
}

const degreeSlice = createSlice({
    name: 'degree',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllDegrees.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetAllDegrees.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allDegrees = payload
                state.success = true
            })
            .addCase(GetAllDegrees.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
            .addCase(GetAllDegreesbyUniId.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetAllDegreesbyUniId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allDegrees = payload
                state.success = true
            })
            .addCase(GetAllDegreesbyUniId.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
            .addCase(GetCountDegreeByYears.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetCountDegreeByYears.fulfilled, (state, { payload }) => {
                state.loading = false
                state.degreesByYear = payload
                state.success = true
            })
            .addCase(GetCountDegreeByYears.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
    },
})

export default degreeSlice.reducer
export const AllDegrees = (state: RootState) => state.degree.allDegrees;
export const VerifiedDegrees = (state: RootState) => state.degree.verifiedDegrees;
export const UnverifiedDegrees = (state: RootState) => state.degree.unverifiedDegrees;
export const DegreesByYear = (state: RootState) => state.degree.degreesByYear;