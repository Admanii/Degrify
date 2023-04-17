import api from "../api";

var accessToken = '';
var config = {}

function getAccessToken(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const accessToken = localStorage.getItem('accessToken');
            resolve(accessToken ?? '');
        }, 0);
    });
}

async function getConfig() {
    const token = await getAccessToken();
    accessToken = token.substring(1, token.length - 1)
    config = {
        headers: {
            'auth': accessToken,
        }
        // headers: {
        //     'Content-Type': 'application/json',
        // },
    }
}


export const getAllDegrees = async () => {
    await getConfig();
    // console.log("accessToken:    " + accessToken)
    return api.get("/getalldegreeshec", config);
};

export const getAllDegreesbyUniId = async (organisation_id: string) => {
    await getConfig();
    return api.get(`/getalldegreesuniversity?organisation_id=${organisation_id}`, config);
    // return api.get("/getalldegreesuniversity", {
    //     params: {
    //         organisation_id
    //     },
    //     headers: {
    //         'auth': accessToken,
    //     }
    // });
};

export const getVerifiedDegreesbyUniId = async (organisation_id: string) => {
    await getConfig();
    return api.get(`/getverifieddegreesuniversity?organisation_id=${organisation_id}`, config);
};

export const getUnverifiedDegreesbyUniId = async (organisation_id: string) => {
    await getConfig();
    return api.get(`/getunverifieddegreesuniversity?organisation_id=${organisation_id}`, config);
};

export const getCountDegreeByYears = async () => {
    await getConfig();
    return api.get("/studentsbyyear", config);
}