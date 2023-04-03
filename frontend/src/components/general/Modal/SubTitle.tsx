import { classNames } from "../../../utility/util";

interface Props {
    text: string;
    customise?: string;
}

export const SubTitle: React.FC<Props> = ({ text, customise }) => {
    return (
        <h1
            className={classNames(
                "text-center text-[#FF0000] font-normal text-lg",
                customise ? customise : ""
            )}
        >
            {text}
        </h1>
    );
};
