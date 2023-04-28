import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { GetAllDegreesHec, GetAllDegreesbyUniId, GetCountDegreeByProgram, GetCountDegreeByYears, GetDegreebyId, GetUnverifiedDegreesHec, GetUnverifiedDegreesbyUniId, GetVerifiedDegreesHec, GetVerifiedDegreesbyUniId } from '../actions/degreeActions';
import { IDegreeCountByProgram, IDegreeCountByYear, IDegreeDetails } from '../types/types';

const initialState: IState = {
    loading: false,
    allDegrees: [],
    verifiedDegrees: [],
    unverifiedDegrees: [],
    degreesByYear: [],
    degreesByProgram: [],
    degree: {} as IDegreeDetails,
    error: {},
    success: false,
}

interface IState {
    loading: boolean;
    allDegrees: Array<IDegreeDetails>;
    verifiedDegrees: Array<IDegreeDetails>;
    unverifiedDegrees: Array<IDegreeDetails>;
    degreesByYear: Array<IDegreeCountByYear>;
    degreesByProgram: Array<IDegreeCountByProgram>
    degree: IDegreeDetails
    error: {};
    success: boolean;
}

const degreeSlice = createSlice({
    name: 'degree',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllDegreesHec.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetAllDegreesHec.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allDegrees = payload
                state.success = true
            })
            .addCase(GetAllDegreesHec.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
            .addCase(GetVerifiedDegreesHec.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetVerifiedDegreesHec.fulfilled, (state, { payload }) => {
                state.loading = false
                state.verifiedDegrees = payload
                state.success = true
            })
            .addCase(GetVerifiedDegreesHec.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
            .addCase(GetUnverifiedDegreesHec.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetUnverifiedDegreesHec.fulfilled, (state, { payload }) => {
                state.loading = false
                state.unverifiedDegrees = payload
                state.success = true
            })
            .addCase(GetUnverifiedDegreesHec.rejected, (state, payload) => {
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
            .addCase(GetVerifiedDegreesbyUniId.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetVerifiedDegreesbyUniId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.verifiedDegrees = payload
                state.success = true
            })
            .addCase(GetVerifiedDegreesbyUniId.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
            .addCase(GetUnverifiedDegreesbyUniId.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetUnverifiedDegreesbyUniId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.unverifiedDegrees = payload
                state.success = true
            })
            .addCase(GetUnverifiedDegreesbyUniId.rejected, (state, payload) => {
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
            .addCase(GetCountDegreeByProgram.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetCountDegreeByProgram.fulfilled, (state, { payload }) => {
                state.loading = false
                state.degreesByProgram = payload
                state.success = true
            })
            .addCase(GetCountDegreeByProgram.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
            .addCase(GetDegreebyId.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetDegreebyId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.degree = payload
                state.success = true
            })
            .addCase(GetDegreebyId.rejected, (state, payload) => {
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
export const DegreesByProgram = (state: RootState) => state.degree.degreesByProgram;
export const Degree = (state: RootState) => state.degree.degree;
