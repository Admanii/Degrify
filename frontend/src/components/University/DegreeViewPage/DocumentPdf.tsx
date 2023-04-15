import React from 'react';
import VerifiedTickIcon from './VerifiedTickIcon';
import { IMAGES } from '../../../constants/images';


// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface Props {
  name: string,
  program: string,
  // date: "string",
  graduatingYear: string,

}

function DegreeCertificate({ name, program, graduatingYear }: Props) {
  return (
    <div className="w-2/3 p-4  ">
      {/* <div className="w-11/12 h-110 bg-white border-2 border-black border-solid relative shadow-xl  ">
              <div className="absolute inset-2 bg-red-900 ">
                <div className="absolute inset-10 bg-white flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-bold mb-4">Certificate of Completion</h1>
                  <p className="text-xl mb-4">This certifies that</p>
                  <h2 className="text-3xl font-bold mb-4">{name}</h2>
                  <p className="text-xl mb-4">has successfully completed the</p>
                  <h2 className="text-xl font-bold mb-4">{program}</h2>
                  <p className="text-xl mb-4">from IBA</p>
                  <h2 className="text-xl font-bold mb-4">Class of 2023</h2>
                </div>
              </div>

            </div> */}
      <div className="w-11/12 h-110 bg-white border-2 border-black border-solid relative shadow-xl">
        <div className="absolute inset-2 bg-red-900">
          <div className="absolute inset-10 bg-white flex flex-col items-center justify-center">
            <div className="flex justify-between px-2 py-2 absolute top-0 left-0 w-full h-10">
              <img src={IMAGES.home_icon}></img>
              <img src={IMAGES.degrify_logo}></img>
            </div>
            <h1 className="text-5xl font-bold mb-4 font-certificate">Certificate of Completion</h1>
            <p className="text-xl mb-4">This certifies that</p>
            <h2 className="text-3xl font-bold mb-4">{name}</h2>
            <p className="text-xl mb-4">has successfully completed the</p>
            <h2 className="text-xl font-bold mb-4">{program}</h2>
            <p className="text-xl mb-4">from IBA</p>
            <h2 className="text-xl font-bold mb-4">Class of 2023</h2>
          </div>
        </div>
      </div>
      <VerifiedTickIcon size={'8'} />
    </div>
  );
}

export default DegreeCertificate;