import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { auth, createUser, uploadFile } from '../../firebase/firebase';
import FormInput from '../../components/from-input/FormInput';
import './new.scss';

const New = ({ title, inputs }) => {
  const [file, setFile] = useState('');
  const [data, setData] = useState({});
  const [perc, setPerc] = useState(null);
  const navigate = useNavigate();

  //todo use percentage setState on button to disable on upload

  useEffect(() => {
    const uploadImage = async () => {
      if (file) {
        const imgUrl = await uploadFile(file);
        setData((prev) => ({ ...prev, img: imgUrl }));
        console.log(imgUrl);
      }
    };

    uploadImage();
  }, [file]);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleAddProd = async (e) => {
    e.preventDefault();

    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await createUser(userAuth, data);
      navigate(-1);

      // await setDoc(doc(db, 'users', userAuth.user.uid), {
      //   ...data,
      //   createdAt: new Date(),
      // });
    } catch (error) {
      console.log(error);
    }
  };

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
              <form onSubmit={handleAddProd}>
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
                {inputs.map((input) => {
                  return (
                    <FormInput key={input.id} {...input} handleInput={handleInput} />
                  );
                })}
                <button disabled={perc !== null && perc < 100} type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
