import AnalyticsSection from "./AnalyticsSection";

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
    <AnalyticsSection/>
    </div>
    )

 
      
   


export default HeyUni