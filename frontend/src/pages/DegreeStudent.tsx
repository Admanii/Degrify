import DetailsHeading from '../components/University/DegreeViewPage/DetailsHeading'
import Layout from '../components/general/Layout'
import HeadingWithSpan from '../components/general/HeadingWithSpan'
import { useEffect, useState } from 'react'
import { GetDegreebyId, RevertDegreeUpdatesHec, UpdateDegreeHec, UpdateDegreeUniversity } from '../store/actions/degreeActions'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import Button from '../components/general/Button'
import Modal from '../components/general/Modal/Modal'
import { IMAGES } from '../constants/images'
import { SubTitle } from '../components/general/Modal/SubTitle'
import { Title } from '../components/general/Modal/Title'
import { useNavigate } from 'react-router-dom'
import { IDegreeDetails } from '../store/types/types'
import { unwrapResult } from '@reduxjs/toolkit'
import { UserInfo } from '../store/slice/authSlice'
import { ethers } from "ethers";
import { abi, getFormattedDate } from '../utility/util'
import { toast } from 'react-toastify'
import classNames from 'classnames'
import UnderlineRow from '../components/general/UnderlineRow'
import LoadingScreen from '../components/general/LoadingScreen'

const name = "Muhammad Ahmed"
const erp = "19717"
const programDeg = "BSCS"
const graduatingYear = "2023"
const fatherName = "Riaz"
const dateOfBirth = "4354"
const dateOfAdmission = '02/02/23'
const dateOfCompletion = '02/02/2023'
const cnic = '42000-000000-2'
const email = 'ahmed@iba.pk'

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
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
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
    let errorMessage = '';
    setIsLoading(true);
    var result;
    if (userRole == "UNIVERSITY") {
      const response = await dispatch(UpdateDegreeUniversity({ degreeId: degreeId }))
      result = unwrapResult(response);
    }
    if (userRole == "HEC") {
      const response = await dispatch(UpdateDegreeHec({ degreeId: degreeId }))
      result = unwrapResult(response);
      const contractAddress = "0x553952fd4267A6BAb54903E11F46804A400AB326";
      if (typeof window !== "undefined") {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          let contract = new ethers.Contract(contractAddress, abi, signer);
          let transaction = await contract.addDegree(
            degree?.studentDetails?.name,
            degree?.studentDetails?.studentID,
            result.data.ipfsLink
          );
          let receipt = await transaction.wait();
          if (receipt.status === 1) {
            toast.success("Degree Updated, Transaction Successfull!", {
              position: toast.POSITION.TOP_RIGHT
            },);
            console.log("Transaction accepted!");
          }
          let getDegree = await contract.getDegreeByERP(degree?.studentDetails?.studentID);
          console.log(getDegree);
        } catch (error: any) {
          errorMessage = error;
          const response = await dispatch(RevertDegreeUpdatesHec({ degreeId: degreeId }))
          result = unwrapResult(response);
          if (error.code === "ACTION_REJECTED") {
            console.log("User denied transaction signature.");
            toast.error("Transaction Denied!", {
              position: toast.POSITION.TOP_RIGHT
            },);
          } else {
            toast.error("Transaction Error, Try Again!", {
              position: toast.POSITION.TOP_RIGHT
            },);
            console.log("Transaction failed:", error);
          }
        }
      }
    }
    setIsStudentApproved(result?.data?.studentVerified ?? false)
    setIsUniApproved(result?.data?.organisationVerified ?? false)
    setIsHecApproved(result?.data?.HECVerified ?? false)
    if (errorMessage === '') {
      navigate(`/view/degreecertificate?degreeId=${degreeId}`);
    }
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
          {/* <View student={degree?.studentDetails} headingText={'STUDENT DETAILS'} /> */}
          <HeadingWithSpan marginTop='3' Text={'DEGREE DETAILS'} />
          <div className="flex">

            <div className="w-full p-5 pr-5">
              <div className="bg-white p-3 border-t-4 border-green-400 text-left">
                <div className="grid grid-cols-2 gap-4 my-4 px-10">
                  <UnderlineRow text={'Name'} spanText={`${degree?.studentDetails?.name.charAt(0).toUpperCase()}${degree?.studentDetails?.name.slice(1)}`} showBorder={false} />
                  <UnderlineRow text={'Father\'s Name'} spanText={`${degree?.studentDetails?.fatherName.charAt(0).toUpperCase()}${degree?.studentDetails?.fatherName.slice(1)}`} showBorder={false} />
                  <UnderlineRow text={'Email ID'} spanText={`${degree?.studentDetails?.email}`} showBorder={false} />
                  <UnderlineRow text={'ERP ID'} spanText={`${degree?.studentDetails?.studentID}`} showBorder={false} />
                  <UnderlineRow text={'CNIC'} spanText={`${degree?.studentDetails?.CNIC}`} showBorder={false} />
                  <UnderlineRow text={'Date of Birth'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfBirth ?? '')}`} showBorder={false} />
                  <UnderlineRow text={'Program'} spanText={`${degree?.studentDetails?.Program}`} showBorder={false} />
                  <UnderlineRow text={'University'} spanText={`${degree?.studentDetails?.orgName}`} showBorder={false} />
                  <UnderlineRow text={'Date of Admission'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfAdmission ?? '')}`} showBorder={false} />
                  <UnderlineRow text={'Date of Completion'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfompletion ?? '')}`} showBorder={false} />
                  <UnderlineRow text={'Date of Issue'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfAdmission ?? '')}`} showBorder={false} />
                  <UnderlineRow text={'Graduating Year'} spanText={`${degree?.studentDetails?.GraduatingYear}`} showBorder={false} />
                  <UnderlineRow text={'CGPA'} spanText={`${degree?.studentDetails?.CGPA}`} showBorder={false} />
                  <UnderlineRow text={'Total Credit Hours'} spanText={`${degree?.studentDetails?.TotalCreditHours}`} showBorder={false} />
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
                    <Button height={44} width={355} buttonText={'Approve Degree'} disabled={disabled} onClick={openModal}></Button>
                    <div>
                      {!isStudentApproved && (
                        <span className="text-sm text-red-500 font-medium">
                          * This degree is pending approval from the student
                        </span>
                      )}
                      {(isUniApproved && isHecApproved && userRole == "UNIVERSITY") ? (
                        <span className="text-sm text-green-500 font-medium">
                          * This degree has been approved by {degree?.studentDetails?.orgName} and the HEC
                        </span>
                      ) : (isUniApproved && isStudentApproved && userRole == "UNIVERSITY") && (
                        <span className="text-sm text-green-500 font-medium">
                          *This degree has already been approved by {degree?.studentDetails?.orgName}
                        </span>
                      )}
                      {(isHecApproved && userRole == "HEC") && (
                        <span className="text-sm text-green-500 font-medium">
                          *This degree has already been approved by HEC
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

export default DegreeStudent