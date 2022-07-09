import React from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widget/Widgets';
import Sidebar from '../../components/sidebar/Sidebar';

import './home.scss';

const Home = () => {
  const outlet = useOutlet();
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        {outlet || <Widgets />}
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Home;
