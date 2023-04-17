import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllDegrees, getAllDegreesbyUniId } from '../service/degreeServices';
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

export const GetAllDegreesbyUniId = createAsyncThunk<
    Array<IDegreeDetails>,
    {
        organisation_id: string;
    },
    any
>(
    'uni/all/degrees',
    async ({ organisation_id }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getAllDegreesbyUniId(organisation_id);
            console.log(response.data)
            if (response.data.statusCode === 401) {
                return rejectWithValue(response.data.message)
            }
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