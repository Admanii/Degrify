import { IOrganisationDetails } from "../../../store/types/types";

const AllUniversitiesColumn = () => {

    const allUniversitiesColumn = [
        {
            name: "Organisation ID",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IOrganisationDetails) => row?._id ?? "N/A",
        },
        {
            name: "Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IOrganisationDetails) => row?.name ?? "N/A",
        },
        {
            name: "Phone Number",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IOrganisationDetails) => row?.phoneNumber ?? "N/A",
        },
        {
            name: "Address",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            cell: (row: IOrganisationDetails) => row?.address ?? "N/A",
        },
        {
            name: "Status",
            wrap: true,
            minWidth: "100px",
            sortable: true,
            cell: (row: IOrganisationDetails) => {
                if (row?.active) {
                    return (
                        <div
                            className={`h-6 w-22 flex bg-green-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Active
                        </div>
                    );
                }
                else {
                    return (
                        <div
                            className={`h-6 w-22 flex bg-red-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Inactive
                        </div>

                    );
                }
            },
        },
    ];
    return allUniversitiesColumn;
};

export default AllUniversitiesColumn;
