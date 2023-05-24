import React from 'react';

import { IMAGES } from '../../../constants/images';
interface Props {
  size?: string,
  verified: boolean,

}

// var verified = false;


function VerifiedTickIcon({ verified }: Props) {
  var paraText = verified ? "This degrees is approved by all entities" : "This degree is pending approval from University and Higher Education Commission";

  return (
    <div>
        <div className='flex flex-row justify-start items-center py-4'>
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