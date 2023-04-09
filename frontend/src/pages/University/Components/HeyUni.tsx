import Chart01 from "./Chart01";
import AnalyticsBox from "./AnalyticsBox";
import AnalyticsSection from "./AnalyticsSection";
import Dashboard from "./test";
import Chart02 from "./Chart02";
import EditShortcut from "./EditShortcut";
import { AllDegreesTable } from "../../../components/University/AllDegrees/AllDegreesTable";

interface Props {
  Text: string;
}

const HeyUni = ({
  Text,
}: Props) => (
  <div>
    <div className="flex flex-row ...">

      <h1 className="font-bold text-2xl mt-6 ml-4">
        {Text} <span className="font-normal">Here's what is happening today</span>
      </h1>
    </div>
    <AnalyticsSection />
    <div className="h-100 flex" >
      <div className="w-2/3 h-100 bg-gray-100 m-4 rounded-md border border-gray-400">
        <h1 className="font-bold text-lg mt-6 ml-4">ENROLLED STUDENTS</h1>
        <Chart01 />

      </div>
      <div className="w-1/3 h-100 bg-gray-100 m-4 rounded-md border border-gray-400">
        <h1 className="font-bold text-lg mt-6 ml-4">DEGREE PROGRAMS</h1>

        <Chart02 id={"Best"} />

      </div>
    </div>
    <div className="h-100 flex">
      <div className="w-2/3 h-96 bg-gray-100 m-4 rounded-md border border-gray-400">
      <div className="flex justify-between items-center mb-6 mt-4 mx-4">
                    <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                       All Degrees
                    </h3>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </a>
                </div>
        {/* <h1 className="font-bold text-lg mt-6 ml-4">Edhi All Students Chart daal idher</h1> */}
        <AllDegreesTable search=''/>
      </div>

      <div className="w-1/3 h-96 bg-gray-100 m-4 rounded-md border border-gray-400 overflow-auto">
        {/* <h1 className="font-bold text-lg mt-6 ml-4">Edit Degree Requests</h1> */}
        <EditShortcut />
      </div>

    </div>
    {/* <Dashboard/> */}
  </div>
)






export default HeyUni