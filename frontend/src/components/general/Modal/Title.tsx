import { classNames } from "../../../utility/util";

interface Props {
    text: string;
    customise?: string;
}

export const Title: React.FC<Props> = ({ text, customise }) => {
    return (
        <div
            className={classNames(
                "text-center text-[#101828] font-semibold text-xl",
                customise ? customise : ""
            )}
        >
            {text}
        </div>
    );
};
