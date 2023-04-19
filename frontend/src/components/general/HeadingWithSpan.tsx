import React from 'react'
interface Props {
    Text: string;
    SpanText?: string;
    marginTop: string;
  }
  
function HeadingWithSpan({
    Text, SpanText, marginTop
  }: Props) {
  return (
    <div className="flex flex-row justify-start">

      <h1 className={`font-bold text-2xl mt-${marginTop} ml-4`}>
        {Text} <span className="font-medium text-gray-500 text-xl ">{SpanText}</span>
      </h1>
    </div>
  )
}

export default HeadingWithSpan