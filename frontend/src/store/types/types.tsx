export interface IResponse {
    statusCode: string;
    message: string;
    data: any;
}

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
    Program: string;
    GraduatingYear: string;
    organisationID: string;
    orgName: string;
    email: string;
    active: boolean;
}

export interface IOrganisationDetails {
    _id: string;
    name: string;
    phoneNumber: string;
    address: string;
    userRole: string;
    active: string;
}

export interface IUserDetails {
    user: {
        _id: string;
        name: string;
        email: string;
        password: string;
        userRole: string;
        studentID?: string;
        organisationID?: string;
        date: string;
    }
    studentDetails?: IStudentDetails;
    organistionDetails?: IOrganisationDetails;
}

export interface ILoginResponse {
    userInfo: IUserDetails;
    token: string;
    hash: string;
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
    studentDetails: IStudentDetails
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

export interface IDegreeCountByProgram {
    _id: string,
    count: number
}

export interface IRegisterStudent {
    //_id?: string;
    name: string;
    enrollmentNumber: string;
    fatherName: string;
    studentID: string;
    DateOfBirth: string;
    CNIC: string;
    Program: string;
    GraduatingYear: string;
    organisationID: string;
    DateOfAdmission: string;
    DateOfompletion: string;
    email: string;
    password: string;
    userRole: string;
    //active?: boolean;
}

export interface IRegisterOrganisation {
    //_id?: string;
    name: string;
    phoneNumber: string;
    address: string;
    email: string;
    password: string;
    userRole: string;
    //active?: boolean;
}