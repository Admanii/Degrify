import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllDegrees } from '../service/degreeServices';
import { IDegreeDetails } from '../types/types';

export const GetAllDegrees = createAsyncThunk<
    Array<IDegreeDetails>,
    {},
    any
>(
    'hec/all/degrees',
    async ({ }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getAllDegrees();
            console.log(response.data)
            return response.data.data
        } catch (error) {
            console.log(response.message);
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