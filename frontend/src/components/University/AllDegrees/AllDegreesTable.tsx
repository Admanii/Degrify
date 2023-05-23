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
    const navigate = useNavigate();
    const allDegrees = useSelector(AllDegrees);
    const [degrees, setDegrees] = useState<Array<IDegreeDetails>>([]);
    const [filteredDegrees, setFilteredDegrees] = useState<Array<IDegreeDetails>>([]);

    const handleRowClick = async (degree: IDegreeDetails) => {
        const degreeId = degree?.degree?._id ?? '';
        navigate(`/view/degreedetails?degreeId=${degreeId}`);
    };

    const handleFilter = () => {
        const filteredData = degrees.filter(
            (degree) =>
                degree?.studentDetails?.studentID?.toLowerCase().includes(search.toLowerCase()) ||
                degree?.studentDetails?.name?.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredDegrees(filteredData);
    };

    useEffect(() => {
        setDegrees(allDegrees);
        setFilteredDegrees(allDegrees);
    }, [degrees]);

    useEffect(() => {
        handleFilter();
        console.log(filteredDegrees)
    }, [search]);

    return (
        <DataTable
            noHeader
            data={filteredDegrees ?? []}
            pagination
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={AllDegreesColumn()}
        />
    );
};
