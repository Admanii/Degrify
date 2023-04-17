export interface IStudentDetails {
    _id: string;
    name: string;
    enrollmentNumber: string;
    fatherName: string;
    studentID: string;
    DateOfBirth: string;
    CNIC: string;
    DateOfAdmission: string;
    DateOfompletion: string;
    active: boolean;
}

export interface IDegreeDetails {
    degree: {
        _id: string,
        studentID: string,
        studentVerified: boolean,
        organisationVerified: boolean,
        HECVerified: boolean,
        completeVerified: boolean,
        dateCreated: string,
    }
    studentDetail: IStudentDetails
}

export interface IDegreeDetailsTemp {
    sno: number;
    erpId: number;
    name: string;
    program: string;
    dateofIssue: string;
    graduatingYear: string;
    cnic: string;
    active: boolean;
}


export interface IDegreeCountByYear {
    _id: string,
    count: number
}