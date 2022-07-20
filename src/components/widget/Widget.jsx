import React, { useEffect, useState } from 'react';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const Widget = ({ title, isMoney, link }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, 'users'),
        where('createdAt', '<=', today),
        where('createdAt', '>', lastMonth)
      );

      const prevMonthQuery = query(
        collection(db, 'users'),
        where('createdAt', '<=', lastMonth),
        where('createdAt', '>', prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);
      setAmount(lastMonthData.docs.length);

      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };
    fetchData();
  }, []);
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {isMoney && '$'}
          {amount}
        </span>
        <span className="link">{link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff < 0 ? 'negative' : 'positive'}`}>
          {/* {diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />} */}
          <KeyboardArrowUpIcon />
          {diff === Infinity ? 0 : diff}%
        </div>
        {title === 'User' ? (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ) : title === 'Orders' ? (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ) : title === 'Earnings' ? (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ) : (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Widget;
