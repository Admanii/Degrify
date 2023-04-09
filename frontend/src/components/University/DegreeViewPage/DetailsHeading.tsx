import React from 'react'
interface Props {
    text: string,
    spanText: string,
}
function DetailsHeading({text, spanText}: Props) {
  return (
    <h1 className="text-gray-900 text-md leading-8 my-1">
  <span className="font-bold">{text}</span> <span>{spanText}</span>
</h1>
  )
}

export default DetailsHeading