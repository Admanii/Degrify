import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { AllStudents } from "../../../store/slice/studentSlice";
import AllStudentsColumn from "./AllStudentsColumn";
import { IStudentDetails } from "../../../store/types/types";
import { useNavigate } from "react-router-dom";

interface Props {
    search: string;
}

export const AllStudentsTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const allStudents = useSelector(AllStudents);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRowClick = async (student: IStudentDetails) => {
        const studentId = student?._id ?? '';
        setIsLoading(true);
        navigate(`/view/studentprofile?studentId=${studentId}`);
        setIsLoading(false);
    };

    const fetchVerifiedDegrees = async () => {
        setIsLoading(true);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchVerifiedDegrees();
    }, [currentPage, search]);

    return (
        <DataTable
            noHeader
            data={allStudents ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={AllStudentsColumn()}
            className="react-dataTable"
        />
    );
};
