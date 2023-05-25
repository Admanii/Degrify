import { IDegreeDetails } from "../../../store/types/types";

const VerifiedDegreesColumn = () => {

    const verifiedDegreesColumn = [
        {
            name: "ERP ID",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.studentID ?? "N/A",
        },
        {
            name: "Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.name ?? "N/A",
        },
        {
            name: "CNIC",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.CNIC ?? "N/A",
        },
        {
            name: "Program",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.Program ?? "N/A",
        },
        {
            name: "Date of Birth",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.DateOfBirth ? new Date(row?.studentDetails?.DateOfBirth).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Date of Admission",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.DateOfAdmission ? new Date(row?.studentDetails?.DateOfAdmission).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Date of Completion",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.DateOfompletion ? new Date(row?.studentDetails?.DateOfompletion).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Total Credit Hours",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.TotalCreditHours ?? "N/A",
        },
        {
            name: "CGPA",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.CGPA ?? "N/A",
        },
        {
            name: "Status",
            wrap: true,
            minWidth: "100px",
            sortable: true,
            cell: (row: IDegreeDetails) => {
                if (row?.degree?.organisationVerified) {
                    return (
                        <div
                            className={`h-6 w-24 flex bg-green-600 text-slate-100 items-center justify-center rounded-full px-3 py-0.5 text-xs font-medium">`}
                        >
                            Verified
                        </div>
                    );
                }
                else {
                    return (
                        <div
                            className={`h-6 w-24 flex bg-red-600 text-slate-100 items-center justify-center rounded-full px-3 py-0.5 text-xs font-medium">`}
                        >
                            Unverified
                        </div>

                    );
                }
            },
        },
    ];
    return verifiedDegreesColumn;
};

export default VerifiedDegreesColumn;
