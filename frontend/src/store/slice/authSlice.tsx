import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../actions/authActions'
import { RootState } from '../store';

// initialize userToken from local storage
const accessToken = localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken')
    : null

const initialState: IState = {
    loading: false,
    userInfo: {},
    accessToken: accessToken ?? '',
    error: {},
    success: false,
}

interface IState {
    loading: boolean;
    userInfo: {};
    accessToken: string;
    error: {};
    success: boolean;
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('accessToken') // delete token from storage
            localStorage.removeItem('userData') 
            state.loading = false
            state.userInfo = {}
            state.accessToken = ''
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
                state.userInfo = payload.data.userInfo
                state.accessToken = payload.data.userToken
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