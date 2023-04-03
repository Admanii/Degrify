import { classNames } from "../../utility/util";

interface Props {
  text: string;
  customise?: string;
}

export const Heading: React.FC<Props> = ({ text, customise }) => {
  return (
    <div
      className={classNames(
        "text-left text-2xl font-bold text-gray-900 mt-7 ml-10",
        customise ? customise : ""
      )}
    >
      {text}
    </div>
  );
};
