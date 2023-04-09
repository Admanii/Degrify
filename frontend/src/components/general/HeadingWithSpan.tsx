import React from 'react'
interface Props {
    Text: string;
  }
  
function HeadingWithSpan({
    Text,
  }: Props) {
  return (
    <div className="flex flex-row items-center">

      <h1 className="font-bold text-2xl mt-6 ml-4">
        {Text} <span className="font-medium text-gray-500 text-xl ">Here's what is happening today</span>
      </h1>
    </div>
  )
}

export default HeadingWithSpan