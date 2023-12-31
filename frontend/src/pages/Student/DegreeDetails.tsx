import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { GetDegreebyStudentId } from '../../store/actions/degreeActions'
import { AppDispatch } from '../../store/store'
import { IDegreeDetails } from '../../store/types/types'
import { UserInfo } from '../../store/slice/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { GetDegreebyId } from '../../store/actions/degreeActions'
import { UpdateDegreeStudent } from '../../store/actions/degreeActions'
import Layout from '../../components/general/Layout'
import HeadingWithSpan from '../../components/general/HeadingWithSpan'
import DetailsHeading from '../../components/University/DegreeViewPage/DetailsHeading'
import Button from '../../components/general/Button'
import Modal from '../../components/general/Modal/Modal'
import { IMAGES } from '../../constants/images'
import { Title } from '../../components/general/Modal/Title'
import { SubTitle } from '../../components/general/Modal/SubTitle'
import { getCaseClass, getFormattedDate } from '../../utility/util'
import UnderlineRow from '../../components/general/UnderlineRow'
import LoadingScreen from '../../components/general/LoadingScreen'

function DegreeDetails() {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [degree, setDegree] = useState<IDegreeDetails | null>(null);
  const [isDegreeExist, setIsDegreeExists] = useState(false);
  const [degreeId, setdegreeId] = useState('');
  const [modal, setModal] = useState(false);
  const userInfo = useSelector(UserInfo);
  const [isStudentApproved, setIsStudentApproved] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const studentId = userInfo?.user?.studentID ?? '';
  var userRole = userInfo?.user?.userRole ?? '';
  console.log(userRole)

  const isDegreeExists = async () => {
    const response = await dispatch(GetDegreebyStudentId({ studentId: studentId }))
    const result = unwrapResult(response);
    if (result?.message === 'Exists' && (result?.statusCode === 200)) {
      setIsDegreeExists(true);
      setdegreeId(result?.data._id)
      getDegreebyId();
    }
  }

  useEffect(() => {
    isDegreeExists()
    setDisabled(isStudentApproved)
  }, [isStudentApproved, isDegreeExist, disabled, degreeId])

  const getDegreebyId = async () => {
    const response = await dispatch(GetDegreebyId({ degreeId: degreeId }))
    const result = unwrapResult(response);
    setDegree(result);
    setIsStudentApproved(result?.degree?.studentVerified)
    console.log(degree)
  }

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const approveDegree = async () => {
    setIsLoading(true);
    const response = await dispatch(UpdateDegreeStudent({ degreeId: degreeId }))
    const result = unwrapResult(response);
    setIsStudentApproved(result?.data?.studentVerified ?? false)
    navigate(`/view/degreecertificate?degreeId=${degreeId}`);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className='p-5'>
          <HeadingWithSpan marginTop='3' Text={'DEGREE DETAILS'} />
          <div className="flex">

            <div className="w-full p-5 pr-5">
              <div className="bg-white p-3 border-t-4 border-green-400 text-left">
                <div className="grid grid-cols-2 gap-4 my-4 px-10">
                  <UnderlineRow text={'Name'} spanText={`${degree?.studentDetails?.name ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'Father\'s Name'} spanText={`${degree?.studentDetails?.fatherName ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'Email ID'} spanText={`${degree?.studentDetails?.email ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'ERP ID'} spanText={`${degree?.studentDetails?.studentID ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'CNIC'} spanText={`${degree?.studentDetails?.CNIC ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'Date of Birth'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfBirth ?? '')}`} showBorder={false} />
                  <UnderlineRow text={'Program'} spanText={`${degree?.studentDetails?.Program ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'Enrollment Number'} spanText={`${degree?.studentDetails?.enrollmentNumber ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'University'} spanText={`${degree?.studentDetails?.orgName ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'Date of Admission'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfAdmission ?? '')}`} showBorder={false} />
                  <UnderlineRow text={'Date of Completion'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfompletion ?? '')}`} showBorder={false} />
                  <UnderlineRow text={'Graduating Year'} spanText={`${degree?.studentDetails?.GraduatingYear ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'CGPA'} spanText={`${degree?.studentDetails?.CGPA ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'Total Credit Hours'} spanText={`${degree?.studentDetails?.TotalCreditHours ?? ''}`} showBorder={false} />
                  <UnderlineRow text={'Degree Hash'} spanText={`${degree?.degree?.hashValue ?? ''}`} showBorder={false} />

                </div>
                <div className="justify-start grid grid-cols-2 gap-4 pt-2 pb-2 px-10">
                  <Button height={44} width={355} inverted={true} buttonText={'View Certificate'} onClick={() => navigate(`/view/degreecertificate?degreeId=${degreeId}`)}></Button>

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
                          className="mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-[#344054] text-xl border border-gray-300 hover:bg-slate-100 rounded-lg shadow-md font-medium focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-gray-400"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className='flex px-2 w-1/2 justify-center'>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={classNames(
                            "mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-xl border border-transparent rounded-lg shadow-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-red-700",
                            isLoading ? "opacity-40 cursor-not-allowed" : ""
                          )}
                          onClick={approveDegree}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </Modal>
                  <div className='flex flex-col'>
                    <Button height={44} width={355} buttonText={'Approve Degree'} disabled={disabled} onClick={openModal} className={disabled ? "bg-gray-600" : ""}></Button>
                    <div>
                      {isStudentApproved && (
                        <span className="text-sm text-green-400 font-medium">
                          *This degree has already been approved by the student
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      )}




    </Layout>
  )
}

export default DegreeDetails