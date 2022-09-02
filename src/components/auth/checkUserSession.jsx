import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';
import { AuthContext2 } from '../../context/AuthContext2';
import { getCurrentUser } from '../../firebase/firebase';
import Spinner from '../../components/spinner/Spinner';

const CheckUserSession = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const { currentUser, addUser } = useContext(AuthContext);
  const { currentUser, setCurrentUser } = useContext(AuthContext2);
  const location = useLocation();

  useEffect(() => {
    const user = async () => {
      try {
        const user = await getCurrentUser();
        // addUser(user);
        setCurrentUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
      console.log('checSession ran');
    };
    user();
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
