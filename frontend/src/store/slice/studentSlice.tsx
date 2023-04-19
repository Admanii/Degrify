import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { IStudentDetails, IUserDetails } from '../types/types';
import { GetAllStudentsbyUniId } from '../actions/studentActions';


const initialState: IState = {
    loading: false,
    student: {} as IStudentDetails,
    allStudents: [],
    error: {},
    success: false,
}

interface IState {
    loading: boolean;
    student: IStudentDetails;
    allStudents: Array<IStudentDetails>;
    error: {};
    success: boolean;
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // login user
        builder
            .addCase(GetAllStudentsbyUniId.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(GetAllStudentsbyUniId.fulfilled, (state, { payload }) => {
                state.loading = false
                state.allStudents = payload
                state.success = true
            })
            .addCase(GetAllStudentsbyUniId.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
    },
})

export default studentSlice.reducer
export const AllStudents = (state: RootState) => state.student.allStudents;