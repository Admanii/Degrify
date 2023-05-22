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
                <DetailsHeading text={'Father\'s Name:'} spanText={degree?.studentDetails?.fatherName} />
                <DetailsHeading text={'ERP ID:'} spanText={degree?.studentDetails?.studentID} />
                <DetailsHeading text={'Program: '} spanText={degree?.studentDetails?.Program} />
                <DetailsHeading text={'CNIC:'} spanText={degree?.studentDetails?.CNIC} />
                <DetailsHeading text={'Graduating Year: '} spanText={degree?.studentDetails?.GraduatingYear} />
                <DetailsHeading text={'Date of Birth:'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfBirth ?? '')}`} />
                <DetailsHeading text={'Date of Admission:'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfAdmission ?? '')}`} />
                <DetailsHeading text={'Date of Completion:'} spanText={`${getFormattedDate(degree?.studentDetails?.DateOfompletion ?? '')}`} />
                <DetailsHeading text={'Email ID:'} spanText={degree?.studentDetails?.email} />
                <DetailsHeading text={'CGPA:'} spanText={degree?.studentDetails?.CGPA} />
                <DetailsHeading text={'Total Credit Hours:'} spanText={degree?.studentDetails?.TotalCreditHours} />
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
                        disabled={isLoading}
                        className={classNames(
                          "mt-5 flex w-4/5 justify-center items-center py-3 px-3 text-xl border border-transparent rounded-lg shadow-sm font-medium text-white bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-red-700",
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