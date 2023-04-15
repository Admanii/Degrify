import React from 'react';

import { IMAGES } from '../../../constants/images';
interface Props {
  size: string,
}

var verified = false;

function VerifiedTickIcon({ size }: Props) {
  return (
    <div className='flex flex-row justify-start py-4'>
      {/* <img src={IMAGES.unverified_icon}></img> */}
      <img src={
        // ADD RELEVANT LOGOS
        verified === true ? IMAGES.home_active_icon : IMAGES.home_icon
      }></img>
      <p>This Degree Has been verified by HEC</p>
    </div>
  );
}

export default VerifiedTickIcon;