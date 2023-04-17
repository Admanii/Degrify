import React, { useState } from 'react'

import ReactDOMServer from 'react-dom/server';
import Layout from '../components/general/Layout'
import HeadingWithSpan from '../components/general/HeadingWithSpan'
import DetailsHeading from '../components/University/DegreeViewPage/DetailsHeading'
import DegreeCertificate from '../components/University/DegreeViewPage/DegreeCertificate'
import VerifiedTickIcon from '../components/University/DegreeViewPage/VerifiedTickIcon'
import View from '../components/University/StudentProfile/View'
import Degree from '../components/general/Modal/Degree'
import Modal from '../components/general/Modal/Modal'
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

function DegreeViewPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  // const openDegree = () => {
  //   const newWindow = window.open(
  //     '',
  //     'Degree Certificate',
  //     'width=1400,height=600,left=200,top=200'
  //   );
  //   if (newWindow) {
  //     newWindow.onload = () => {
  //       newWindow.document.body.innerHTML = ReactDOMServer.renderToString(
  //         <div>
  //           <h1>fsdfsdfsdf</h1>
  //         <DegreeCertificate
  //           name={name}
  //           program={getCaseClass(programDeg)}
  //           graduatingYear={graduatingYear}
  //         />
  //         </div>
  //       );
  //     };
  //   }
  // };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <DegreeCertificate name={name} program={getCaseClass(programDeg)} graduatingYear={graduatingYear} />
    </div>

    // {/* <HeadingWithSpan Text="STUDENT DEGREE" SpanText={NameErp} /> */}

    // <div className='justify-center items-center ml-10 pl-28'>
    //   <DegreeCertificate name={name} program={getCaseClass(programDeg)} graduatingYear={graduatingYear} />

    // </div>

    //MODAL CODE
    // <div>
    //     <button onClick={openModal}>View Degree</button>
    //     <Modal 
    //     // className="modal-container custom-map-modal"
    //     modalState={modalIsOpen} 
    //     closeButton={true} 
    //     onClick={()=> closeModal()}

    //     >

    //       <DegreeCertificate name={name} program={getCaseClass(programDeg)} graduatingYear={graduatingYear} />

    //     </Modal>
    //   </div>


    //MODAL CODE END

    // <Layout>
    //   <View/>

    // </Layout>

    // FOR NEW WINDOW CODE
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <button
    //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //     onClick={openDegree}
    //   >
    //     View Degree
    //   </button>
    // </div>
    // FOR NEW WINDOW CODE END

  )
}


export default DegreeViewPage

// import React from 'react'
// import Layout from '../components/general/Layout'
// import HeadingWithSpan from '../components/general/HeadingWithSpan'
// import DetailsHeading from '../components/University/DegreeViewPage/DetailsHeading'
// const name = "Muhammad Ahmed"
// const erp = "19717"
// const program = "BSCS"
// const graduatingYear = "2023"
// const NameErp = name + " " + erp
// function DegreeViewPage() {
//   return (
//     <Layout>
//      <div>
//       <HeadingWithSpan Text="STUDENT DEGREE" SpanText={NameErp} />
//       </div>
//     </Layout>
//   )
// }

// export default DegreeViewPage