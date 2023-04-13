import React from 'react';
interface Props{
    size: string,
}
function VerifiedTickIcon({size}:Props) {
  return (
<div className='flex flex-row justify-start py-4'>
<svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size} text-green-500`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18.707,2.293a1,1,0,0,0-1.414,0L8.854,11.439,6.207,8.793A1,1,0,0,0,4.793,10.207L8.146,13.56a1,1,0,0,0,1.414,0L18.707,3.707A1,1,0,0,0,18.707,2.293Z"/>
    </svg>
    <p>This Degree Has been verified by HEC</p>
    </div>
  );
}

export default VerifiedTickIcon;