import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { IDegreeDetailsTemp } from "../../../store/types/types";
import VerifiedDegreesColumn from "./VerifiedDegreesColumn";
import { useSelector } from "react-redux";
import { VerifiedDegrees } from "../../../store/slice/degreeSlice";

interface Props {
    search: string;
}

export const VerifiedDegreesTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const verifiedDegrees = useSelector(VerifiedDegrees);

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
            data={verifiedDegrees ?? []}
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
