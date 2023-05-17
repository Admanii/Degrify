import { createAsyncThunk } from '@reduxjs/toolkit'
import { IRegisterStudent, IResponse, IStudentDetails, IUpdateStudent } from '../types/types';
import { getAllStudentsbyUniId, getStudentbyId, registerStudent, updateStudentbyId } from '../service/studentServices';

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

export const GetStudentbyId = createAsyncThunk<
    IStudentDetails,
    {
        studentId: string;
    },
    any
>(
    'uni/studentbyid',
    async ({ studentId }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getStudentbyId(studentId);
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

export const UpdateStudentbyId = createAsyncThunk<
    IResponse,
    IUpdateStudent,
    any
>(
    "uni/update/student",
    async ({ studentId, payload }: IUpdateStudent, { rejectWithValue }) => {
        try {
            const response = await updateStudentbyId(studentId, payload );
            return response.data;
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
);