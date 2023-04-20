import { createAsyncThunk } from '@reduxjs/toolkit'
import { IRegisterStudent, IResponse, IStudentDetails } from '../types/types';
import { getAllStudentsbyUniId, registerStudent } from '../service/studentServices';

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

export const RegisterStudent = createAsyncThunk<
    IResponse,
    IRegisterStudent,
    any
>(
    "uni/register/student",
    async (student: IRegisterStudent, { rejectWithValue }) => {
        try {
            const response = await registerStudent(student);
            return response.data;
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
);