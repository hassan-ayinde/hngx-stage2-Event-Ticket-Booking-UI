import React from 'react'
import Button from '@mui/material/Button';

const ActionButton = ({ title, type = 'button', onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={`${className} cursor-pointer`}>
      {title}
    </button>
  );
};

export default ActionButton