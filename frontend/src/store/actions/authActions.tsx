import { createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../service/authServices';
import { ILoginResponse, IResponse } from '../types/types';

export const userLogin = createAsyncThunk<
    ILoginResponse,
    { email: string; password: string },
    any
>(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            console.log(email, password)
            const response = await login(email, password);
            // console.log(response.data)
            if (response.data.statusCode === 200) {
                localStorage.setItem("userData", JSON.stringify(response?.data?.data?.userInfo));
                localStorage.setItem(
                    "token",
                    JSON.stringify(response?.data?.data?.token)
                );
            }
            return response.data
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
)