import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IDegreeDetailsTemp } from "../../../store/types/types";
import AllDegreesColumn from "./AllStudentsColumn";
import { AllDegrees } from "../../../store/slice/degreeSlice";
import { useSelector } from "react-redux";

interface Props {
    search: string;
}

export const AllStudentsTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const allDegrees = useSelector(AllDegrees);

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
            data={allDegrees ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            columns={AllDegreesColumn()}
            className="react-dataTable"
        />
    );
};
