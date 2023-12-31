import HeadingWithSpan from '../../general/HeadingWithSpan'
import DetailsHeading from '../DegreeViewPage/DetailsHeading'
import { IMAGES } from '../../../constants/images'
import Button from '../../general/Button'
import UnderlineRow from '../../general/UnderlineRow'
import { IOrganisationDetails, IStudentDetails } from '../../../store/types/types'

interface Props {
    headingText: string,
    organisation: IOrganisationDetails
}

function OrganisationView({ headingText, organisation }: Props) {
    console.log(organisation);

    return (
       
        <div>
            <HeadingWithSpan Text={headingText} marginTop={'6'} />

            <div className="flex flex-wrap justify-center h-135 w-11/12 bg-gray-100">
                {/* FIRST COLUMN */}
                <div className="w-2/6">
                    {/* FIRST BOX TOP LEFT */}
                    <div className="p-4">
                        <div className="h-80 bg-white shadow-md p-4 flex flex-col items-center justify-center">
                            <div className="w-40 h-40 rounded-full bg-gray-500">
                                <img src={IMAGES.man_avatar}></img>
                            </div>
                            <DetailsHeading text={organisation?.name} size='2xl' />
                        </div>
                    </div>
                    {/* SECOND BOX BOTTOM LEFT */}
                </div>
                {/* END OF FIRST COLUMN */}
                {/* SECOND COLUMN */}
                <div className="w-4/6">
                    {/* FIRST BOX TOP RIGHT */}
                    <div className="pb-8 pt-4">
                        <div className="h-80 bg-white shadow-md flex flex-col items-start px-8 py-4">

                            {/* NAME ROW */}
                            <UnderlineRow text={'University Name '} spanText={organisation?.name} showBorder={true} />
                            <UnderlineRow text={'Phone Number '} spanText={organisation?.phoneNumber} showBorder={true} />
                            <UnderlineRow text={"Email"} spanText={`${organisation?.email}`} showBorder={true} />
                            <UnderlineRow text={'Address'} spanText={organisation?.address} showBorder={false} />
                            <div className='h-5'></div>
                            {/* <div className="flex flex-row justify-between items-start w-2/3 pr-5">
                                <Button inverted={true} buttonText={'Edit Profile'} />
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto">
                                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                        Active
                                        </span>
                                    </span>
                                </li>  
                            </div>       */}
                        </div>

                    </div>


                </div>
            </div>


        </div>


    )
}

export default OrganisationView