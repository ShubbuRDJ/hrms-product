import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import './add-new-role.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckboxDropdown from '../../../components/checkbox-dropdown/CheckboxDropdown';


const AddNewRole = () => {
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
                        <h4>Add New Role</h4>
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

                                <Grid className="employee-add-form-field">
                                    <p style={{ visibility: 'hidden' }}>save</p>
                                    <Grid className='add-new-employee-btns'>
                                        <button type="submit">Save</button>
                                        <button onClick={() => navigate(-1)} type="button">Cancel</button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className='add-new-role-top-btn-container' style={{ border: 'none', marginTop: '-15px' }}>
                        <h4>Select Access</h4>
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
                                <span>Select All</span>
                            </button>
                        </Grid>
                    </Grid>
                    <Grid className='add-new-role-checkbox-container-wrapper'>
                        <Grid className='add-new-role-checkbox-container'>

                            <Grid className='add-new-role-checkbox'>

                                <h4>Resources</h4>

                                <FormControlLabel
                                    value="Organization"
                                    control={<Checkbox name='organization' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                    label='Organization'
                                    labelPlacement="end"
                                    disableRipple={true}
                                />
                                <FormControlLabel
                                    value="Staff"
                                    control={<Checkbox name='staff' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                    label='Staff'
                                    labelPlacement="end"
                                />
                                <CheckboxDropdown handleChange={handleCheckboxChange} />
                                <FormControlLabel
                                    value="Core HR"
                                    control={<Checkbox name='CoreHR' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                    label='Core HR'
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Insurance"
                                    control={<Checkbox name='Insurance' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                    label='Insurance'
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Performance"
                                    control={<Checkbox name='Performance' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                    label='Performance'
                                    labelPlacement="end"
                                />
                                {/* <CheckboxDropdown />
                                <CheckboxDropdown />
                                <CheckboxDropdown />
                                <CheckboxDropdown /> */}
                                <FormControlLabel
                                    value="SDE"
                                    control={<Checkbox name='SDE' icon={<AddEmployeeCheckbox />} onChange={handleCheckboxChange} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                    label='SDE'
                                    labelPlacement="end"
                                />
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
