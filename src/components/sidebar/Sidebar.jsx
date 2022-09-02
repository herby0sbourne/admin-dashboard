import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { auth } from '../../firebase/firebase';
// import { AuthContext } from '../../context/AuthContext';
import { AuthContext2 } from '../../context/AuthContext2';

import './sidebar.scss';

const Sidebar = () => {
  // const { addUser } = useContext(AuthContext);
  const { setCurrentUser } = useContext(AuthContext2);

  const logOut = () => {
    // addUser(null);
    setCurrentUser(null);
    signOut(auth);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to={'/'}>
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          {/* MAIN */}
          <p className="title">Main</p>
          <Link to={'/'}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          {/* LIST */}
          <p className="title">List</p>
          <Link to={'/users'}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={'/products'}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Order</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          {/* USEFULL */}
          <p className="title">UseFull</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          {/* SERVICE */}
          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={logOut}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div
          className="color-option"
          onClick={() => {
            const app = document.querySelector('.app');
            if (app.classList.contains('dark')) {
              app.classList.remove('dark');
              return;
            }
            // app.classList.toggle('dark')
            app.classList.add('dark');
          }}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
