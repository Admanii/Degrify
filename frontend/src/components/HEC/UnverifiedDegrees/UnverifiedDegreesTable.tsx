import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import UnverifiedDegreesColumn from "./UnverifiedDegreesColumn";
import { useSelector } from "react-redux";
import { AllDegrees, UnverifiedDegrees } from "../../../store/slice/degreeSlice";

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
