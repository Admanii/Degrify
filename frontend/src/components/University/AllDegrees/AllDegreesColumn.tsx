import { IDegreeDetailsTemp } from "../../../store/types/types";

const AllDegreesColumn = () => {

    const allDegreesColumn = [
        {
            name: "Sno",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => row?.sno ?? "N/A",
        },
        {
            name: "ERP ID",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => row?.erpId ?? "N/A",
        },
        {
            name: "Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => row?.name ?? "N/A",
        },
        {
            name: "Program",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => row?.program ?? "N/A",
        },
        {
            name: "Date of Issue",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => row?.dateofIssue ?? "N/A",
        },
        {
            name: "Graduating Year",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => row?.graduatingYear ?? "N/A",
        },
        {
            name: "CNIC",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => row?.cnic ?? "N/A",
        },
        {
            name: "Status",
            wrap: true,
            minWidth: "100px",
            sortable: true,
            cell: (row: IDegreeDetailsTemp) => {
                if (row?.active) {
                    return (
                        <div
                            className={`h-6 w-20 flex bg-green-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Active
                        </div>
                    );
                }
                else {
                    return (
                        <div
                            className={`h-6 w-20 flex bg-red-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Inactive
                        </div>

                    );
                }
            },
        },
    ];
    return allDegreesColumn;
};

export default AllDegreesColumn;
