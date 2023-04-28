import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllDegreesHec, getAllDegreesbyUniId, getCountDegreeByYears, getDegreebyId, getUnverifiedDegreesHec, getUnverifiedDegreesbyUniId, getVerifiedDegreesHec, getVerifiedDegreesbyUniId } from '../service/degreeServices';
import { IDegreeCountByProgram, IDegreeCountByYear, IDegreeDetails } from '../types/types';

export const GetAllDegreesHec = createAsyncThunk<
    Array<IDegreeDetails>,
    {},
    any
>(
    'hec/all/degrees',
    async ({ }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getAllDegreesHec();
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
                return rejectWithValue(response.data.message)
            }
        }
    }
)

export const GetVerifiedDegreesHec = createAsyncThunk<
    Array<IDegreeDetails>,
    {},
    any
>(
    'hec/verified/degrees',
    async ({ }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getVerifiedDegreesHec();
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
                return rejectWithValue(response.data.message)
            }
        }
    }
)

export const GetUnverifiedDegreesHec = createAsyncThunk<
    Array<IDegreeDetails>,
    {},
    any
>(
    'hec/unverified/degrees',
    async ({ }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getUnverifiedDegreesHec();
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
                return rejectWithValue(response.data.message)
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
            // console.log(response.data.message);
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


export const GetVerifiedDegreesbyUniId = createAsyncThunk<
    Array<IDegreeDetails>,
    {
        organisation_id: string;
    },
    any
>(
    'uni/verified/degrees',
    async ({ organisation_id }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getVerifiedDegreesbyUniId(organisation_id);
            //console.log(response.data)
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

export const GetUnverifiedDegreesbyUniId = createAsyncThunk<
    Array<IDegreeDetails>,
    {
        organisation_id: string;
    },
    any
>(
    'uni/unverified/degrees',
    async ({ organisation_id }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getUnverifiedDegreesbyUniId(organisation_id);
            console.log(response.data)
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
                return rejectWithValue(response.data.message)
            }
        }
    }
)

export const GetCountDegreeByYears = createAsyncThunk<
    Array<IDegreeCountByYear>,
    {},
    any
>(
    'uni/year/count',
    async ({ }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getCountDegreeByYears();
            //console.log(response.data)
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


export const GetCountDegreeByProgram = createAsyncThunk<
    Array<IDegreeCountByProgram>,
    {},
    any
>(
    'uni/program/count',
    async ({ }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getCountDegreeByYears();
            //console.log(response.data)
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

export const GetDegreebyId = createAsyncThunk<
    IDegreeDetails,
    {
        degreeId: string;
    },
    any
>(
    'degreebyid',
    async ({ degreeId }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getDegreebyId(degreeId);
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