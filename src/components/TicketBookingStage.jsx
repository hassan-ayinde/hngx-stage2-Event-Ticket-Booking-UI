import React from 'react'

const TicketBookingStage = ({stageTitle, stageNumber}) => {
  const progressPercentage = (stageNumber / 3) * 100;
  return (
    <div>
      <div className='flex justify-between items-center text-white'>
        <h1 className='capitalize text-xl sm:text-3xl'>{stageTitle}</h1>
        <p className='text-base'>
          <span>Step </span>
          <span>{stageNumber}</span>
          <span>/3</span>
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-8 mt-1">
          <div 
            className="bg-mint-600 h-1.5 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
      </div>
    </div>
  )
}

export default TicketBookingStage