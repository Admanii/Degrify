import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import VerifiedDegreesColumn from "./VerifiedDegreesColumn";
import { useSelector } from "react-redux";
import { VerifiedDegrees } from "../../../store/slice/degreeSlice";
import { useNavigate } from "react-router-dom";
import { IDegreeDetails } from "../../../store/types/types";

interface Props {
    search: string;
}

export const VerifiedDegreesTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const verifiedDegrees = useSelector(VerifiedDegrees);
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

    return (
        <DataTable
            noHeader
            data={verifiedDegrees ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={VerifiedDegreesColumn()}
            className="react-dataTable"
        />
    );
};
