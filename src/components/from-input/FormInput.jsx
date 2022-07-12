import React from 'react';

import './form-input.scss';

const FormInput = ({ label, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={label}>{label}</label>
      <input {...props} id={label} />
    </div>
  );
};

export default FormInput;
