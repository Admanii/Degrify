import { IDegreeDetails } from "../../../store/types/types";

const UnverifiedDegreesColumn = () => {

    const unverifiedDegreesColumn = [
        {
            name: "Degree ID",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetails) => row?.degree?._id ?? "N/A",
        },
        {
            name: "ERP ID",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetails) => row?.studentDetail?.studentID ?? "N/A",
        },
        {
            name: "Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetails) => row?.studentDetail?.name ?? "N/A",
        },
        {
            name: "CNIC",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetails) => row?.studentDetail.CNIC ?? "N/A",
        },
        {
            name: "Program",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetails) => row?.studentDetail.enrollmentNumber ?? "N/A",
        },
        {
            name: "Date of Issue",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetails) => row?.degree?.dateCreated ?? "N/A",
        },
        {
            name: "Graduating Year",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetails) => row?.studentDetail.DateOfompletion ?? "N/A",
        },
        {
            name: "Status",
            wrap: true,
            minWidth: "100px",
            sortable: true,
            cell: (row: IDegreeDetails) => {
                if (row?.degree?.completeVerified) {
                    return (
                        <div
                            className={`h-6 w-22 flex bg-green-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Verified
                        </div>
                    );
                }
                else {
                    return (
                        <div
                            className={`h-6 w-22 flex bg-red-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Unverified
                        </div>

                    );
                }
            },
        },
    ];
    return unverifiedDegreesColumn;
};

export default UnverifiedDegreesColumn;