import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IDegreeDetails, IDegreeDetailsTemp } from "../../../store/types/types";
import AllDegreesColumn from "./AllDegreesColumn";
import { AllDegrees } from "../../../store/slice/degreeSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
    search: string;
}

const degrees: Array<IDegreeDetailsTemp> = [
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
    }, {
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
]

export const AllDegreesTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const allDegrees = useSelector(AllDegrees);
    const navigate = useNavigate();

    const fetchVerifiedDegrees = async () => {
        setIsLoading(true);
        setIsLoading(false);
    };

    const handleRowClick = async (degree: IDegreeDetails) => {
        const degreeId = degree?.degree?._id ?? '';
        setIsLoading(true);
        navigate(`/view/degreedetails?degreeId=${degreeId}`);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchVerifiedDegrees();
    }, [currentPage, search]);

    //remove custom pagincation
    return (
        <DataTable
            noHeader
            data={allDegrees ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={AllDegreesColumn()}
            className="react-dataTable"
        />
    );
};
