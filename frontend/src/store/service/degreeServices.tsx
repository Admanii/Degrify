import api from "../api";
import { IDegreeDetails } from "../types/types";

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
        // headers: {
        //     'Content-Type': 'application/json',
        // },
    }
}


export const getAllDegreesHec = async () => {
    await getConfig();
    // console.log("accessToken:    " + accessToken)
    return api.get("/getalldegreeshec", config);
};

export const getVerifiedDegreesHec = async () => {
    await getConfig();
    return api.get("/getverifieddegreeshec", config);
};

export const getUnverifiedDegreesHec = async () => {
    await getConfig();
    return api.get("/getunverifieddegreeshec", config);
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

export const getDegreebyId = async (degree_id: string) => {
    await getConfig();
    return api.get(`/getdegreebyid?degree_id=${degree_id}`, config);
};

export const updateDegreeUniversity = async (degreeId: string) => {
    await getConfig();
    return api.post(`/organisationapproveddegree?degree_id=${degreeId}`, {}, config);
};

export const updateDegreeHec = async (degreeId: string) => {
    await getConfig();
    return api.post(`/hecapproveddegree?degree_id=${degreeId}`, {}, config);
};

export const updateDegreeStudent = async (degreeId: string) => {
    await getConfig();
    return api.post(`/studentapproveddegree?degree_id=${degreeId}`, {}, config);
};

export const addDegree = async (studentId: string, organisationId: string, payload: any) => {
    await getConfig();
    return api.post(`/adddegree?student_id=${studentId}&organisation_id=${organisationId}`, payload, config);
};

export const getDegreebyStudentId = async (student_id: string,) => {
    await getConfig();
    return api.get(`/getdegreebystudentid?student_id=${student_id}`, config);
}

export const getDegreebyHashValue = async (hashValue: string,) => {
    return api.get(`/getdegreebyhash?hashValue=${hashValue}`);
}

export const getDegreeCountByProgramAndUniId = async (organisationId: string,) => {
    await getConfig();
    return api.get(`/studentsbyprogramanduni?organisation_id=${organisationId}`, config);
}

export const getDegreeCountByYearAndUniId = async (organisationId: string,) => {
    await getConfig();
    return api.get(`/studentsbyyearanduni?organisation_id=${organisationId}`, config);
}

export const getDegreeCountByYearHEC = async () => {
    await getConfig();
    return api.get("/getdegreebyyear", config);
}

export const getDegreeCountByUniversityName = async () => {
    await getConfig();
    return api.get("/getdegreebyuniversity", config);
}