import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDegree, getAllDegreesHec, getAllDegreesbyUniId, getCountDegreeByYearAndUni, getCountDegreeByYears, getDegreebyId, getDegreebyStudentId, getUnverifiedDegreesHec, getUnverifiedDegreesbyUniId, getVerifiedDegreesHec, getVerifiedDegreesbyUniId, updateDegreeHec, updateDegreeStudent, updateDegreeUniversity } from '../service/degreeServices';
import { IAddDegree, IDegreeCountByProgram, IDegreeCountByYear, IDegreeCountByYearAndUni, IDegreeDetails, IResponse, IUpdatedDegree } from '../types/types';

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

export const UpdateDegreeUniversity = createAsyncThunk<
    IUpdatedDegree,
    { degreeId: string; },
    any
>(
    "uni/update/degree",
    async ({ degreeId }, { rejectWithValue }) => {
        try {
            const response = await updateDegreeUniversity(degreeId);
            if (response.data.statusCode === 401) {
                return rejectWithValue(response.data.message)
            }
            return response.data;
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
);

export const UpdateDegreeHec = createAsyncThunk<
    IUpdatedDegree,
    { degreeId: string; },
    any
>(
    "hec/update/degree",
    async ({ degreeId }, { rejectWithValue }) => {
        try {
            const response = await updateDegreeHec(degreeId);
            if (response.data.statusCode === 401) {
                return rejectWithValue(response.data.message)
            }
            return response.data;
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
);

export const UpdateDegreeStudent = createAsyncThunk<
    IUpdatedDegree,
    { degreeId: string; },
    any
>(
    "student/update/degree",
    async ({ degreeId }, { rejectWithValue }) => {
        try {
            const response = await updateDegreeStudent(degreeId);
            if (response.data.statusCode === 401) {
                return rejectWithValue(response.data.message)
            }
            return response.data;
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
);

export const AddDegree = createAsyncThunk<
    IResponse,
    IAddDegree,
    any
>(
    "uni/add/degree",
    async ({ studentId, organisationId, payload }: IAddDegree, { rejectWithValue }) => {
        try {
            const response = await addDegree(studentId, organisationId, payload);
            if (response.data.statusCode === 401) {
                return rejectWithValue(response.data.message)
            }
            return response.data;
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
);

export const GetCountDegreeByYearAndUni = createAsyncThunk<
    Array<IDegreeCountByYearAndUni>,
    { organisationId: string; },
    any
>(
    'uni/each/year/count',
    async ({ organisationId }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getCountDegreeByYearAndUni(organisationId);
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

export const GetDegreebyStudentId = createAsyncThunk<
    IResponse,
    {
        studentId: string;
    },
    any
>(
    'degreebystudentid',
    async ({ studentId }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getDegreebyStudentId(studentId);
            if (response.data.statusCode === 401) {
                return rejectWithValue(response.data.message)
            }
            return response.data
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