import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { AllStudents } from "../../../store/slice/studentSlice";
import AllStudentsColumn from "./AllStudentsColumn";
import { IStudentDetails } from "../../../store/types/types";
import { useNavigate } from "react-router-dom";

interface Props {
    search: string;
}

export const AllStudentsTable = ({ search }: Props) => {
    const navigate = useNavigate();
    const allStudents = useSelector(AllStudents);
    const [students, setStudents] = useState<Array<IStudentDetails>>([]);
    const [filteredStudents, setFilteredStudents] = useState<Array<IStudentDetails>>([]);

    const handleRowClick = async (student: IStudentDetails) => {
        const studentId = student?._id ?? '';
        navigate(`/view/studentprofile?studentId=${studentId}`);
    };

    const handleFilter = () => {
        const filteredData = students.filter(
            (student) =>
                student?.studentID?.toLowerCase().includes(search.toLowerCase()) ||
                student?.name?.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredStudents(filteredData);
    };

    useEffect(() => {
        setStudents(allStudents);
        setFilteredStudents(allStudents);
    }, [students]);

    useEffect(() => {
        handleFilter();
    }, [search]);

    return (
        <DataTable
            noHeader
            data={filteredStudents ?? []}
            pagination
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={AllStudentsColumn()}
        />
    );
};
