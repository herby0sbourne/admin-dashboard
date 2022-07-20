import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const RequireAuth = () => {
  const { userAuth } = useContext(AuthContext);
  const location = useLocation();

  return userAuth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} state={{ location }} replace={true} />
  );
};

export default RequireAuth;
