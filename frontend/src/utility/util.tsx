
export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
};

export const getCaseClass = (programDeg: string) => {
    switch (programDeg) {
        case 'BSCS':
            return programDeg = "Bachelor of Science in Computer Science (BSCS)";
        case 'BBA':
            return 'Bachelor of Business Administration (BBA)';
        case 'BSAF':
            return programDeg = 'Bachelor of Science in Accounting and Finance (BSAF)';
        default:
            return '';
    }
}

export const getFormattedDate = (date: string) => {
    var formattedDate = ''
    if (date !== '') {
        formattedDate = new Date(date).toLocaleString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return formattedDate;
}

export const getFormattedDate2 = (date: string) => {
    var formattedDate = ''
    if (date !== '') {
        formattedDate = new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' }).replaceAll('\/', '-');
    }
    return formattedDate;
}

export const getOrgFullName = (orgName: string) => {
    switch (orgName) {
        case 'IBA':
            return orgName = "Institute of Business Administration (IBA)";
        default:
            return '';
    }
}

export const abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "tokenURI",
                type: "string",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "degreeId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                indexed: true,
                internalType: "address",
                name: "studentAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "ERP",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isVerified",
                type: "bool",
            },
        ],
        name: "DegreeAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "degreeId",
                type: "uint256",
            },
        ],
        name: "DegreeVerified",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_ERP",
                type: "string",
            },
            {
                internalType: "string",
                name: "_tokenURI",
                type: "string",
            },
        ],
        name: "addDegree",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "degrees",
        outputs: [
            {
                internalType: "string",
                name: "tokenURI",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "degreeId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "bool",
                name: "isVerified",
                type: "bool",
            },
            {
                internalType: "string",
                name: "ERP",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllDegrees",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "tokenURI",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "degreeId",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "bool",
                        name: "isVerified",
                        type: "bool",
                    },
                    {
                        internalType: "string",
                        name: "ERP",
                        type: "string",
                    },
                ],
                internalType: "struct UniversityDegrees.Degree[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_ERP",
                type: "string",
            },
        ],
        name: "getDegreeByERP",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "tokenURI",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "degreeId",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "bool",
                        name: "isVerified",
                        type: "bool",
                    },
                    {
                        internalType: "string",
                        name: "ERP",
                        type: "string",
                    },
                ],
                internalType: "struct UniversityDegrees.Degree",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalDegrees",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];