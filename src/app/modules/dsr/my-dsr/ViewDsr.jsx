import { Grid } from '@mui/material'
import './view-dsr.scss'
import ViewDSRTable from '../../../components/tableCustom/ViewDSRTable';
// import { useNavigate } from 'react-router-dom'


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Project Name', minWidth: 150 },
    { id: 'column3', label: 'DSR Explanations', minWidth: 350 },
    { id: 'column3', label: 'PM Approval', minWidth: 150 },
    { id: 'column3', label: 'RM Approval', minWidth: 150 },
    { id: 'column3', label: 'Logged Hrs', minWidth: 150 },
];

const dataKey = ['serialNum', 'prj_name', 'dsr', 'pm_status', 'rm_status', 'logged_hrs',];

const actionKey = [
    {
        actionName: 'view',
        navigateAddress: '/view-dsr/view-wfh-details'
    },
    {
        actionName: 'chat',
    },
    {
        actionName: 'delete',
    },
]


const dummyData = [
    {
        prj_name: {
            name: 'Title Watch',
            date: '12/11/2025'
        },
        dsr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montecetur ridiculus mus. Donec quam felis, ultes nec, pellentesque eu, pretium quis, sem. Nullasequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
        pm_status: false,
        rm_status: true,
        logged_hrs: '07:51',
    },
    {
        prj_name: {
            name: 'Title Watch',
            date: '12/11/2025'
        },
        dsr: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montecetur ridiculus mus. Donec quam felis, ultes nec, pellentesque eu, pretium quis, sem. Nullasequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montecetur ridiculus mus. Donec quam felis, ultes nec, pellentesque eu, pretium quis, sem. Nullasequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
        pm_status: true,
        rm_status: false,
        logged_hrs: '07:51',
    },
]

const ViewDsr = () => {
    // const navigate = useNavigate();

    return (
        <>
            <Grid className='view-dsr-main-container'>

                <Grid className='view-dsr-list-main-container'>

                    <Grid className='list-heading-export-btn-container'>
                        <h4>DSR Details</h4>
                        <button type="button">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1019 4.11391L7.44021 1.83272C7.31594 1.72378 7.15906 1.66805 7.00136 1.66797C6.89345 1.66791 6.78515 1.69391 6.68666 1.74675C6.64276 1.77023 6.60106 1.79892 6.5625 1.83272L3.90081 4.11391C3.62125 4.35351 3.58885 4.77437 3.82845 5.05394C4.06805 5.3335 4.48892 5.3659 4.76848 5.1263L6.33464 3.78402V8.94712C6.33464 9.31531 6.63312 9.61378 7.00131 9.61378C7.3695 9.61378 7.66798 9.31531 7.66798 8.94712L7.66798 3.78395L9.23423 5.1263C9.51379 5.3659 9.93466 5.3335 10.1743 5.05394C10.4139 4.77437 10.3815 4.35351 10.1019 4.11391ZM3.0013 8.33464C3.0013 7.96645 3.29978 7.66797 3.66797 7.66797H4.66797C5.03616 7.66797 5.33464 7.36949 5.33464 7.0013C5.33464 6.63311 5.03616 6.33464 4.66797 6.33464H3.66797C2.5634 6.33464 1.66797 7.23007 1.66797 8.33464V10.3346C1.66797 11.4392 2.5634 12.3346 3.66797 12.3346H10.3346C11.4392 12.3346 12.3346 11.4392 12.3346 10.3346V8.33464C12.3346 7.23007 11.4392 6.33464 10.3346 6.33464H9.33464C8.96645 6.33464 8.66797 6.63311 8.66797 7.0013C8.66797 7.36949 8.96645 7.66797 9.33464 7.66797H10.3346C10.7028 7.66797 11.0013 7.96645 11.0013 8.33464V10.3346C11.0013 10.7028 10.7028 11.0013 10.3346 11.0013H3.66797C3.29978 11.0013 3.0013 10.7028 3.0013 10.3346V8.33464Z" fill="#0F3659" />
                            </svg>
                            <span>Export</span>
                        </button>
                    </Grid>
                    <Grid className='view-dsr-empName-date'>
                        <p>EMP Name&nbsp;<span>:&nbsp;Prabhash Mishra</span></p>
                        <button type="button">27/March/2024</button>
                    </Grid>

                    <Grid className='view-dsr-table-container'>
                        <ViewDSRTable
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            actionKey={actionKey}
                            align="center"
                            tableContainerMaxHeight={480}
                        />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default ViewDsr
