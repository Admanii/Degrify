import DetailsHeading from '../components/University/DegreeViewPage/DetailsHeading'
import Layout from '../components/general/Layout'
import View from '../components/University/StudentProfile/View'
import HeadingWithSpan from '../components/general/HeadingWithSpan'
import { useEffect, useState } from 'react'
import { GetDegreebyId, UpdateDegreeHec, UpdateDegreeUniversity } from '../store/actions/degreeActions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { Degree } from '../store/slice/degreeSlice'
import Button from '../components/general/Button'
import Modal from '../components/general/Modal/Modal'
import { IMAGES } from '../constants/images'
import { SubTitle } from '../components/general/Modal/SubTitle'
import { Title } from '../components/general/Modal/Title'
import { useNavigate } from 'react-router-dom'
import { IDegreeDetails, IUpdatedDegree } from '../store/types/types'
import { unwrapResult } from '@reduxjs/toolkit'
import { UserInfo } from '../store/slice/authSlice'
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

  const dispatch = useDispatch<AppDispatch>();
  const query = new URLSearchParams(window.location.search);
  const degreeId = query.get('degreeId') ?? '';
  const [degree, setDegree] = useState<IDegreeDetails>();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const userInfo = useSelector(UserInfo);
  var userRole = userInfo?.user?.userRole ?? '';
  console.log(userRole)
  const [isStudentApproved, setIsStudentApproved] = useState(false);
  const [isUniApproved, setIsUniApproved] = useState(false);
  const [isHecApproved, setIsHecApproved] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getDegreebyId();
    console.log(isStudentApproved)
    console.log(isUniApproved)
    console.log(isHecApproved)
    if (userRole == "UNIVERSITY") {
      if (!isStudentApproved) {
        setDisabled(!isStudentApproved)
      }
      else {
        setDisabled(isUniApproved)
      }
    }
    if (isHecApproved && userRole == "HEC") {
      setDisabled(isUniApproved)
    }
  }, [isStudentApproved, isUniApproved, isHecApproved, disabled])

  const getDegreebyId = async () => {
    const response = await dispatch(GetDegreebyId({ degreeId: degreeId }))
    const result = unwrapResult(response);
    setDegree(result);
    setIsStudentApproved(result?.degree?.studentVerified)
    setIsUniApproved(result?.degree?.organisationVerified)
    setIsHecApproved(result?.degree?.HECVerified)
    console.log(degree)
  }

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const approveDegree = async () => {
    var result;
    if (userRole == "UNIVERSITY") {
      const response = await dispatch(UpdateDegreeUniversity({ degreeId: degreeId }))
      result = unwrapResult(response);
    }
    if (userRole == "HEC") {
      const response = await dispatch(UpdateDegreeHec({ degreeId: degreeId }))
      result = unwrapResult(response);
    }
    setIsStudentApproved(result?.data?.studentVerified)
    setIsUniApproved(result?.data?.organisationVerified)
    setIsHecApproved(result?.data?.HECVerified)
    navigate(`/view/degreecertificate?degreeId=${degreeId}`);
  };

  return (
    <Layout>
      <div>
        {/* <View student={degree?.studentDetails} headingText={'STUDENT DETAILS'} /> */}
        <HeadingWithSpan marginTop='1' Text={'DEGREE DETAILS'} />
        <div className="flex">

          <div className="w-1/2 p-4">
            <div className="bg-white p-3 border-t-4 border-green-400 text-left">
              <div className="grid grid-cols-2 gap-4 my-6">
                <DetailsHeading text={'Name:'} spanText={degree?.studentDetails?.name} />
                <DetailsHeading text={'Serial Number:'} spanText={degree?.studentDetails?.studentID} />
                <DetailsHeading text={'ERP ID:'} spanText={degree?.studentDetails?.studentID} />
                <DetailsHeading text={'Program: '} spanText={`${getCaseClass(degree?.studentDetails?.orgName ?? '')}`} />
                <DetailsHeading text={'Graduating Year: '} spanText={degree?.studentDetails?.GraduatingYear} />
                <DetailsHeading text={'Father\'s Name:'} spanText={degree?.studentDetails?.fatherName} />
                <DetailsHeading text={'Date of Birth:'} spanText={`${dateOfBirth}`} />
                <DetailsHeading text={'CNIC:'} spanText={`${cnic}`} />
                <DetailsHeading text={'Date of Admission:'} spanText={`${dateOfAdmission}`} />
                <DetailsHeading text={'Date of Completion:'} spanText={`${dateOfCompletion}`} />
                <DetailsHeading text={'Email ID:'} spanText={`${email}`} />
                <DetailsHeading text={'Password:'} spanText="*********" />
              </div>
              <div className="flex justify-around">
                <Button height={44} inverted={true} buttonText={'View Certificate'} onClick={() => navigate(`/view/degreecertificate?degreeId=${degreeId}`)}></Button>

                <Modal closeButton={true} modalState={modal} onClick={() => closeModal()}>
                  <div className='flex justify-center'>
                    <img src={IMAGES.info_icon}></img>
                  </div>
                  <Title text="Approve this degree?" />
                  <SubTitle text='Are you sure you want to approve? This action cannot be undone. Degrees uploaded to blockchain can not be altered!' />
                  <div className='flex my-2'>
                    <div className='flex px-2 w-1/2 justify-center'>
                      <button
                        type="submit"
                        className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-[#344054] text-xl border border-gray-300 rounded-lg shadow-md font-medium focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-gray-400"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className='flex px-2 w-1/2 justify-center'>
                      <button
                        type="submit"
                        className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-xl border border-transparent rounded-lg shadow-sm font-medium text-white bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-red-700"
                        onClick={approveDegree}
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </Modal>
                <div className='flex flex-col'>
                  <Button height={44} buttonText={'Approve Degree'} disabled={disabled} onClick={openModal} className={disabled ? "bg-gray-600 opacity-40 cursor-not-allowed" : ""}></Button>
                  <div>
                    {!isStudentApproved && (
                      <span className="text-sm text-red-500 font-medium">
                        *This degree is not approved by student
                      </span>
                    )}
                    {(isUniApproved && isHecApproved && userRole == "UNIVERSITY") ? (
                      <span className="text-sm text-green-500 font-medium">
                        *This degree is approved by university and hec
                      </span>
                    ) : (isUniApproved && isStudentApproved && userRole == "UNIVERSITY") && (
                      <span className="text-sm text-green-500 font-medium">
                        *This degree is already approved by university
                      </span>
                    )}
                    {(isHecApproved && userRole == "HEC") && (
                      <span className="text-sm text-green-500 font-medium">
                        *This degree is already approved by hec
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>


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
      </div>
    </Layout>
  )
}

export default DegreeStudent

