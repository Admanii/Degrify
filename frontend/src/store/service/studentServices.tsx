import api from "../api";
import { IRegisterStudent } from "../types/types";

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

export const registerStudent = (payload: IRegisterStudent) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    console.log("register student:", payload);
    return api.post("/signupstudent", payload, config);
};

export const getAllStudentsbyUniId = async (organisation_id: string) => {
    await getConfig();
    return api.get(`/getallStudents?organisation_id=${organisation_id}`, config);
};

export const getStudentbyId = async (studentId: string) => {
    await getConfig();
    return api.get(`/getstudentbyid?student_id=${studentId}`, config);
};