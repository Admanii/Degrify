import React from 'react';

import { IMAGES } from '../../../constants/images';
interface Props {
  size: string,
  verified: boolean,

}

// var verified = false;


function VerifiedTickIcon({ size, verified }: Props) {
  var paraText = verified ? "This Degree Has been verified by HEC" : "This degrees is pending approval from the Higher Education Commission";

  return (
    <div>
        <div className='flex flex-row justify-start py-4'>
          <img width={30} height={30} src={
            // ADD RELEVANT LOGOS
            verified === true ? IMAGES.verified_tick_icon : IMAGES.unverified_icon
          } />
          <p className='px-2'>{paraText}</p>
        </div>
    </div>
  );
}

export default VerifiedTickIcon;