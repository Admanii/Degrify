import { useSelector } from "react-redux";
import AnalyticsBox from "./AnalyticsBox";
import { AllDegrees, UnverifiedDegrees, VerifiedDegrees } from "../../../store/slice/degreeSlice";
import { AllStudents } from "../../../store/slice/studentSlice";

interface Props {
  title: string;
  value: number;
  isFirst?: boolean;
  isLast?: boolean;
  isLarge?: boolean;
}

// function Analyticsox({ title, value, isFirst, isLast }: Props) {
//   let boxClasses = "bg-gray-100 rounded-lg p-4 w-48 h-24 flex flex-col justify-center items-center border border-gray-300";

//   if (isFirst) {
//     boxClasses += " ml-4";
//   } else if (isLast) {
//     boxClasses += " mr-4";
//   }

//   return (
//     <div className={boxClasses}>
//       <h2 className="text-gray-700 font-bold text-xl">{value}</h2>
//       <p className="text-gray-500 font-medium text-sm">{title}</p>
//     </div>
//   );
// }
// function AnalyticsBox({
//   title,
//   value,
//   isFirst,
//   isLast,
//   isLarge,

// }: Props) {
//   let boxClasses = "bg-gray-100 rounded-lg p-4 w-72 h-18 flex flex-col justify-center items-center border border-gray-300";

//     if (isFirst) {
//       boxClasses += " ml-4";
//     } else if (isLast) {
//       boxClasses += " mr-4";
//     }
//     if (isLarge) {
//       boxClasses += " w-72 h-32";
//     } 


//     const formattedValue = Number(value).toLocaleString();
//   return(
//   <div>
//     <div className={boxClasses}>

//       <p className="text-gray-500 font-medium text-sm">{title}</p>
//       <h2 className="text-gray-700 font-bold text-xl">{formattedValue}</h2>
//     </div>
//   </div>
//   )
// }



const AnalyticsSection = () => {
  
  const allDegrees = useSelector(AllDegrees);
  const verifiedDegrees = useSelector(VerifiedDegrees);
  const unverifiedDegrees = useSelector(UnverifiedDegrees);
  const allStudents = useSelector(AllStudents);

  return (
    <div className="my-4 flex justify-between">
      <AnalyticsBox title="TOTAL ISSUED DEGREES" value={allDegrees?.length ?? ''} isFirst={true} />
      <AnalyticsBox title="APPROVED DEGREES" value={verifiedDegrees?.length ?? ''} />
      <AnalyticsBox title="UNAPPROVED DEGREES" value={unverifiedDegrees?.length ?? ''} />
      <AnalyticsBox title="TOTAL STUDENTS" value={allStudents?.length ?? ''} isLast={true} />
      {/* <AnalyticsBox title="TOTAL STUDENTS" value={240000} isLarge={true} />
      <AnalyticsBox title="TOTAL STUDENTS" value={240000} isLarge={true} /> */}
    </div>
  );
}


export default AnalyticsSection;