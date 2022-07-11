import React from 'react';
import List from '../list/List';
import Chart from '../chart/Chart';
import Widgets from '../widget/Widgets';
import Featured from '../featured/Featured';

const HomeDashboard = () => {
  return (
    <>
      <Widgets />
      <div className="charts">
        <Featured />
        <Chart />
      </div>
      <div className="list-container">
        <div className="list-title">Latest Transaction</div>
        <List />
      </div>
    </>
  );
};

export default HomeDashboard;
