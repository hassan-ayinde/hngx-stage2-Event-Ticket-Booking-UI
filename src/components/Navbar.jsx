import React from 'react'
import { HiOutlineTicket } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='flex border border-blue-300 border-solid justify-between w-[90%] max-w-6xl m-auto items-center text-lg p-4 text-gray-400 rounded-3xl'>
        <div className='flex items-center gap-1'>
            <HiOutlineTicket />
            <h1>ticz</h1>
        </div>
        <div className='hidden sm:block w-72 md:w-80'>
            <ul className='flex justify-between'>
                <li>Events</li>
                <li>My Tickets</li>
                <li>About Project</li>
            </ul>
        </div>
        <div className='flex justify-end'>
            <button type='' className='uppercase flex items-center bg-white px-4 py-2 rounded-lg'>
                <span>my tickets</span>
                <IoIosArrowRoundForward style={{
                    marginLeft: 4,
                    fontSize: 18,
                    color: '#212121'
                }}/>
            </button>
        </div>
    </div>
  )
}

export default Navbar