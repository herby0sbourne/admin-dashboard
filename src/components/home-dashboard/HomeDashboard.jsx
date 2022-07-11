import React from 'react';
import Chart from '../chart/Chart';
import ListTable from '../list-table/ListTable';
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
        <ListTable />
      </div>
    </>
  );
};

export default HomeDashboard;
