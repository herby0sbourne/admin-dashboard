import React from 'react';

import Widget from './Widget';
import './widgets.scss';

const DATA = [
  {
    title: 'Users',
    isMoney: false,
    link: 'See all users',
  },
  {
    title: 'Orders',
    isMoney: false,
    link: 'View all orders',
  },
  {
    title: 'Earnings',
    isMoney: true,
    link: 'View net earnings',
  },
  {
    title: 'Balance',
    isMoney: true,
    link: 'See details',
  },
];

const Widgets = () => {
  return (
    <div className="widgets">
      {DATA.map((item) => {
        return <Widget key={item.title} {...item} />;
      })}
      {/* <Widget title="user" />
      <Widget title="order" />
      <Widget title="earnings" />
      <Widget title="balance" /> */}
    </div>
  );
};

export default Widgets;
