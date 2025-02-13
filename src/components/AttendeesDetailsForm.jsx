import React from 'react'
import Stack from '@mui/material/Stack';
import ActionButton from './ActionButton';
import TicketBookingStage from './TicketBookingStage';
import { BiCloudDownload } from "react-icons/bi";
import AvatarUpload from './AvatarUpload';

const AttendeesDetailsForm = ({onClick,stageOne}) => {
  return (
    <div className='w-[90%] m-auto w-[90%] max-w-md sm:max-w-2xl'>
        <div>
            <TicketBookingStage stageTitle='Attendee Details' stageNumber={2}/>
        </div>
        <form action="" className='text-white border border-amber-200 p-6'>
            <div className='border border-amber-200 border-solid p-4'>
                <label for="base-input" className="block mb-2 text-sm font-medium text-white dark:text-white">Upload Profile Photo</label>
                {/* <input type="file" src="" alt="" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
                <div className="relative">
                    <div className="w-full h-52 bg-green-300"></div>
                    <div></div>
                    <AvatarUpload/>
                    {/* <div className="w-full sm:w-52 h-56 bg-amber-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex justify-center items-center">
                        <div className='w-full flex flex-col items-center text-center'>
                            {/* <BiCloudDownload /> */}
                            {/* <p>Drag & drop or click to upload</p> 
                            <AvatarUpload/>
                        </div>
                    </div> */}
                </div>
            </div>
            <div>
                <label for="base-input" className="block mb-2 text-sm font-medium dark:text-white">Base input</label>
                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="email-address-icon" className="block mb-2 text-sm font-medium dark:text-white">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                    </div>
                    <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
                </div>
            </div>
            <Stack direction='row'>
                <ActionButton title='Back' 
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={stageOne}
                />
                <ActionButton 
                    title='Get My Free Ticket' 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={onClick}
                />
            </Stack>
        </form>
    </div>
  )
}

export default AttendeesDetailsForm