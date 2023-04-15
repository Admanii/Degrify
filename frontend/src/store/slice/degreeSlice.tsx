import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { GetAllDegrees } from '../actions/degreeActions';
import { IDegreeDetails } from '../types/types';

const initialState: IState = {
    loading: false,
    allDegrees: [],
    error: {},
    success: false,
}

interface IState {
    loading: boolean;
    allDegrees: Array<IDegreeDetails>;
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
    },
})

export default degreeSlice.reducer
export const AllDegrees = (state: RootState) => state.degree.allDegrees;