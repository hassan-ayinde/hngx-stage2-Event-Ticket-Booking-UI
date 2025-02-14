import React from 'react'

const EventDetails = () => {
  return (
    <div className='text-white text-center border-2 border-solid border-mint-250 event-details rounded-3xl'>
        <h1 className='mt-2 event-title text-xl'>Techember Fest ”25</h1>
        <p className='text-sm sm:text-base my-3'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
        <div className='flex flex-col sm:flex-row justify-center gap-0 sm:gap-3 mb-2'>
            <p>📍 [Event Location]</p>
            <p className='hidden sm:block'>||</p>
            <p>March 15, 2025 | 7:00 PM</p>
        </div>
    </div>
  )
}

export default EventDetails