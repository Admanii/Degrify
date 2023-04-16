import api from "../api";

var accessToken = '';

if (localStorage.getItem('accessToken')) {
    accessToken = JSON.parse(localStorage.getItem('accessToken') ?? '');
}

const config = {
    headers: {
        'auth': accessToken,
    }
    // headers: {
    //     'Content-Type': 'application/json',
    // },
}

export const getAllDegrees = () => {
    return api.get("/getalldegreeshec", config);
};

export const getAllDegreesbyUniId = (organisation_id: string) => {
    return api.get(`getalldegreesuniversity/${organisation_id}`);
  };
  