import React from 'react';
interface Props {
    title: string;
    value: string;
    isFirst?: boolean;
    isLast?: boolean;
    isLarge?: boolean;
  }
  function AnalyticsBox({
    title,
    value,
    isFirst,
    isLast,
    isLarge
  
  }: Props) {
  let boxClasses = "bg-gray-100 rounded-lg p-2 flex flex-col justify-center items-center border border-gray-300";

  if (isFirst) {
    boxClasses += " ml-4";
  } else if (isLast) {
    boxClasses += " mr-4";
  }

  if (isLarge) {
    boxClasses += " w-72 h-32";
  } else {
    boxClasses += " w-32 h-16";
  }

  return (
    <div className={boxClasses}>
      <h2 className="text-gray-700 font-bold text-lg">{value}</h2>
      <p className="text-gray-500 font-medium text-sm">{title}</p>
    </div>
  );
}

function AnalyticsSection() {
  return (
    <div className="my-4 flex justify-between">
      <AnalyticsBox title="Visitors" value="2,543" isFirst={true} />
      <AnalyticsBox title="Pageviews" value="5,832" />
      <AnalyticsBox title="Conversion Rate" value="3.4%" />
      <AnalyticsBox title="Bounce Rate" value="24.1%" isLast={true} />
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h1 className="font-bold text-2xl mt-4 ml-4">
        Hey IBA - <span className="font-normal text-gray-500">Here's what is happening today</span>
      </h1>
      <AnalyticsSection />
      <div className="my-4 flex justify-between">
        <AnalyticsBox title="Revenue" value="$5,432" isFirst={true} isLarge={true} />
        <AnalyticsBox title="Orders" value="123" isLast={true} isLarge={true} />
      </div>
    </div>
  );
}

export default Heading;