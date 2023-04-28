import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import AllUniversitiesColumn from "./AllUniversitiesColumn";
import { AllUniversities } from "../../../store/slice/organisationSlice";

interface Props {
    search: string;
}

export const AllUniversitiesTable = ({ search }: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const allUniversities = useSelector(AllUniversities);

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
            data={allUniversities ?? []}
            pagination
            progressPending={isLoading}
            //   progressComponent={<Loader text="Loading" />}
            highlightOnHover
            pointerOnHover
            columns={AllUniversitiesColumn()}
            className="react-dataTable"
        />
    );
};
