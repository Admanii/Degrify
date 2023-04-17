import React from 'react'
import DetailsHeading from '../components/University/DegreeViewPage/DetailsHeading'
import Layout from '../components/general/Layout'
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

function DegreeStudent() {
  return (
    <Layout>
    <div className="flex">
  {/* <!-- PROFILE DETAILS LEFT SIDE --> */}
  <div className="w-1/2 p-4">
    <div className="bg-white p-3 border-t-4 border-green-400 text-left">
      <div className="grid grid-cols-2 gap-4 my-6">
        <DetailsHeading text={'Name:'} spanText={`${name}`} />
        <DetailsHeading text={'Serial Number:'} spanText={`${erp}`} />
        <DetailsHeading text={'ERP ID:'} spanText={`${erp}`} />
        <DetailsHeading text={'Program: '} spanText={`${getCaseClass(programDeg)}`} />
        <DetailsHeading text={'Graduating Year: '} spanText={`${graduatingYear}`} />
        <DetailsHeading text={'Father\'s Name:'} spanText={`${fatherName}`} />
        <DetailsHeading text={'Date of Birth:'} spanText={`${dateOfBirth}`} />
        <DetailsHeading text={'CNIC:'} spanText={`${cnic}`} />
        <DetailsHeading text={'Date of Admission:'} spanText={`${dateOfAdmission}`} />
        <DetailsHeading text={'Date of Completion:'} spanText={`${dateOfCompletion}`} />
        <DetailsHeading text={'Email ID:'} spanText={`${email}`} />
        <DetailsHeading text={'Password:'} spanText="*********" />
      </div>
      <div className="flex justify-start">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
          Add Degree
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          Edit Profile
        </button>
      </div>
    </div>
  </div>
  
  {/* <!-- PROFILE PIC AND DEGREE DETAILS RIGHT SIDE --> */}
  <div className="w-1/2 p-4">
    <div className="bg-white p-3 border-t-4 border-green-400 text-left">
      <div className="flex justify-center items-center w-full h-64 mb-6">
        <div className="w-40 h-40 rounded-full bg-gray-500"></div>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-left">Degree</th>
            <th className="px-4 py-2 font-bold text-left">Institution</th>
            <th className="px-4 py-2 font-bold text-left">CGPA</th>
            <th className="px-4 py-2 font-bold text-left">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">BS Computer Science</td>
            <td className="border px-4 py-2">ABC University</td>
            <td className="border px-4 py-2">3.8</td>
            <td className="border px-4 py-2">2020</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">MS Computer Science</td>
            <td className="border px-4 py-2">XYZ University</td>
            <td className="border px-4 py-2">4.0</td>
            <td className="border px-4 py-2">2022</td>
          </tr>
          </tbody>
          </table>
          </div>
          </div>
          </div>
          </Layout>
  )
}

export default DegreeStudent