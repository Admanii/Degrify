import { useSelector } from "react-redux";
import { UnverifiedDegrees } from "../../../store/slice/degreeSlice";
import { useNavigate } from "react-router-dom";

export const UnverifiedDegreesComp = () => {
  const unverifiedDegrees = useSelector(UnverifiedDegrees);
  const navigate = useNavigate()

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
      </div>
      <div className="flex flex-col">
        <div className="-my-5 -mx-4
           overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      ERP ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      CNIC
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date of Birth
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Program
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date of Admission
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date of Completion
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Total Credit Hours
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      CGPA
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-left">
                  {unverifiedDegrees?.length > 0 && unverifiedDegrees?.map((degree, index) => (
                    <tr key={index} className="cursor-pointer hover:bg-gray-100" onClick={() => { navigate(`/view/degreedetails?degreeId=${degree?.degree?._id}`) }} >
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.studentID}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.CNIC}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.DateOfBirth ? new Date(degree?.studentDetails?.DateOfBirth).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                          : "N/A"}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.Program}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.DateOfAdmission ? new Date(degree?.studentDetails?.DateOfAdmission).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                          : "N/A"}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.DateOfompletion ? new Date(degree?.studentDetails?.DateOfompletion).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                          : "N/A"}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.TotalCreditHours}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetails?.CGPA}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        {degree?.degree?.organisationVerified ?
                          <span
                            className={`h-6 w-21 flex bg-green-600 items-center justify-center rounded-full px-3 py-0.5">`}
                          >Verified</span>
                          :
                          <span
                            className={`h-6 w-21 flex bg-red-600 items-center justify-center rounded-full px-3 py-0.5">`}
                          >Unverified</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}