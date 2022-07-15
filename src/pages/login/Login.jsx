import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import './login.scss';

const Login = () => {
  const [error, setError] = useState(true);
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
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
        <input type="email" name="email" placeholder="email" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
