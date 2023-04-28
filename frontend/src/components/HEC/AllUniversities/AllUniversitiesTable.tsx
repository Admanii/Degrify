import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import AllUniversitiesColumn from "./AllUniversitiesColumn";
import { AllUniversities } from "../../../store/slice/organisationSlice";
import { useNavigate } from "react-router-dom";
import { IOrganisationDetails } from "../../../store/types/types";

interface Props {
    search: string;
}

export const AllUniversitiesTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const allUniversities = useSelector(AllUniversities);
    const navigate = useNavigate();

    const fetchVerifiedDegrees = async () => {
        setIsLoading(true);
        setIsLoading(false);
    };

    const handleRowClick = async (organisation: IOrganisationDetails) => {
        const organisationId = organisation?._id ?? '';
        setIsLoading(true);
        navigate(`/view/organisationprofile?organisationId=${organisationId}`);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchVerifiedDegrees();
    }, [currentPage, search]);

    return (
        <DataTable
            noHeader
            data={allUniversities ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={AllUniversitiesColumn()}
            className="react-dataTable"
        />
    );
};
