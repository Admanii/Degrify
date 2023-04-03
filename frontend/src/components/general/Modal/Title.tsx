import { classNames } from "../../../utility/util";

interface Props {
    text: string;
    customise?: string;
}

export const Title: React.FC<Props> = ({ text, customise }) => {
    return (
        <h1
            className={classNames(
                "text-center text-[#101828] font-semibold text-2xl",
                customise ? customise : ""
            )}
        >
            {text}
        </h1>
    );
};
