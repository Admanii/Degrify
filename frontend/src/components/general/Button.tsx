interface Props {
    buttonText: string;
    onClick: () => void;
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
      disabled={disabled}
      style={{
        height: height ? height : undefined,
        width: width ? width : undefined,
      }}
      className={`
         ${
           inverted
             ? "bg-white outline-none border-2 border-solid rounded-md text-white cursor-pointer px-3 py-2 border-white"
             : "bg-black outline-none border-2 border-solid rounded-md text-white cursor-pointer px-5 py-2 border-black"
         }
        
          ${className}
      `}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
  
  export default Button;
  