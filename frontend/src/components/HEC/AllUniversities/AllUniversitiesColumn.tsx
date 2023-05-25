import { IOrganisationDetails } from "../../../store/types/types";

const AllUniversitiesColumn = () => {

    const allUniversitiesColumn = [
        // {
        //     name: "Organisation ID",
        //     wrap: true,
        //     minWidth: "50px",
        //     sortable: true,
        //     selector: (row: IOrganisationDetails) => row?._id ?? "N/A",
        // },
        {
            name: "Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IOrganisationDetails) => row?.name ?? "N/A",
        },
        {
            name: "Phone Number",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IOrganisationDetails) => row?.phoneNumber ?? "N/A",
        },
        {
            name: "Email",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IOrganisationDetails) => row?.email ?? "N/A",
        },
        {
            name: "Address",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IOrganisationDetails) => row?.address ?? "N/A",
        },
        // {
        //     name: "Status",
        //     wrap: true,
        //     minWidth: "100px",
        //     sortable: true,
        //     cell: (row: IOrganisationDetails) => {
        //         if (row?.active) {
        //             return (
        //                 <div
        //                     className={`h-6 w-24 flex bg-green-600 text-slate-100 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium">`}
        //                 >
        //                     Active
        //                 </div>
        //             );
        //         }
        //         else {
        //             return (
        //                 <div
        //                     className={`h-6 w-24 flex bg-red-600 text-slate-100 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium">`}
        //                 >
        //                     Inactive
        //                 </div>

        //             );
        //         }
        //     },
        // },
    ];
    return allUniversitiesColumn;
};

export default AllUniversitiesColumn;
