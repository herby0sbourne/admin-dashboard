import React from 'react';
import Chart from '../../components/chart/Chart';
import ListTable from '../../components/list-table/ListTable';

import './single.scss';

const Single = () => {
  return (
    <div className="single">
      <div className="single-container">
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="avatar"
                className="item-img"
              />
              <div className="details">
                <h1 className="username">Jane Doe</h1>
                <div className="details-info">
                  <span className="key">Email:</span>
                  <span className="value">Email</span>
                </div>
                <div className="details-info">
                  <span className="key">Phone:</span>
                  <span className="value">+1 456 4555</span>
                </div>
                <div className="details-info">
                  <span className="key">Address:</span>
                  <span className="value">Elton St. 243 Garden Yd. NewYork</span>
                </div>
                <div className="details-info">
                  <span className="key">Country</span>
                  <span className="value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Transaction (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
