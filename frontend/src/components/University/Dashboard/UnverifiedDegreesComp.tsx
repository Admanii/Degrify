import { useSelector } from "react-redux";
import { AllDegrees } from "../../../store/slice/degreeSlice";
import { IMAGES } from "../../../constants/images";
import { IDegreeDetails } from "../../../store/types/types";

export const UnverifiedDegreesComp = () => {
  const allDegrees: Array<IDegreeDetails> = useSelector(AllDegrees);

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
                      Degree ID
                    </th>
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
                      Program
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date of Issue
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Graduating Year
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-left">
                  {allDegrees?.length > 0 && allDegrees?.map((degree, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.degree?._id?.substring(1, 10)}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetail?.studentID}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetail?.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetail?.CNIC}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetail?.enrollmentNumber}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetail?.DateOfompletion ? new Date(degree?.studentDetail?.DateOfompletion).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                          : "N/A"}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        <div className="text-gray-700">{degree?.studentDetail?.DateOfompletion ? new Date(degree?.studentDetail?.DateOfompletion).toLocaleDateString('en-GB', { year: 'numeric' }).replaceAll('\/', '-')
                          : "N/A"}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">
                        {degree?.degree?.completeVerified ?
                          <span
                            className={`h-5 w-22 flex bg-green-600 items-center justify-center rounded-full px-3 py-0.5">`}
                          >Verified</span>
                          :
                          <span
                            className={`h-5 w-22 flex bg-red-600 items-center justify-center rounded-full px-3 py-0.5">`}
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