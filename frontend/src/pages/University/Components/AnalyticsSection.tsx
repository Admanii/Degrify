interface Props {
    title: string;
    value: string
    }
  

const AnalyticsBox = ({
    title,
    value
  }: Props) => (
    <div className="bg-gray-100 rounded-lg p-4 w-48 h-24 flex flex-col justify-center items-center">
    <h2 className="text-gray-700 font-bold text-xl">{value}</h2>
    <p className="text-gray-500 font-medium text-sm">{title}</p>
  </div>
  )
    

  
  function AnalyticsSection() {
    return (
      <div className="my-4 flex flex-wrap">
        <AnalyticsBox title="Visitors" value="2,543" />
        <AnalyticsBox title="Pageviews" value="5,832" />
        <AnalyticsBox title="Conversion Rate" value="3.4%" />
        <AnalyticsBox title="Bounce Rate" value="24.1%" />
      </div>
    );
  }

  
export default AnalyticsSection;