import React, { createContext, useState } from 'react';

// import { auth, getCurrentUser } from '../firebase/firebase';

const INITIAL_STATE = {
  currentUser: null,
  // currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
  addUser: () => {},
};

export const AuthContext = createContext(INITIAL_STATE);
AuthContext.displayName = 'AuthContext';

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);

  const addUser = (user) => {
    // const { email, displayName, uid } = user;
    // console.log(user);
    setCurrentUser(user);
    // localStorage.setItem('currentUser', JSON.stringify({ user }));
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
    <AuthContext.Provider value={{ currentUser, addUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
