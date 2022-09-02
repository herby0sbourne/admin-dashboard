import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
// import { AuthContext } from '../../context/AuthContext';

import './login.scss';

const Login = () => {
  // const { addUser } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({ email: 'test@123.com', password: '123456789' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // const { email, displayName, uid } = userCredential.user;
        // addUser({ email, displayName, uid });
        // setCurrentUser({ email, displayName, uid });
        navigate('/');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setError(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
