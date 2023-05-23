import { IStudentDetails } from '../../store/types/types';
import HeadingWithSpan from '../general/HeadingWithSpan';
import DetailsHeading from '../University/DegreeViewPage/DetailsHeading';
import { IMAGES } from '../../constants/images';
import UnderlineRow from '../general/UnderlineRow';
import { getFormattedDate, getOrgFullName } from '../../utility/util';
import Button from '../general/Button';
import { useNavigate } from 'react-router-dom';

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
}

function View({ headingText, student }: Props) {
  const navigate = useNavigate()

  return (
    <div className='pl-5'>
      <HeadingWithSpan Text={headingText} marginTop={'6'} />
      <div className="flex flex-wrap justify-center h-135 w-11/12 bg-gray-100">
        {/* FIRST COLUMN */}
        <div className="w-2/6">
          {/* FIRST BOX TOP LEFT */}
          <div className="p-4 ">
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
            <div className="h-48 bg-white shadow-md p-4 flex flex-col justify-center ">
              {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
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
              </ul> */}
              <ul className="bg-white px-3 rounded">
                {/* <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li> */}
                <li className="flex items-center py-7">
                  <span className='font-bold'>Date of Issue</span>
                  <span className="ml-auto">{student?.DateOfAdmission?.slice(0, 10)}</span>
                </li>
                <li className="flex items-center pb-5">
                <Button width={285} onClick={() => navigate(`/student/degree`)} buttonText={'View Degree'} />
                </li>
                {/* <li className="flex items-center py-3">
                  <span className='font-bold'>Graduating Year</span>
                  <span className="ml-auto">{student?.GraduatingYear?.slice(0, 10)}</span>
                </li>

                <li className="flex items-center py-3">
                  <span className='font-bold'>Date of Completion</span>
                  <span className="ml-auto">{student?.DateOfompletion?.slice(0, 10)}</span>
                </li> */}
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
              <UnderlineRow text={'Full Name '} spanText={student?.name} showBorder={true} />
              <UnderlineRow text={'Father\'s Name '} spanText={student?.fatherName} showBorder={true} />
              <UnderlineRow text={"Email ID"} spanText={student?.email} showBorder={true} />
              <UnderlineRow text={'CNIC'} spanText={student?.CNIC} showBorder={true} />
              <UnderlineRow text={"Date of Birth"} spanText={`${getFormattedDate(student?.DateOfBirth ?? '')}`} showBorder={true} />
              <UnderlineRow text={"University"} spanText={ `${getOrgFullName(student?.orgName ?? '')}`} showBorder={true} />
              <UnderlineRow text={"Serial Number"} spanText={student?.enrollmentNumber} showBorder={true} />
              <UnderlineRow text={"Date of Admission"} spanText={`${getFormattedDate(student?.DateOfAdmission ?? '')}`} showBorder={true} />
              <UnderlineRow text={"Graduating Year: "} spanText={student?.GraduatingYear} showBorder={true} />
              <UnderlineRow text={"Date of Completion:"} spanText={`${getFormattedDate(student?.DateOfompletion ?? '')}`}  showBorder={true} />
              <UnderlineRow text={"CGPA"} spanText={student?.CGPA} showBorder={true} />
              <UnderlineRow text={"Total Credit Hours"} spanText={student?.TotalCreditHours} showBorder={false} />
              <div className='h-5'></div>
              <div className="w-11/12 flex flex-row justify-center items-end">

                {/* <Button width={300} onClick={() => navigate(`/student/degree`)} buttonText={'View Degree'} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View