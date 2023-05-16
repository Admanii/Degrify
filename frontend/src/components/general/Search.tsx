import { ChangeEvent } from "react";

interface Props {
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const Search = ({ handleOnChange, placeholder }: Props) => {
    return (
        <input
            onChange={handleOnChange}
            type="text"
            name="search"
            id="search"
            className="block w-full h-30 rounded-md border border-gray-300 px-10 py-3 focus:outline-none focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            placeholder={placeholder || "Search by Name or ERP ID..."}
        />
    );
};
