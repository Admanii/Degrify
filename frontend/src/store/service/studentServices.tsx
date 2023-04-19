import api from "../api";

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

export const getAllStudentsbyUniId = async (organisation_id: string) => {
    await getConfig();
    return api.get(`/getallStudents?organisation_id=${organisation_id}`, config);
};