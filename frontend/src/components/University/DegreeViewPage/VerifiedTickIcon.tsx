import React from 'react';

import { IMAGES } from '../../../constants/images';
interface Props {
  size: string,
  visible: boolean,

}

var verified = false;


function VerifiedTickIcon({ size, visible }: Props) {
  var paraText = verified === true ? "This Degree Has been verified by HEC" : "This degrees is pending approval from the Higher Education Commission";

  return (
    <div>
      {visible ? (
        <div className='flex flex-row justify-start py-4'>
          {/* <img src={IMAGES.unverified_icon}></img> */}
          <img src={
            // ADD RELEVANT LOGOS
            verified === true ? IMAGES.home_active_icon : IMAGES.unverified_icon
          } />
          <p className='px-2'>{paraText}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default VerifiedTickIcon;