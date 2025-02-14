import React, {useState} from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import Logo from '../assets/logo.svg'

const Navbar = () => {
    const [isHover, setIsHover] = useState(false);
    
    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);
  return (
    <div className='flex border border-blue-300 border-solid justify-between w-[90%] max-w-md sm:max-w-6xl m-auto items-center text-lg p-4 text-gray-400 rounded-3xl mb-7'>
        <div className='flex items-center gap-1'>
            <img src={Logo} alt='ticz logo' />
        </div>
        <div className='hidden sm:block w-72 md:w-80'>
            <ul className='flex justify-between'>
                <li>Events</li>
                <li>My Tickets</li>
                <li>About Project</li>
            </ul>
        </div>
        <div className='flex justify-end'>
            <button type='button' 
                className='uppercase flex items-center bg-white px-4 py-2 rounded-lg cursor-pointer hover:bg-mint-500 hover:text-white hover:border-solid hover:border-mint-50'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span>my tickets</span>
                {
                    isHover ? <MdArrowOutward style={{
                        marginLeft: 4,
                        fontSize: 18,
                        color: '#212121'
                    }}/>: 
                    <IoIosArrowRoundForward style={{
                        marginLeft: 4,
                        fontSize: 18,
                        color: '#212121'
                    }}/>
                }
                {/* <IoIosArrowRoundForward style={{
                    marginLeft: 4,
                    fontSize: 18,
                    color: '#212121'
                }}/>
                <MdArrowOutward /> */}
            </button>
        </div>
    </div>
  )
}

export default Navbar