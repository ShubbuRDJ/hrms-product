import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './advance-table-custom.scss';

export default function AdvanceTableCustom({ columns, rows, checkboxSelection, sortModel }) {

    const [customRows, setCustomRows] = React.useState(rows)

    const handleSortASC = (column) => {
        const tempRows = [...customRows];
        tempRows.sort((a, b) => {
            return a[column].localeCompare(b[column]);
        });
        setCustomRows([...tempRows])
    }

    const handleSortDESC = (column) => {
        const tempRows = [...customRows];
        tempRows.sort((a, b) => {
            return b[column].localeCompare(a[column]);
        });
        setCustomRows([...tempRows])
    }

    return (
        <div className='advance-table-container' style={{ width: '100% !important' }}>
            <DataGrid
                sx={{ width: '100%', margin: 0, padding: 0 }}
                rows={customRows}
                columns={columns?.map((column) => ({
                    ...column,
                    headerName: (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <p className='advance-table-column-header'>{column.headerName}</p>
                            {sortModel?.find((sort) => sort.field === column.field) &&
                                <CustomSortIcon column={column} sortModel={sortModel} handleSortASC={() => handleSortASC(column?.field)} handleSortDESC={() => handleSortDESC(column?.field)} />
                            }
                        </div>
                    ),
                }))}
                checkboxSelection={checkboxSelection}
                disableEval
                disableColumnMenu
                disableColumnResize
                disableColumnSorting
                disableRowSelectionOnClick
                hideFooter
                autoHeight
                disableColumnSelector
                disableColumnHeaderTooltip
            />
        </div>
    );
}

const CustomSortIcon = ({ column, handleSortASC, handleSortDESC, }) => {
    const handleAscClick = () => {
        const sortDirectionEle = document?.querySelectorAll('.advance-table-custom-sort-direction');
        sortDirectionEle?.forEach((ele) => {
            ele.style.fill = '#B6B7BC'
        })
        const eleAsc = document.getElementById(`advance-table-custom-asc-${column?.field}`)
        eleAsc.style.fill = '#000000';
        handleSortASC();
    }
    const handleDescClick = () => {
        const sortDirectionEle = document?.querySelectorAll('.advance-table-custom-sort-direction');
        sortDirectionEle?.forEach((ele) => {
            ele.style.fill = '#B6B7BC'
        })
        const eleAsc = document.getElementById(`advance-table-custom-desc-${column?.field}`)
        eleAsc.style.fill = '#000000';
        handleSortDESC();
    }

    return (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id={`advance-table-custom-desc-${column?.field}`} className='advance-table-custom-sort-direction' style={{ cursor: 'pointer' }} onClick={handleDescClick} clipRule="evenodd" d="M11.8232 7.79224C12.0729 8.14008 12.0561 8.68236 11.7855 9.00345L9.45222 11.7727C9.19684 12.0758 8.80322 12.0758 8.54784 11.7727L6.21449 9.00346C5.94394 8.68237 5.92706 8.14009 6.1768 7.79224C6.42653 7.4444 6.8483 7.4227 7.11885 7.74379L8.33336 9.18517L8.33336 0.857143C8.33336 0.383756 8.63184 -4.50477e-08 9.00003 -1.31133e-07C9.36821 -2.17218e-07 9.66669 0.383756 9.66669 0.857143L9.66669 9.18514L10.8811 7.7438C11.1517 7.42271 11.5735 7.44439 11.8232 7.79224Z" fill="#B6B7BC" />
        <path id={`advance-table-custom-asc-${column?.field}`} className='advance-table-custom-sort-direction' style={{ cursor: 'pointer' }} onClick={handleAscClick} clipRule="evenodd" d="M5.8232 4.20776C6.07293 3.85992 6.05607 3.31764 5.78552 2.99655L3.45222 0.227315C3.19684 -0.0757695 2.80322 -0.0757723 2.54784 0.227308L0.214486 2.99654C-0.0560626 3.31763 -0.0729355 3.85991 0.176798 4.20776C0.426532 4.5556 0.848304 4.5773 1.11885 4.25621L2.33336 2.81483L2.33336 11.1429C2.33336 11.6162 2.63184 12 3.00002 12C3.36821 12 3.66669 11.6162 3.66669 11.1429L3.66669 2.81486L4.88114 4.2562C5.15169 4.57729 5.57346 4.55561 5.8232 4.20776Z" fill="#B6B7BC" />
    </svg>)
};
