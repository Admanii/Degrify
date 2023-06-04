
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
        case 'Lums':
            return orgName = "Lahore University of Managment and Sciences (LUMS)";
        default:
            return orgName;
    }
}