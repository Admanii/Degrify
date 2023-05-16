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
    const navigate = useNavigate();
    const allUniversities = useSelector(AllUniversities);
    const [universities, setUniversities] = useState<Array<IOrganisationDetails>>([]);
    const [filteredUniversities, setFilteredUniversities] = useState<Array<IOrganisationDetails>>([]);

    const handleRowClick = async (organisation: IOrganisationDetails) => {
        const organisationId = organisation?._id ?? '';
        navigate(`/view/organisationprofile?organisationId=${organisationId}`);
    };

    const handleFilter = () => {
        const filteredData = universities.filter(
            (university) =>
                university?.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUniversities(filteredData);
    };

    useEffect(() => {
        setUniversities(allUniversities);
        setFilteredUniversities(allUniversities);
    }, [universities]);

    useEffect(() => {
        handleFilter();
    }, [search]);

    return (
        <DataTable
            noHeader
            data={filteredUniversities ?? []}
            pagination
            highlightOnHover
            pointerOnHover
            onRowClicked={handleRowClick}
            columns={AllUniversitiesColumn()}
        />
    );
};
