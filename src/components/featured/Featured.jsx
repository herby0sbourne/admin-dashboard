import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './featured.scss';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  const valuePercentage = 70;
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar
            value={valuePercentage}
            text={`${valuePercentage}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payment may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="title">Target</div>
            <div className="result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Last week</div>
            <div className="result positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Last Month</div>
            <div className="result positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
