import { useEffect, useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getCurrentUser } from '../../firebase/firebase';
import Spinner from '../../components/spinner/Spinner';

const CheckUserSession = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser, addUser } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const user = async () => {
      try {
        const user = await getCurrentUser();
        addUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        isMounted && setIsLoading(false);
      }
      console.log('checSession ran');
    };
    user();
    return () => (isMounted = false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : currentUser ? (
        <Outlet />
      ) : (
        <Navigate to={'/login'} state={{ location }} replace={true} />
      )}
    </>
  );
};

export default CheckUserSession;
