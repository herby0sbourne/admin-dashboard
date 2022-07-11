import React from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import HomeDashboard from '../../components/home-dashboard/HomeDashboard';

import './home.scss';

const Home = () => {
  const outlet = useOutlet();
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        {outlet || <HomeDashboard />}
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Home;
