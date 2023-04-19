import { createAsyncThunk } from '@reduxjs/toolkit'
import { IStudentDetails } from '../types/types';
import { getAllStudentsbyUniId } from '../service/studentServices';

export const GetAllStudentsbyUniId = createAsyncThunk<
    Array<IStudentDetails>,
    {
        organisation_id: string;
    },
    any
>(
    'uni/all/students',
    async ({ organisation_id }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getAllStudentsbyUniId(organisation_id);
            if (response.data.statusCode === 401) {
                return rejectWithValue(response.data.message)
            }
            return response.data.data
        } catch (error) {
            //@ts-ignore
            if (error.response && error.response.data.message) {
                //@ts-ignore
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(response.message)
            }
        }
    }
)
