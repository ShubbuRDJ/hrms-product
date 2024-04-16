import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './advance-table-custom.scss'

export default function AdvanceTableCustom({ columns, rows, checkboxSelection, disableColumnSorting }) {

    return (
        <div className='advance-table-container' style={{ width: '100% !important' }}>
            <DataGrid
                sx={{ width: '100%', margin: 0, padding: 0 }}
                rows={rows}
                disableEval
                columns={columns}
                checkboxSelection={checkboxSelection}
                disableColumnMenu
                disableColumnResize
                disableColumnSorting={disableColumnSorting}
                disableRowSelectionOnClick
                hideFooter
                autoHeight
                disableColumnSelector
                disableColumnHeaderTooltip
            />
        </div>
    );
}