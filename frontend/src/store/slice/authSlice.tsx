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
            localStorage.clear();
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
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload?.data?.userInfo
                state.token = payload?.data?.token
                if (state.userInfo && state.token) {
                    state.success = true
                }
                else {
                    state.success = false
                    localStorage.clear();
                }
            })
    },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
export const IsLoggedIn = (state: RootState) => state.auth.success;
export const UserInfo = (state: RootState) => state.auth.userInfo;