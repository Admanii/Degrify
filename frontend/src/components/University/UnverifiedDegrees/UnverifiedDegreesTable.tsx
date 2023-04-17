import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IDegreeDetailsTemp } from "../../../store/types/types";
import UnverifiedDegreesColumn from "./UnverifiedDegreesColumn";
import { UnverifiedDegrees } from "../../../store/slice/degreeSlice";
import { useSelector } from "react-redux";

interface Props {
    search: string;
}

export const UnverifiedDegreesTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const unverifiedDegrees = useSelector(UnverifiedDegrees);
    
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
            data={unverifiedDegrees ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            columns={UnverifiedDegreesColumn()}
            className="react-dataTable"
        />
    );
};
