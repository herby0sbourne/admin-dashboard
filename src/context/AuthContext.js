import React, { createContext, useEffect, useState } from 'react';
// import { auth, getCurrentUser } from '../firebase/firebase';

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
  addUser: () => {},
};

export const AuthContext = createContext(INITIAL_STATE);
AuthContext.displayName = 'AuthContext';

const AuthContextProvider = ({ children }) => {
  const [userAuth, setCurrentUser] = useState(INITIAL_STATE);
  // const [currentUser, setCurrentUser] = useState(null);
  // const addUser = (user) => setCurrentUser({ currentUser: user });
  const addUser = (user) => {
    setCurrentUser({ currentUser: user });
    localStorage.setItem('currentUser', JSON.stringify({ user }));
  };

  // useEffect(() => {
  //   const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
  //     const { email, displayName, uid } = user;
  //     if (user) {
  //       addUser({ email, displayName, uid });
  //     }

  //     console.log(user);
  //   });

  //   return () => {
  //     unsubscribeFromAuth();
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ userAuth, addUser }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
