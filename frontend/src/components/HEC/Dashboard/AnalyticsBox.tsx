interface Props {
    title: string;
    value: number;
    isFirst?: boolean;
    isLast?: boolean;
  }

  function AnalyticsBox({
    title,
    value,
    isFirst,
    isLast,
  }: Props) {
    let boxClasses = "bg-white shadow-md p-4 w-72 h-24 flex flex-col justify-center items-center";
  
      if (isFirst) {
        boxClasses += " ml-4";
      } else if (isLast) {
        boxClasses += " mr-4";
      }
 
      const formattedValue = Number(value).toLocaleString();
    return(
    <div>
      <div className={boxClasses}>
  
        <p className="text-gray-500 font-medium text-sm">{title}</p>
        <h2 className="text-gray-700 font-bold text-xl">{formattedValue}</h2>
      </div>
    </div>
    )
  }

  export default AnalyticsBox
  
  