import React, { createContext, useState } from 'react';

// import { auth, getCurrentUser } from '../firebase/firebase';

export const AuthContext2 = createContext({});
AuthContext2.displayName = 'AuthContext2';

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <AuthContext2.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext2.Provider>
  );
};

export default AuthContextProvider;
