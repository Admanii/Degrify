import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import UnverifiedDegreesColumn from "./UnverifiedDegreesColumn";
import { useSelector } from "react-redux";
import { UnverifiedDegrees } from "../../../store/slice/degreeSlice";
import { useNavigate } from "react-router-dom";
import { IDegreeDetails } from "../../../store/types/types";

interface Props {
    search: string;
}

export const UnverifiedDegreesTable = ({ search }: Props) => {
    const navigate = useNavigate();
    const unverifiedDegrees = useSelector(UnverifiedDegrees);
    const [degrees, setDegrees] = useState<Array<IDegreeDetails>>([]);
    const [filteredDegrees, setFilteredDegrees] = useState<Array<IDegreeDetails>>([]);

    const handleRowClick = async (degree: IDegreeDetails) => {
        const degreeId = degree?.degree?._id ?? '';
        navigate(`/view/degreedetails?degreeId=${degreeId}`);
    };

    const handleFilter = () => {
        const filteredData = degrees.filter(
            (degree) =>
                degree?.studentDetails?.studentID.toLowerCase().includes(search.toLowerCase()) ||
                degree?.studentDetails?.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredDegrees(filteredData);
    };

    useEffect(() => {
        setDegrees(unverifiedDegrees);
        setFilteredDegrees(unverifiedDegrees);
    }, [degrees]);

    useEffect(() => {
        handleFilter();
    }, [search]);

    return (
        <DataTable
            noHeader
            data={filteredDegrees ?? []}
            pagination
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={UnverifiedDegreesColumn()}
        />
    );
};
