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
    const [isLoading, setIsLoading] = useState(false);
    const allStudents = useSelector(AllStudents);
    const [students, setStudents] = useState<Array<IStudentDetails>>([]);
    const [filteredStudents, setFilteredStudents] = useState<Array<IStudentDetails>>([]);

    const navigate = useNavigate();

    const handleRowClick = async (student: IStudentDetails) => {
        const studentId = student?._id ?? '';
        setIsLoading(true);
        navigate(`/view/studentprofile?studentId=${studentId}`);
        setIsLoading(false);
    };

    const handleFilter = () => {
        if (!search) {
            setFilteredStudents(students); // Show full data if search is empty
        } else {
            const filtered = students.filter(
                (student) =>
                    student.studentID.toLowerCase().includes(search.toLowerCase()) ||
                    student.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredStudents(filtered);
        }
    };

    useEffect(() => {
        setStudents(allStudents);
        setFilteredStudents(allStudents);
    }, [allStudents]);

    useEffect(() => {
        handleFilter();
    }, [search]);

    return (
        <DataTable
            noHeader
            data={filteredStudents ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={AllStudentsColumn()}
        />
    );
};
