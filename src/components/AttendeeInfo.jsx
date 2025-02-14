import React from 'react'

const AttendeeInfo = ({ name, email, ticketType, ticketQuantity, specialRequest}) => {
  return (
    <div>
        <div className='border border-solid border-mint-950 rounded-lg mx-2 my-2 bg-mint-850'>
            <div className='grid grid-cols-2 border-b-1 border-solid border-mint-300 mx-2'>
                <div className='border-r-1 border-solid border-mint-300'>
                    <div>
                        <p className='text-xs'>Enter your name</p>
                        <p>{name}</p>
                    </div>
                    <div className='border-t-1 border-solid border-mint-300 '>
                        <p>Ticket Type:</p>
                        <p className='text-xs'>{ticketType}</p>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <p className='text-xs'>Enter your email</p>
                        <p className='w-[93px] text-wrap text-sm'>{email}</p>
                    </div>
                    <div className='border-t-1 border-solid border-mint-300'>
                        <p>Ticket for:</p>
                        <p>{ticketQuantity}</p>
                    </div>
                </div>
            </div>
            <div className='px-2 py-1'>
                <p>Special request?</p>
                <p className='text-wrap'>{specialRequest}</p>
            </div>
        </div>
    </div>
  )
}

export default AttendeeInfo