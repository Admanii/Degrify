import api from "../api";
import { IRegisterOrganisation } from "../types/types";

var accessToken = '';
var config = {}

function getAccessToken(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const accessToken = localStorage.getItem('token');
            resolve(accessToken ?? '');
        }, 0);
    });
}

async function getConfig() {
    const token = await getAccessToken();
    accessToken = token.substring(1, token.length - 1)
    config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }
}

export const registerOrganisation = (payload: IRegisterOrganisation) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    console.log("register organisation:", payload);
    return api.post("/signuporganisation", payload, config);
};

export const getAllUniversities = async () => {
    await getConfig();
    return api.get("/getuniversities", config);
};

export const getOrganisationbyId = async (organisationId: string) => {
    await getConfig();
    return api.get(`/getorganisationbyid?organisation_id=${organisationId}`, config);
};