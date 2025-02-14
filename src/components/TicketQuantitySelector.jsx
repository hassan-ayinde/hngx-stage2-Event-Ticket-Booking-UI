import React, { useState } from 'react';

const TicketQuantitySelector = ({ quantity, onChange }) => {
  // Use local state, defaulting to the passed prop value or 1 if none provided.
  const [selected, setSelected] = useState(quantity || 1);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    // If an onChange callback is provided, notify the parent.
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <label htmlFor="ticket-quantity" className="block mt-4 mb-2 text-sm font-medium text-white">
        Select Ticket Quantity
      </label>
      <select
        id="ticket-quantity"
        value={selected}
        onChange={handleChange}
        className="bg-transparent border border-mint-250 focus-visible:ring-0 text-white text-sm rounded-lg  block w-full p-2.5 dark:placeholder-gray-400 cursor-pointer"
      >
        <option value={1} className='text-gray-800'>1</option>
        <option value={2} className='text-gray-800'>2</option>
        <option value={3} className='text-gray-800'>3</option>
        <option value={4} className='text-gray-800'>4</option>
        <option value={5} className='text-gray-800'>5</option>
      </select>
    </>
  );
};

export default TicketQuantitySelector;
