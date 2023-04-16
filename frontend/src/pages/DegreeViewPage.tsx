import React from 'react'
import Layout from '../components/general/Layout'
import HeadingWithSpan from '../components/general/HeadingWithSpan'
import DetailsHeading from '../components/University/DegreeViewPage/DetailsHeading'
import DegreeCertificate from '../components/University/DegreeViewPage/DocumentPdf'
import VerifiedTickIcon from '../components/University/DegreeViewPage/VerifiedTickIcon'
import View from '../components/University/DegreeViewPage/View'
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
  return (
    <Layout>
      <View/>
  
    </Layout>
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