import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './advance-table-custom.scss'
import { Checkbox } from '@mui/material';


const rows = [
    { id: 1, eventName: 'Eid-ul-Fitar', date: '11th Apr, 2024', status: 'Availed' },
    { id: 2, eventName: 'Vaisakhi', date: '11th Apr, 2024', status: 'Unavailed' },
    { id: 3, eventName: 'Birthday', date: '11th Apr, 2024', status: 'Unavailed' },
    { id: 4, eventName: 'Work Anniversary', date: '11th Apr, 2024', status: 'Unavailed' },
];



export default function AdvanceTableCustom() {
    const [checked, setChecked] = React.useState([]);

    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            if (checked.length < 2) {
                setChecked([...checked, id]);
            }
        } else {
            setChecked(checked.filter((item) => item !== id));
        }
    };


    const columns = [
        {
            field: 'id',
            headerName: 'S No.',
            minWidth: 79
        },
        {
            field: 'eventName',
            headerName: 'Event Name',
            minWidth: 333,
            maxWidth:400
        },
        {
            field: 'date',
            headerName: 'Date',
            minWidth: 331
        },
        {
            field: 'actions',
            headerName: 'Actions',
            minWidth: 179,
            renderCell: (params) => (
                <div className='advance-table-action-checkbox'>
                    <Checkbox
                        disableRipple
                        checked={checked.includes(params.row.id)}
                        onChange={(event) => handleCheckboxChange(event, params.row.id)}
                        disabled={checked.length === 2 && !checked.includes(params.row.id)}
                        icon={<CheckboxIcon />}
                        checkedIcon={<CheckboxCheckedIcon />}
                    />
                    {checked.includes(params.row.id) ? 'Checked' : 'Check'}
                </div>
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 232,
            renderCell: (params) => (
                <button type='button' className={`advance-availed-btn ${params.row.status === 'Availed' ? 'success' : 'error'}`}>
                    {params.row.status}
                </button>
            ),
        },
    ];

    return (
        <div className='advance-table-container' style={{ width: '100% !important' }}>
            <DataGrid
                sx={{ width: '100%', margin: 0, padding: 0 }}
                rows={rows}
                disableEval
                columns={columns}
                pageSize={5}
                checkboxSelection={false}
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



const CheckboxIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="#B6B7BC" />
        </svg>
    )
}

const CheckboxCheckedIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.6 13.2L14.65 6.15L13.25 4.75L7.6 10.4L4.75 7.55L3.35 8.95L7.6 13.2ZM2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H2Z" fill="#007BFF" />
        </svg>
    )
}