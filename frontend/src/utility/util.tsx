
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

export const getOrgFullName = (orgName: string) => {
    switch (orgName) {
        case 'IBA':
            return orgName = "Institute of Business Administration (IBA)";
        default:
            return '';
    }
}