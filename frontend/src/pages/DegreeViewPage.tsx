// import React from 'react'
// import Layout from '../components/general/Layout'
// import HeadingWithSpan from '../components/general/HeadingWithSpan'
// const name = "Muhammad Ahmed"
// const erp = "19717"
// const NameErp = name + " " + erp
// function DegreeViewPage() {
//   return (
//     <Layout>
//       <div className=' ml-16 mt-16'>
//         {/* <div> */}
//         <HeadingWithSpan Text="STUDENT DEGREE" SpanText={NameErp} />
//         <div className="flex items-center">
//           {/* DEGREE DETAILS AND PIC LEFT SIDE */}
//           <div className="w-1/3 p-4">
//             <div className="mt-10 w-72 h-72 rounded-full bg-gray-500 ml-4"></div>
//             <div className="mt-10 w-72 h-72 rounded-full bg-gray-500 ml-4"></div>
//           </div>
//           {/* DEGREEE ITSELF */}
//           <div className="w-2/3 p-4 ">
//             <div className="w-11/12 h-192 bg-white border-2 border-black border-solid relative shadow-xl ">
//               <div className="absolute inset-2 bg-red-900">
//                 <div className="absolute inset-10 bg-white"></div>
//               </div>
//             </div>
//           </div>
//         </div>







//       </div>
//     </Layout>
//   )
// }

// export default DegreeViewPage

import React from 'react'
import Layout from '../components/general/Layout'
import HeadingWithSpan from '../components/general/HeadingWithSpan'
import DetailsHeading from '../components/University/DegreeViewPage/DetailsHeading'
const name = "Muhammad Ahmed"
const erp = "19717"
const program = "BSCS"
const graduatingYear = "2023"
const NameErp = name + " " + erp
function DegreeViewPage() {
  return (
    <Layout>
     <div>
      <HeadingWithSpan Text="STUDENT DEGREE" SpanText={NameErp} />
      <div className='w-3/12 ml-6 mt-6'>
        <div className="bg-white p-3 border-t-4 border-green-400 text-left">
          <div className="image overflow-auto">
            <img className="h-auto w-full mx-auto bg-black" src="frontend\src\assets\man.jpg" alt=""></img>
          </div>
          <DetailsHeading text={'Name:'} spanText={`${name}`}/>
          <DetailsHeading text={'Serial Number:'} spanText={`${erp}`}/>  
          <DetailsHeading text={'ERP ID:'} spanText={`${erp}`}/>  
          <DetailsHeading text={'Program: '} spanText={`${program}`}/>  
          {/* <DetailsHeading text={'Date of Issue: '} spanText={`${graduatingYear}`}/>   */}
          <DetailsHeading text={'Graduating Year: '} spanText={`${graduatingYear}`}/>  
        
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
      </div>
    </Layout>
  )
}

export default DegreeViewPage