import { createContext, useState } from 'react';

const INITIAL_STATE = {
  currentUser: null,
  addUser: () => {},
};

export const AuthContext = createContext(INITIAL_STATE);
AuthContext.displayName = 'AuthContext';

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);

  const addUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider value={{ currentUser, addUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
