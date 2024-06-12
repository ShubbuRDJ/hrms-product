import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import './add-new-role.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckboxDropdown from '../../../components/checkbox-dropdown/CheckboxDropdown';


const staffManagementArray = [
    {
        name: 'EmployeeManagement',
        value: 'EmployeeManagement',
        label: 'Employee Management'
    },
    {
        name: 'RoleManagement',
        value: 'RoleManagement',
        label: 'Role Management'
    },
]

const organizationArray = [
    {
        name: 'CompanyPolicy',
        value: 'CompanyPolicy',
        label: 'Company Policy'
    },
    {
        name: 'Department',
        value: 'Department',
        label: 'Department'
    },
    {
        name: 'Designation',
        value: 'Designation',
        label: 'Designation'
    },
    {
        name: 'Location',
        value: 'Location',
        label: 'Location'
    },
]

const timesheetArray = [
    {
        name: 'MyAttendance',
        value: 'MyAttendance',
        label: 'My Attendance'
    },
    {
        name: 'AttendanceManagement',
        value: 'AttendanceManagement',
        label: 'Attendance Management'
    },
    {
        name: 'ShiftManagement',
        value: 'ShiftManagement',
        label: 'Shift Management'
    },
    {
        name: 'HolidayManagement',
        value: 'HolidayManagement',
        label: 'Holiday Management'
    },
]

const projectManagementArray = [
    {
        name: 'AddProject',
        value: 'AddProject',
        label: 'Add Project'
    },
    {
        name: 'AllProjects',
        value: 'AllProjects',
        label: 'All Projects'
    },
    {
        name: 'ProjectTagsLiveLinks',
        value: 'ProjectTagsLiveLinks',
        label: 'Project Tags/Live Links'
    },
    {
        name: 'ResourceAllocation',
        value: 'ResourceAllocation',
        label: 'Resource Allocation'
    },
    {
        name: 'Clients',
        value: 'Clients',
        label: 'Clients'
    },
]

const HR_ReportsArray = [
    {
        name: 'AttendanceReport',
        value: 'AttendanceReport',
        label: 'Attendance Report'
    },
    {
        name: 'ProjectReport',
        value: 'ProjectReport',
        label: 'Project Report'
    },
]

const LeavesArray = [
    {
        name: 'MyLeaves',
        value: 'MyLeaves',
        label: 'My Leaves'
    },
    {
        name: 'RestrictedLeaves',
        value: 'RestrictedLeaves',
        label: 'Restricted Leaves'
    },
    {
        name: 'LeavesToApprove',
        value: 'LeavesToApprove',
        label: 'Leaves to Approve'
    },
    {
        name: 'LeavesToAcknowledge',
        value: 'LeavesToAcknowledge',
        label: 'Leaves to Acknowledge'
    },
    {
        name: 'CompOffManagement',
        value: 'CompOffManagement',
        label: 'Comp Off Management'
    },
]

const DSRArray = [
    {
        name: 'MyDSR',
        value: 'MyDSR',
        label: 'My DSR'
    },
    {
        name: 'EmployeeDSR',
        value: 'EmployeeDSR',
        label: 'Employee DSR'
    },
    {
        name: 'NonSubmittedDSR',
        value: 'NonSubmittedDSR',
        label: 'Non Submitted DSR'
    },
]

const WFHArray = [
    {
        name: 'MyWFH',
        value: 'MyWFH',
        label: 'My WFH'
    },
    {
        name: 'WFHToApprove',
        value: 'WFHToApprove',
        label: 'WFH to Approve'
    },
    {
        name: 'WFHToAcknowledge',
        value: 'WFHToAcknowledge',
        label: 'WFH to Acknowledge'
    },
]


const AddNewRole = ({type}) => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState([]);
    const [allChecked, setAllChecked] = useState(false);
    const handleSave = async () => {
        console.log('add new role')
    }



    const handleCheckAll = () => {
        const allCheckboxes = document.querySelectorAll('.MuiCheckbox-root');
        allCheckboxes.forEach((checkbox) => {
            checkbox.click();
        });
        setAllChecked(!allChecked)
    };

    const handleCheckboxChange = (event) => {
        setChecked((prev) => {
            return [...prev, { [event.target.name]: event.target.checked }]
        })
    };



    useEffect(() => {
        if (!allChecked) {
            setChecked([]);
        }
    }, [allChecked])
    console.log(checked, 'cvjdjcewbdwed')


    return (
        <>
            <Grid className='add-new-role-main-container'>

                <form className='add-new-role-main-wrapper' onSubmit={handleSave}>
                    <Grid className='add-new-role-top-btn-container'>
                        <h4>{(type==='add')?'Add New Role':'Edit Role'}</h4>
                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type==='add')?'Save':'Update'}</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>
                    </Grid>

                    <Grid className='add-new-role-save-cancel-wrapper'>
                        <Grid className='add-new-role-save-cancel'>
                            <Grid className='add-new-role-save-cancel-row'>
                                <Grid className="employee-add-form-field">
                                    <p>Role Name</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="specialization"
                                        id="qualification-form-control-3"
                                        placeholder="Role Name"
                                    />
                                </Grid>
                            </Grid>

                            <Grid className='add-new-role-top-btn-container' style={{ backgroundColor: 'unset', padding: 'unset', border: 'unset',height:'unset',marginTop:'20px' }}>
                                <h4 className='add-new-role-select-resource-text'>Select Resources</h4>
                                <Grid className='add-new-employee-btns'>
                                    <button className='add-role-select-all-btn' type="button" style={{ backgroundColor: `${allChecked ? '#FFFFFF' : '#007bff'}`, color: `${!allChecked ? '#FFFFFF' : '#007bff'}`, border: `${allChecked ? '1px solid #007BFF' : 'none'}` }} onClick={handleCheckAll}>
                                        {
                                            allChecked ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.75556 11.7333L13.0222 5.46667L11.7778 4.22222L6.75556 9.24444L4.22222 6.71111L2.97778 7.95556L6.75556 11.7333ZM1.77778 16C1.28889 16 0.870519 15.8261 0.522667 15.4782C0.174815 15.1304 0.000592593 14.7117 0 14.2222V1.77778C0 1.28889 0.174222 0.870519 0.522667 0.522667C0.871111 0.174815 1.28948 0.000592593 1.77778 0H14.2222C14.7111 0 15.1298 0.174222 15.4782 0.522667C15.8267 0.871111 16.0006 1.28948 16 1.77778V14.2222C16 14.7111 15.8261 15.1298 15.4782 15.4782C15.1304 15.8267 14.7117 16.0006 14.2222 16H1.77778Z" fill="#3854E0" />
                                            </svg> :
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.75556 11.7333L13.0222 5.46667L11.7778 4.22222L6.75556 9.24444L4.22222 6.71111L2.97778 7.95556L6.75556 11.7333ZM1.77778 16C1.28889 16 0.870519 15.8261 0.522667 15.4782C0.174815 15.1304 0.000592593 14.7117 0 14.2222V1.77778C0 1.28889 0.174222 0.870519 0.522667 0.522667C0.871111 0.174815 1.28948 0.000592593 1.77778 0H14.2222C14.7111 0 15.1298 0.174222 15.4782 0.522667C15.8267 0.871111 16.0006 1.28948 16 1.77778V14.2222C16 14.7111 15.8261 15.1298 15.4782 15.4782C15.1304 15.8267 14.7117 16.0006 14.2222 16H1.77778Z" fill="white" />
                                                </svg>
                                        }
                                        <span>{allChecked?'Unselect All':'Select All'}</span>
                                    </button>
                                </Grid>
                            </Grid>


                            <Grid className='add-new-role-checkbox-container-wrapper'>
                                <Grid className='add-new-role-checkbox-container'>

                                    <Grid className='add-new-role-checkbox'>
                                        <FormControlLabel
                                            value="Dashboard"
                                            control={<Checkbox name='dashboard' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                            label='Dashboard'
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="MyProfile"
                                            control={<Checkbox name='MyProfile' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                            label='My Profile'
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="EmployeeDirectory"
                                            control={<Checkbox name='EmployeeDirectory' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                            label='Employee Directory'
                                            labelPlacement="end"
                                        />
                                        <CheckboxDropdown name={'StaffManagement'} label={'Staff Management'} value={'StaffManagement'} subCheckboxArray={staffManagementArray} handleChange={handleCheckboxChange} />

                                        <CheckboxDropdown name={'Organization'} label={'Organization'} value={'Organization'} subCheckboxArray={organizationArray} handleChange={handleCheckboxChange} />

                                        <CheckboxDropdown name={'Timesheet'} label={'Timesheet'} value={'Timesheet'} subCheckboxArray={timesheetArray} handleChange={handleCheckboxChange} />

                                    </Grid>

                                    <Grid className='add-new-role-checkbox'>
                                        <CheckboxDropdown name={'ProjectManagement'} label={'Project Management'} value={'ProjectManagement'} subCheckboxArray={projectManagementArray} handleChange={handleCheckboxChange} />

                                        <FormControlLabel
                                            value="HRCalendar"
                                            control={<Checkbox name='HRCalendar' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                            label='HR Calendar'
                                            labelPlacement="end"
                                        />

                                        <CheckboxDropdown name={'HRReports'} label={'HR Reports'} value={'HRReports'} subCheckboxArray={HR_ReportsArray} handleChange={handleCheckboxChange} />

                                        <CheckboxDropdown name={'Leaves'} label={'Leaves'} value={'Leaves'} subCheckboxArray={LeavesArray} handleChange={handleCheckboxChange} />

                                        <CheckboxDropdown name={'DSR'} label={'DSR'} value={'DSR'} subCheckboxArray={DSRArray} handleChange={handleCheckboxChange} />

                                        <CheckboxDropdown name={'WFH'} label={'Work from Home'} value={'WFH'} subCheckboxArray={WFHArray} handleChange={handleCheckboxChange} />


                                    </Grid>

                                </Grid>
                            </Grid>



                        </Grid>
                    </Grid>
                </form>

            </Grid>
        </>
    )
}

export default AddNewRole







const AddEmployeeCheckbox = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#B6B7BC" />
        </svg>
    )
}
const AddEmployeeCheckboxChecked = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75556 11.7333L13.0222 5.46667L11.7778 4.22222L6.75556 9.24444L4.22222 6.71111L2.97778 7.95556L6.75556 11.7333ZM1.77778 16C1.28889 16 0.870519 15.8261 0.522667 15.4782C0.174815 15.1304 0.000592593 14.7117 0 14.2222V1.77778C0 1.28889 0.174222 0.870519 0.522667 0.522667C0.871111 0.174815 1.28948 0.000592593 1.77778 0H14.2222C14.7111 0 15.1298 0.174222 15.4782 0.522667C15.8267 0.871111 16.0006 1.28948 16 1.77778V14.2222C16 14.7111 15.8261 15.1298 15.4782 15.4782C15.1304 15.8267 14.7117 16.0006 14.2222 16H1.77778Z" fill="#3854E0" />
        </svg>
    )
}
