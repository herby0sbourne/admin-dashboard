import React, { useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import FormInput from '../../components/from-input/FormInput';

import './new.scss';

const New = ({ title, inputs }) => {
  const [file, setFile] = useState('');
  return (
    <div>
      <div className="new">
        <div className="new-container">
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                }
                alt="product"
              />
            </div>
            <div className="right">
              <form>
                <div className="form-input">
                  <label htmlFor="image">
                    Upload Image:
                    <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    style={{ display: 'none' }}
                  />
                </div>
                {inputs.map(({ id, ...input }) => {
                  return <FormInput key={id} {...input} />;
                })}
                {/* <FormInput
                  forId="username"
                  label="Username"
                  type="text"
                  placeholder="John_doe eat"
                />
                <FormInput
                  forId="fullname"
                  label="Name and Surname"
                  type="text"
                  placeholder="John Doe"
                /> */}
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
