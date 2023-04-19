import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { AllStudents } from "../../../store/slice/studentSlice";
import AllStudentsColumn from "./AllStudentsColumn";

interface Props {
    search: string;
}

export const AllStudentsTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const allStudents = useSelector(AllStudents);

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
            data={allStudents ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            columns={AllStudentsColumn()}
            className="react-dataTable"
        />
    );
};
