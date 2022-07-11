import React from 'react';
import DataTable from '../../components/data-table/DataTable';
import './list.scss';

const List = () => {
  return (
    <div className="list-table">
      <div className="list-container">
        <DataTable />
      </div>
    </div>
  );
};

export default List;
