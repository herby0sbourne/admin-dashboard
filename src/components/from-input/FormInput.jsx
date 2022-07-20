import React from 'react';

import './form-input.scss';

const FormInput = ({ id, label, handleInput, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={label}>{label}</label>
      <input {...props} id={id} onChange={handleInput} />
    </div>
  );
};

export default FormInput;
