import React from 'react';

import { IMAGES } from '../../../constants/images';
interface Props {
  size?: string,
  verified: boolean,
  paraText: string,
}

function VerifiedTickIcon({ verified, paraText }: Props) {
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