import React, { useState } from 'react';
import EventDetails from './EventDetails';
import TicketType from './TicketType';
import TicketQuantitySelector from './TicketQuantitySelector';
import ActionButton from './ActionButton';
import AttendeesDetailsForm from './AttendeesDetailsForm';
import EventDetailsCard from './EventDetailsCard';
import TicketBookingStage from './TicketBookingStage';

const TicketBooking = () => {
  const [selectedTicket, setSelectedTicket] = useState('regular access');
  const [currentStep, setCurrentStep] = useState(1);
  const [attendeeData, setAttendeeData] = useState({});
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setTicketQuantity(value);
    console.log("Selected quantity:", value);
  };

  const handleTicketSelection = (ticketType) => {
    console.log("Selected Ticket:", ticketType);
    setSelectedTicket(ticketType);
  };

  const goToPreviousStep = () => {
    setCurrentStep(1);
  };

  const goToNextStep = () => {
    setCurrentStep(2);
  };

  const goToStep3 = (values) => {
    setAttendeeData({
      ...values,
      ticketType: selectedTicket,      // Set as ticketType
      ticketQuantity: ticketQuantity,  // Set as ticketQuantity
    });
    setCurrentStep(3);
  };


  return (
    <div>
      {currentStep === 1 && (
        <div className="w-[90%] m-auto max-w-md sm:max-w-2xl ticket-selection bg-mint-800 border border-solid border-mint-600 rounded-4xl p-6 sm:p-10">
          <div>
            <TicketBookingStage stageTitle='Ticket Selection' stageNumber={1} />
          </div>
          <div className='bg-mint-900 border border-solid border-mint-600 p-5 rounded-3xl'>
            <div className='mb-7'>
                <EventDetails />
            </div>
            <div className='border-t-4 border-solid border-mint-250 pt-5'>
              <h2 className='text-white mb-2'>Select Ticket Type:</h2>
              <div className='flex flex-col sm:flex-row justify-between border border-mint-250 border-solid bg-mint-150 rounded-2xl'>
                  <TicketType 
                      accessType='regular access'
                      accessFee='Free'
                      isSelected={selectedTicket === "regular access"}
                      onSelect={() => handleTicketSelection("regular access")}
                  />
                  <TicketType 
                      accessType='vip access'
                      accessFee='$50'
                      isSelected={selectedTicket === "vip access"}
                      onSelect={() => handleTicketSelection("vip access")}
                  />
                  <TicketType 
                      accessType='vvip access'
                      accessFee='$150'
                      isSelected={selectedTicket === "vvip access"}
                      onSelect={() => handleTicketSelection("vvip access")}
                  />
              </div>
            </div>
            <div>
                <TicketQuantitySelector quantity={ticketQuantity} onChange={handleQuantityChange} />
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between mt-10 w-full'>
                <ActionButton 
                title='Cancel' 
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-mint-500 focus:outline-none bg-transparent rounded-lg border border-mint-500 w-full"
                />
                <ActionButton 
                title='Next' 
                className="text-white bg-mint-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
                onClick={goToNextStep}
                />
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className='block'>
          <AttendeesDetailsForm onClick={goToStep3} stageOne={goToPreviousStep} />
        </div>
      )}

      {currentStep === 3 && (
        <div className='block'>
          <EventDetailsCard attendeeData={attendeeData} stepRestart={goToPreviousStep} />
        </div>
      )}
    </div>
  );
};

export default TicketBooking;
