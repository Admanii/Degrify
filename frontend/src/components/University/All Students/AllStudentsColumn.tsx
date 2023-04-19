import { IStudentDetails } from "../../../store/types/types";

const AllStudentsColumn = () => {

    const allStudentsColumn = [
        {
            name: "ERP ID",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.studentID ?? "N/A",
        },
        {
            name: "Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.name ?? "N/A",
        },
        {
            name: "Date of Birth",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.DateOfBirth ? new Date(row?.DateOfBirth).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Father Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.fatherName ?? "N/A",
        },
        {
            name: "CNIC",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.CNIC ?? "N/A",
        },
        {
            name: "Program",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.Program ?? "N/A",
        },
        {
            name: "Date of Admission",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.DateOfAdmission ? new Date(row?.DateOfAdmission).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Date of Completion",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.DateOfompletion ? new Date(row?.DateOfompletion).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Graduating Year",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IStudentDetails) => row?.GraduatingYear ?? "N/A",
        },
        // {
        //     name: "Status",
        //     wrap: true,
        //     minWidth: "100px",
        //     sortable: true,
        //     cell: (row: IStudentDetails) => {
        //         if (row?.active) {
        //             return (
        //                 <div
        //                     className={`h-6 w-22 flex bg-green-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
        //                 >
        //                     Active
        //                 </div>
        //             );
        //         }
        //         else {
        //             return (
        //                 <div
        //                     className={`h-6 w-22 flex bg-red-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
        //                 >
        //                     Inactive
        //                 </div>

        //             );
        //         }
        //     },
        // },
    ];
    return allStudentsColumn;
};

export default AllStudentsColumn;