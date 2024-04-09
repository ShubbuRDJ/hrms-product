import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './advance-table-custom.scss'
import { Button, Checkbox } from '@mui/material';


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
        { field: 'id', headerName: 'S No.', width: 100 },
        { field: 'eventName', headerName: 'Event Name', width: 200 },
        { field: 'date', headerName: 'Date', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    <Checkbox
                        checked={checked.includes(params.row.id)}
                        onChange={(event) => handleCheckboxChange(event, params.row.id)}
                        disabled={checked.length === 2 && !checked.includes(params.row.id)}
                    />
                    {checked.includes(params.row.id) ? 'Checked' : 'Check'}
                </div>
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color={params.row.status === 'Availed' ? 'success' : 'error'}
                    sx={{ textTransform: 'none' }}
                >
                    {params.row.status}
                </Button>
            ),
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection={false}
                disableColumnMenu
                disableColumnResize
                disableColumnSorting
                disableRowSelectionOnClick
                hideFooter
            />
        </div>
    );
}