import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import './data-table.scss';
import { userColumns, userRows } from './tableData';

const DataTable = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionCell = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={'/users/test'}>
              <div className="view-button">View</div>
            </Link>
            <div className="delete-button" onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data-table">
      <div className="data-title">
        Add New User
        <Link to={`${pathname}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={data}
        columns={userColumns.concat(actionCell)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
