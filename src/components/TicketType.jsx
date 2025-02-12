import React from 'react'

const TicketType = ({accessType,accessFee,isSelected,onSelect}) => {
  return (
    <div 
      className={`p-4 m-2 rounded-lg cursor-pointer border ${
      isSelected ? "border-blue-500 bg-blue-700 text-white" : "border-red-400 bg-gray-800 text-gray-300"
      }`}
      onClick={onSelect}
    >
      <p>{accessFee}</p>
      <p>{accessType}</p>
      <p>
        <span>20</span>
        <span>/52</span>
      </p>
    </div>
  )
}

export default TicketType