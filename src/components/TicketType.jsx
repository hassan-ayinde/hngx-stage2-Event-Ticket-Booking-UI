import React from 'react'

const TicketType = ({accessType,accessFee,isSelected,onSelect}) => {
  return (
    <div 
      className={`p-4 m-2 rounded-xl cursor-pointer border sm:w-[158px] ${
      isSelected ? "border-mint-350 bg-mint-300 text-white" : "border-mint-350 border-2 bg-transparent text-white"
      }`}
      onClick={onSelect}
    >
      <p className='text-lg font-bold'>{accessFee}</p>
      <p className='uppercase text-base'>{accessType}</p>
      <p>
        <span>20</span>
        <span>/52</span>
      </p>
    </div>
  )
}

export default TicketType