import api from "../api";

const accessToken = localStorage.getItem('accessToken') ?? '';
const config = {
    headers: {
        'auth': JSON.parse(accessToken),
    }
    // headers: {
    //     'Content-Type': 'application/json',
    // },
}

export const getAllDegrees = () => {
    return api.get("/getalldegree", config);
};