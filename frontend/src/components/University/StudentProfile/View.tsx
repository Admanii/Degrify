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
import { useSelector } from 'react-redux'
import { Student } from '../../../store/slice/studentSlice'
import { IStudentDetails } from '../../../store/types/types'
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
const uni = "IBA"

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

interface Props {
  headingText: string,
  student: IStudentDetails,
  isDegreeExist: boolean,
  degreeId: string,
  buttonHidden?: string,
}

function View({ headingText, student, buttonHidden, isDegreeExist, degreeId }: Props) {
  const navigate = useNavigate()
  // console.log(isDegreeExist + " isDegreeExist")
  // console.log(student);

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
    // <div>
    //   <HeadingWithSpan Text={headingText} marginTop={'3'} />



    //   <div className="flex flex-wrap justify-center h-135 w-11/12 bg-gray-100">
    //     {/* FIRST COLUMN */}
    //     <div className="w-2/6">
    //       {/* FIRST BOX TOP LEFT */}
    //       <div className="p-4">
    //         <div className="h-80 bg-white shadow-md p-4 flex flex-col items-center justify-center">
    //           <div className="w-40 h-40 rounded-full bg-gray-500">
    //             <img src={IMAGES.man_avatar}></img>
    //           </div>
    //           <DetailsHeading text={student?.name} size='2xl' />
    //           <DetailsHeading spanText={`${getCaseClass(student?.Program)}`} />
    //         </div>
    //       </div>
    //       {/* SECOND BOX BOTTOM LEFT */}
    //       <div className="pb-4 pr-4 pl-4 ">
    //         <div className="h-48 bg-white shadow-md p-4 flex flex-col justify-center">
    //           <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
    //             <li className="flex items-center py-3">
    //               <span>Status</span>
    //               <span className="ml-auto">
    //                 <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
    //                   Active
    //                 </span>
    //               </span>
    //             </li>
    //             <li className="flex items-center py-3">
    //               <span>Date of Issue</span>
    //               <span className="ml-auto">Nov 07, 2016</span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     {/* END OF FIRST COLUMN */}
    //     {/* SECOND COLUMN */}
    //     <div className="w-4/6">
    //       {/* FIRST BOX TOP RIGHT */}
    //       <div className="pb-8 pt-4">
    //         <div className="h-130 bg-white shadow-md flex flex-col items-start px-8 py-4">

    //           {/* NAME ROW */}
    //           <UnderlineRow text={'Full Name '} spanText={name} showBorder={true} />
    //           <UnderlineRow text={'Father\'s Name '} spanText={fatherName} showBorder={true} />
    //           <UnderlineRow text={"Email ID:"} spanText={`${email}`} showBorder={true} />
    //           <UnderlineRow text={'CNIC'} spanText={cnic} showBorder={true} />
    //           <UnderlineRow text={"Date of Birth:"} spanText={`${dateOfBirth}`} showBorder={true} />
    //           <UnderlineRow text={"Serial Number:"} spanText={`${erp}`} showBorder={true} />
    //           <UnderlineRow text={"ERP ID:"} spanText={`${erp}`} showBorder={true} />
    //           <UnderlineRow text={"Graduating Year: "} spanText={`${graduatingYear}`} showBorder={true} />
    //           <UnderlineRow text={"Date of Admission:"} spanText={`${dateOfAdmission}`} showBorder={true} />
    //           <UnderlineRow text={"Date of Completion:"} spanText={`${dateOfCompletion}`} showBorder={false} />
    //           <div className='h-5'></div>
    //           <div className="flex flex-row justify-between items-start w-2/3 pr-5">
    //             <Button inverted={true} buttonText={'Edit Profile'} />
    //             <Button onClick={() => navigate("/view/degreecertificate")} buttonText={'Add Degree'} />
    //           </div>
    //         </div>

    //       </div>


    //     </div>
    //   </div>


    // </div>
    <div>
      <HeadingWithSpan Text={headingText} marginTop={'3'} />



      <div className="flex flex-wrap justify-center h-135 w-11/12 bg-gray-100">
        {/* FIRST COLUMN */}
        <div className="w-2/6">
          {/* FIRST BOX TOP LEFT */}
          <div className="p-4">
            <div className="h-80 bg-white shadow-md p-4 flex flex-col items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gray-500">
                <img src={IMAGES.man_avatar}></img>
              </div>
              <DetailsHeading text={student?.name} size='2xl' />
              <DetailsHeading spanText={`${getCaseClass(student?.Program)}`} />
            </div>
          </div>
          {/* SECOND BOX BOTTOM LEFT */}
          <div className="pb-4 pr-4 pl-4 ">
            <div className="h-48 bg-white shadow-md p-4 flex flex-col justify-center">
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
                  <span className="ml-auto">{student?.DateOfompletion?.slice(0, 10)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END OF FIRST COLUMN */}
        {/* SECOND COLUMN */}
        <div className="w-4/6">
          {/* FIRST BOX TOP RIGHT */}
          <div className="pb-8 pt-4">
            <div className="h-130 bg-white shadow-md flex flex-col items-start px-8 py-4">

              {/* NAME ROW */}
              <UnderlineRow text={'Full Name '} spanText={student?.name + " " + student?.fatherName} showBorder={true} />
              <UnderlineRow text={'Father\'s Name '} spanText={student?.fatherName} showBorder={true} />
              <UnderlineRow text={"Email ID:"} spanText={student?.email} showBorder={true} />
              <UnderlineRow text={'CNIC'} spanText={student?.CNIC} showBorder={true} />
              <UnderlineRow text={"Date of Birth:"} spanText={student?.DateOfBirth} showBorder={true} />
              <UnderlineRow text={"University"} spanText={student?.orgName} showBorder={true} />
              <UnderlineRow text={"Serial Number:"} spanText={student?.enrollmentNumber} showBorder={true} />
              <UnderlineRow text={"ERP ID:"} spanText={student?.studentID} showBorder={true} />
              <UnderlineRow text={"Graduating Year: "} spanText={student?.GraduatingYear} showBorder={true} />
              <UnderlineRow text={"Date of Admission:"} spanText={student?.DateOfAdmission?.slice(0, 10)} showBorder={false} />
              {/* <UnderlineRow text={"Date of Completion:"} spanText={`${dateOfCompletion}`} showBorder={false} /> */}
              <div className='h-5'></div>
              <div className="flex flex-row justify-between items-start w-2/3 pr-5">
                <Button className={`${buttonHidden}`} inverted={true} buttonText={'Edit Profile'} />
                {isDegreeExist ? (
                  <Button className={`${buttonHidden}`} onClick={() => navigate(`/view/degreecertificate?degreeId=${degreeId}`)} buttonText={'View Certificate'} />) :
                  (<Button className={`${buttonHidden}`} onClick={() => navigate("/AddStudentDegree")} buttonText={'Add Degree'} />)
                }
              </div>
            </div>

          </div>


        </div>
      </div>


    </div>




  )
}

//  {/* COLUMN WITH IN COLUMN */}
//  <div className="flex flex-row pb-2 pr-2">
//  {/* LEFT SIDE INNER COLUMN IE MIDDLE BOX */}
//  <div className="w-2/4 h-72 pr-1 bg-white shadow-md flex flex-col items-start justify-center p-4">
//    <UnderlineRow text={"Serial Number:"} spanText={`${erp}`} showBorder={false} />
//    <UnderlineRow text={"ERP ID:"} spanText={`${erp}`} showBorder={false} />
//    <UnderlineRow text={"Graduating Year: "} spanText={`${graduatingYear}`} showBorder={false} />
//    <UnderlineRow text={"Date of Admission:"} spanText={`${dateOfAdmission}`} showBorder={false} />
//    <UnderlineRow text={"Date of Completion:"} spanText={`${dateOfCompletion}`} showBorder={false} />

//  </div>

//  {/* BOTTOM RIGHT BOX */}
//  <div className="w-2/4 h-72 ml-2 bg-white shadow-md flex flex-col justify-between p-4">
//    <UnderlineRow text={"Email ID:"} spanText={`${email}`} showBorder={false} />
//    <div className="my-6 flex justify-around">
//      <Button onClick={()=>navigate("/view/degreecertificate")} buttonText={'Add Degree'}></Button>
//      <Button buttonText={'Edit Profile'}></Button>
//    </div>

//  </div>
// </div>

// {/* <div className="flex flex-col bg-white items-center mt-10">



// <div className="mt-6 flex flex-col md:flex-row bg-white border-t-4 border-green-400 w-10/12">
//   {/* LEFT SIDE */}
//   <div className="md:w-1/2">
//     <div className="p-3 text-left">
//       <div className="my-6 md:pr-16">
//         <DetailsHeading text={"Name:"} spanText={`${name}`} />
//         <DetailsHeading text={"Serial Number:"} spanText={`${erp}`} />
//         <DetailsHeading text={"ERP ID:"} spanText={`${erp}`} />
//         <DetailsHeading text={"Program: "} spanText={`${getCaseClass(programDeg)}`} />
//         <DetailsHeading text={"Graduating Year: "} spanText={`${graduatingYear}`} />
//         <DetailsHeading text={"Date of Admission:"} spanText={`${dateOfAdmission}`} />
//         <DetailsHeading text={"Date of Completion:"} spanText={`${dateOfCompletion}`} />
//       </div>
//     </div>
//   </div>

//   {/* RIGHT SIDE */}
//   <div className="md:w-1/2">
//     <div className="p-3 text-left">
//       <div className="my-6 md:pr-16">
//         <DetailsHeading text={"Father's Name:"} spanText={`${fatherName}`} />
//         <DetailsHeading text={"Email ID:"} spanText={`${email}`} />
//         {/* <DetailsHeading text={"Password:"} spanText="*********" /> */}
//         <DetailsHeading text={"Date of Birth:"} spanText={`${dateOfBirth}`} />
//         <DetailsHeading text={"CNIC:"} spanText={`${cnic}`} />

//         <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
//           <li className="flex items-center py-3">
//             <span>Status</span>
//             <span className="ml-auto">
//               <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
//                 Active
//               </span>
//             </span>
//           </li>
//           <li className="flex items-center py-3">
//             <span>Date of Issue</span>
//             <span className="ml-auto">Nov 07, 2016</span>
//           </li>
//         </ul>
//       </div>

//       <div className="my-6 flex justify-end">
//         <Button buttonText={'Add Degree'}></Button>
//         <Button buttonText={'Edit Profile'}></Button>
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}
export default View