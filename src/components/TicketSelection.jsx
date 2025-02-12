import React, {useState} from 'react'
import EventDetails from './EventDetails'
import TicketType from './TicketType'
import TicketQuantitySelector from './TicketQuantitySelector'
import ActionButton from './ActionButton'
import Stack from '@mui/material/Stack';
import AttendeesDetailsForm from './AttendeesDetailsForm'
import EventDetailsCard from './EventDetailsCard'
import TicketBookingStage from './TicketBookingStage'

const TicketSelection = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleTicketSelection = (ticketType) => {
        console.log("Selected Ticket:", ticketType); // Debugging output
        setSelectedTicket(ticketType);
    }
  return (
    <div>
        <div className="w-[90%] m-auto w-[90%] max-w-md sm:max-w-2xl">
            <div>
                <TicketBookingStage stageTitle='Ticket Selection' stageNumber={1}/>
            </div>
            <div>
                <EventDetails/>
            </div>
            <div>
                <h2 className='text-white'>Select Ticket Type:</h2>
                <div className='flex flex-col sm:flex-row justify-between border border-green-300 border-solid'>
                    <TicketType 
                        accessType='regular access' accessFee = 'Free' 
                        isSelected={selectedTicket === "regular access"}
                        onSelect={() => handleTicketSelection("regular access")}
                    />
                    <TicketType 
                        accessType='vip access' accessFee = '$50'
                        isSelected={selectedTicket === "vip access"}
                        onSelect={() => handleTicketSelection("vip access")}
                    />
                    <TicketType 
                        accessType='vvip access' accessFee = '$150'
                        isSelected={selectedTicket === "vvip access"}
                        onSelect={() => handleTicketSelection("vvip access")}
                    />
                </div>
            </div>
            <div> 
                <TicketQuantitySelector/>
            </div>
            <Stack direction='row'>
                <ActionButton title='Cancel' className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"/>
                <ActionButton title='Next' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"/>
            </Stack>
        </div>

        <div className='hidden'>
            <AttendeesDetailsForm/>
        </div>

        <div className='hidden'>
            <EventDetailsCard/>
        </div>
    </div>
  )
}

export default TicketSelection