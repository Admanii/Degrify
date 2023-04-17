import React from 'react'
import HeadingWithSpan from '../../general/HeadingWithSpan'
import DetailsHeading from '../DegreeViewPage/DetailsHeading'
import DegreeCertificate from '../DegreeViewPage/DegreeCertificate'
import { IMAGES } from '../../../constants/images'
import VerifiedTickIcon from '../DegreeViewPage/VerifiedTickIcon'
import { Heading } from '../../general/Heading'
import Button from '../../general/Button'
import UnderlineRow from './UnderlineRow'
import { Navigate, useNavigate } from 'react-router-dom'
const name = "Muhammad Ahmed"
const erp = "19717"
const NameErp = name + " " + erp
const programDeg = "BSCS"
const graduatingYear = "2023"
const fatherName = "Riaz"
const dateOfBirth = "4354"
const dateOfAdmission = '02/02/23'
const dateOfCompletion = '02/02/2023'
const cnic = '42000-000000-2'
const email = 'ahmed@iba.pk'
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
  const navigate = useNavigate()

  return (
    // <div>
    //   <HeadingWithSpan Text="STUDENT PROFILE" SpanText={erp} />
    //   <div className="flex">
    //     {/* DEGREE DETAILS AND PIC LEFT SIDE */}
    //     <div className="w-1/3 p-4">
    //       <div className="w-full">
    //         <div className="bg-white p-3 border-t-4 border-green-400 text-left">
    //           <div className="my-6">
    //             <DetailsHeading text={'Name:'} spanText={`${name}`} />
    //             <DetailsHeading text={'Serial Number:'} spanText={`${erp}`} />
    //             <DetailsHeading text={'ERP ID:'} spanText={`${erp}`} />
    //             <DetailsHeading text={'Program: '} spanText={`${getCaseClass(programDeg)}`} />
    //             <DetailsHeading text={'Graduating Year: '} spanText={`${graduatingYear}`} />
    //             <DetailsHeading text={'Father\'s Name:'} spanText={`${fatherName}`} />
    //             <DetailsHeading text={'Date of Birth:'} spanText={`${dateOfBirth}`} />
    //             <DetailsHeading text={'CNIC:'} spanText={`${cnic}`} />
    //             <DetailsHeading text={'Date of Admission:'} spanText={`${dateOfAdmission}`} />
    //             <DetailsHeading text={'Date of Completion:'} spanText={`${dateOfCompletion}`} />
    //             <DetailsHeading text={'Email ID:'} spanText={`${email}`} />
    //             <DetailsHeading text={'Password:'} spanText="*********" />

    //             <ul
    //               className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
    //               <li className="flex items-center py-3">
    //                 <span>Status</span>
    //                 <span className="ml-auto"><span
    //                   className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
    //               </li>
    //               <li className="flex items-center py-3">
    //                 <span>Date of Issue</span>
    //                 <span className="ml-auto">Nov 07, 2016</span>
    //               </li>
    //             </ul>
    //           </div>
    //           <div>
    //             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
    //               Add Degree
    //             </button>
    //             <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
    //               Edit Profile
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='bg-white'>
      <HeadingWithSpan Text="STUDENT PROFILE" SpanText={name} />

      <div className="flex flex-col bg-white items-center mt-10">



        <div className="mt-6 flex flex-col md:flex-row bg-white border-t-4 border-green-400 w-10/12">
          {/* LEFT SIDE */}
          <div className="md:w-1/2">
            <div className="p-3 text-left">
              <div className="my-6 md:pr-16">
                <DetailsHeading text={"Name:"} spanText={`${name}`} />
                <DetailsHeading text={"Serial Number:"} spanText={`${erp}`} />
                <DetailsHeading text={"ERP ID:"} spanText={`${erp}`} />
                <DetailsHeading text={"Program: "} spanText={`${getCaseClass(programDeg)}`} />
                <DetailsHeading text={"Graduating Year: "} spanText={`${graduatingYear}`} />
                <DetailsHeading text={"Date of Admission:"} spanText={`${dateOfAdmission}`} />
                <DetailsHeading text={"Date of Completion:"} spanText={`${dateOfCompletion}`} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/2">
            <div className="p-3 text-left">
              <div className="my-6 md:pr-16">
                <DetailsHeading text={"Father's Name:"} spanText={`${fatherName}`} />
                <DetailsHeading text={"Email ID:"} spanText={`${email}`} />
                {/* <DetailsHeading text={"Password:"} spanText="*********" /> */}
                <DetailsHeading text={"Date of Birth:"} spanText={`${dateOfBirth}`} />
                <DetailsHeading text={"CNIC:"} spanText={`${cnic}`} />

                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Date of Issue</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                  </li>
                </ul>
              </div>

              <div className="my-6 flex justify-end">
                <Button buttonText={'Add Degree'}></Button>
                <Button buttonText={'Edit Profile'}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-center h-135 w-11/12 bg-gray-100">
        {/* FIRST COLUMN */}
        <div className="w-2/6">
          {/* FIRST BOX TOP LEFT */}
          <div className="p-2">
            <div className="h-80 bg-white shadow-md p-4 flex flex-col items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gray-500"></div>
              <DetailsHeading text={name} />
              <DetailsHeading spanText={`${getCaseClass(programDeg)}`} />
            </div>
          </div>
          {/* SECOND BOX BOTTOM LEFT */}
          <div className="pb-2 pr-2 pl-2 ">
            <div className="h-52 bg-white shadow-md p-4 flex flex-col justify-center">
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Date of Issue</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END OF FIRST COLUMN */}
        {/* SECOND COLUMN */}
        <div className="w-4/6">
          {/* FIRST BOX TOP RIGHT */}
          <div className="pt-2 pb-2 pr-2 ">
            <div className="h-60 bg-white shadow-md flex flex-col items-start p-4">

              {/* NAME ROW */}
              <UnderlineRow text={'Full Name '} spanText={name} showBorder={true} />
              <UnderlineRow text={'Father\'s Name '} spanText={fatherName} showBorder={true} />
              <UnderlineRow text={'CNIC'} spanText={cnic} showBorder={true} />
              <UnderlineRow text={"Date of Birth:"} spanText={`${dateOfBirth}`} showBorder={false} />

            </div>
          </div>

          {/* COLUMN WITH IN COLUMN */}
          <div className="flex flex-row pb-2 pr-2">
            {/* LEFT SIDE INNER COLUMN IE MIDDLE BOX */}
            <div className="w-2/4 h-72 pr-1 bg-white shadow-md flex flex-col items-start justify-center p-4">
              <UnderlineRow text={"Serial Number:"} spanText={`${erp}`} showBorder={false} />
              <UnderlineRow text={"ERP ID:"} spanText={`${erp}`} showBorder={false} />
              <UnderlineRow text={"Graduating Year: "} spanText={`${graduatingYear}`} showBorder={false} />
              <UnderlineRow text={"Date of Admission:"} spanText={`${dateOfAdmission}`} showBorder={false} />
              <UnderlineRow text={"Date of Completion:"} spanText={`${dateOfCompletion}`} showBorder={false} />

            </div>

            {/* BOTTOM RIGHT BOX */}
            <div className="w-2/4 h-72 ml-2 bg-white shadow-md flex flex-col justify-between p-4">
              <UnderlineRow text={"Email ID:"} spanText={`${email}`} showBorder={false} />
              <div className="my-6 flex justify-around">
                <Button onClick={()=>navigate("/view/degreecertificate")} buttonText={'Add Degree'}></Button>
                <Button buttonText={'Edit Profile'}></Button>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>



  )
}

export default View