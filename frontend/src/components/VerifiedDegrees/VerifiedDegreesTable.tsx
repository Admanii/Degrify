import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IDegreeDetails } from "../../store/types/types";
import VerifiedDegreesColumn from "./VerifiedDegreesColumn";

interface Props {
    search: string;
}

const degrees: Array<IDegreeDetails> = [
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: false,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: false,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: false,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: false,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: false,
    },
    {
        sno: 1,
        erpId: 18584,
        name: 'Ahmed Edhi',
        program: 'BSCS',
        dateofIssue: '15th June 2023',
        graduatingYear: '2023',
        cnic: '42201-6149122-3',
        active: true,
    },
]

export const VerifiedDegreesTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const fetchVerifiedDegrees = async () => {
        setIsLoading(true);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchVerifiedDegrees();
    }, [currentPage, search]);

    //remove custom pagincation
    return (
        <DataTable
            noHeader
            data={degrees ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            columns={VerifiedDegreesColumn()}
            className="react-dataTable"
        />
    );
};
