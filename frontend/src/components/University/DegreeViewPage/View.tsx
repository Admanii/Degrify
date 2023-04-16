import React from 'react'
import HeadingWithSpan from '../../general/HeadingWithSpan'
import DetailsHeading from './DetailsHeading'
import DegreeCertificate from './DocumentPdf'
const name = "Muhammad Ahmed"
const erp = "19717"
const NameErp = name + " " + erp
const programDeg = "BSCS"
const graduatingYear = "2023"

function getCaseClass(programDeg: string) {
  switch (programDeg) {
    case 'BSCS':
      return programDeg = "Bachelor of Science in Computer Science (BSCS)";
    case 'BBA':
      return 'Bachelor of Business Administration (BBA)';
    default:
      return '';
  }
}


function View() {
  return (
    <div>
        {/* <div> */}
        <HeadingWithSpan Text="STUDENT DEGREE" SpanText={NameErp} />
        <div className="flex">
          {/* DEGREE DETAILS AND PIC LEFT SIDE */}
          <div className="w-1/3 p-4">
            <div className='w-12/12 ml-6 mt-6'>
              <div className="bg-white p-3 border-t-4 border-green-400 text-left">
                <div className="image overflow-auto">
                  <img className="h-auto w-full mx-auto bg-black" src="frontend\src\assets\man.jpg" alt=""></img>
                </div>
                <DetailsHeading text={'Name:'} spanText={`${name}`} />
                <DetailsHeading text={'Serial Number:'} spanText={`${erp}`} />
                <DetailsHeading text={'ERP ID:'} spanText={`${erp}`} />
                <DetailsHeading text={'Program: '} spanText={`${getCaseClass(programDeg)}`} />
                {/* <DetailsHeading text={'Date of Issue: '} spanText={`${graduatingYear}`}/>   */}
                <DetailsHeading text={'Graduating Year: '} spanText={`${graduatingYear}`} />

                <ul
                  className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto"><span
                      className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Date of Issue</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="mt-10 w-72 h-72 rounded-full bg-gray-500 ml-4"></div> */}
          </div>
          {/* DEGREEE ITSELF */}
         <DegreeCertificate name={name} program={getCaseClass(programDeg)} graduatingYear={graduatingYear}/>
         
          {/* DEGREE END */}
        </div>







      </div>
  )
}

export default View