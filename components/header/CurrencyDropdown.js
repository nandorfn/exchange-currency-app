import React from 'react';

const CurrencyDropdown = ({ id, options }) => {
  return (
    <select id={id} className='form-select mt-4'>
      {options.map((option, index) => (
        <option key={index} className='' value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
