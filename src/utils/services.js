import {IoMdAirplane,MdLocalShipping,GiPoliceOfficerHead,RiShipFill} from 'react-icons/all'


export const services = [
    {
        name: "air freight",
        icon: <IoMdAirplane />
    },
    {
        name: "sea freight",
        icon: <RiShipFill />
    },
    {
        name: `inland (Truck & barge)`,
        icon: <MdLocalShipping />
    },
    {
        name: "customs clearance",
        icon: <GiPoliceOfficerHead />
    },
]