import { v4 as uuidv4 } from "uuid";

const mainAddressList = [
    {
        desc: "7979 N Eldridge Pkwy Suite 762-764,",
        key: uuidv4(),
    },
    {
        desc: "Houston, TX 77041",
        key: uuidv4(),
    }
]
const mainHoursList = [
    {
        desc: "Monday - Friday: 12:00 pm - 9:00 pm",
        key: uuidv4(),
    },
    {
        desc: "Saturday: 10:00 am - 9:00 pm",
        key: uuidv4(),
    },
    {
        desc: "Sunday: 10:00 am - 7:00 pm",
        key: uuidv4(),
    }
]
const mainContactList = [
    {
        desc: "Tel: (281) 509-4743",
        key: uuidv4(),
    },
    {
        desc: "Email: example@heybrovideogames.com",
        key: uuidv4(),
    }
]
const directionsList = [
    {
        desc: "-Enter through main gate.",
        key: uuidv4()
    },
    {
        desc: "-Go straight until you see the leasing office on your left. Park there.",
        key: uuidv4()
    },
    {
        desc: "-Walk through the gates and walk until you see our shop on the left hand side.",
        key: uuidv4()
    }
]

export { mainAddressList, mainHoursList, mainContactList, directionsList };