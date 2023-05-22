// import DetailsHeading from './DetailsHeading';

import DetailsHeading from "../University/DegreeViewPage/DetailsHeading";

interface Props{
    text: string,
    spanText: string,
    showBorder: boolean
}

function UnderlineRow({ text, spanText, showBorder }:Props) {
  return (
    <div className={`w-11/12 flex flex-row items-start justify-start ${showBorder ? 'border-b-2' : ''}`}>
      <div className='w-1/2 flex items-start'>
        <DetailsHeading text={text} />
      </div>
      <div className='w-1/2 flex items-start'>
        <DetailsHeading spanText={spanText} />
      </div>
    </div>
  );
}

export default UnderlineRow;