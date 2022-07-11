import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import './data-table.scss';
import { userColumns, userRows } from './tableData';

const DataTable = () => {
  const actionCell = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cell-action">
            <div className="view-button">View</div>
            <div className="delete-button">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-table">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionCell)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
