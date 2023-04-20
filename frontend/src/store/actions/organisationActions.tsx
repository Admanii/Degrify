import { createAsyncThunk } from '@reduxjs/toolkit'
import { IOrganisationDetails, IRegisterOrganisation, IResponse } from '../types/types';
import { getAllUniversities, registerOrganisation } from '../service/organisationServices';

export const GetAllUniversities = createAsyncThunk<
    Array<IOrganisationDetails>,
    {},
    any
>(
    'hec/all/universities',
    async ({ }, { rejectWithValue }) => {
        var response: any = {};
        try {
            response = await getAllUniversities();
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

export const RegisterOrganisation = createAsyncThunk<
    IResponse,
    IRegisterOrganisation,
    any
>(
    "hec/register/organisation",
    async (organisation: IRegisterOrganisation, { rejectWithValue }) => {
        try {
            const response = await registerOrganisation(organisation);
            return response.data;
        } catch (err) {
            //@ts-ignore
            let error: AxiosError<IRejectValue> = err;
            if (!error.response) throw err;
            return rejectWithValue(error.response.data);
        }
    }
);