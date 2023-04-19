import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../actions/authActions'
import { RootState } from '../store';
import { IUserDetails } from '../types/types';

// initialize userToken from local storage
const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null

const initialState: IState = {
    loading: false,
    userInfo: {} as IUserDetails,
    token: token ?? '',
    error: {},
    success: false,
}

interface IState {
    loading: boolean;
    userInfo: IUserDetails;
    token: string;
    error: {};
    success: boolean;
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token') // delete token from storage
            localStorage.removeItem('userData')
            state.loading = false
            state.userInfo = {} as IUserDetails
            state.token = ''
            state.error = ''
            state.success = false;
        },
        setCredentials: (state, { payload }) => {
            state.userInfo = payload
        },
    },
    extraReducers: (builder) => {
        // login user
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = {}
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload.userInfo
                state.token = payload.token
                state.success = true
            })
            .addCase(userLogin.rejected, (state, payload) => {
                state.loading = false
                state.error = payload.payload ?? ''
                state.success = false
            })
    },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
export const IsLoggedIn = (state: RootState) => state.auth.success;