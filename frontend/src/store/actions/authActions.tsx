import { createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../service/authServices';

export const userLogin = createAsyncThunk<
    any,
    { email: string; password: string },
    any
>(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        var response: any = {};
        try {
            console.log(email, password)
            response = await login(email, password);
            //console.log(response.data)
            localStorage.setItem("userData", JSON.stringify(response.data.data.userInfo));
            localStorage.setItem(
                "accessToken",
                JSON.stringify(response.data.data.token)
            );

            return response.data
        } catch (error) {
            //@ts-ignore
            if (error.response && error.response.data.message) {
                console.log("eeeeeeeeeeeeeee")
                //@ts-ignore
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(response.data.message)
            }
        }
    }
)