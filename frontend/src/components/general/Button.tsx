interface Props {
  buttonText: string;
  onClick?: () => void;
  height?: number;
  width?: number;
  inverted?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  buttonText,
  onClick,
  height,
  width,
  inverted,
  disabled,
  className,
}: Props) => (
  <button
    // type='submit'
    disabled={disabled}
    style={{
      height: height ? height : undefined,
      width: width ? width : undefined,
    }}
    className={`
         ${inverted
        ? `outline-none border-2 border-solid rounded-md px-3 py-2 border-gray-900 ${disabled ? "cursor-not-allowed opacity-40 bg-slate-200 text-black" : "cursor-pointer bg-white hover:bg-slate-50 text-gray-900"}`
        : `outline-none border-2 border-solid rounded-md text-white px-5 py-2 border-gray-900 ${disabled ? "cursor-not-allowed opacity-40 bg-gray-800" : "cursor-pointer bg-black hover:bg-gray-900"}`
      }
        
          ${className}
      `}
    onClick={onClick}
  >
    {buttonText}
  </button>
);

export default Button;
