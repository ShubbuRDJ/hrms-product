import { Checkbox, Collapse, FormControlLabel, Grid } from "@mui/material";
import './checkbox-dropdown.scss';
import { useEffect, useState } from "react";



const arr = ['Staff', 'Shubham', 'Ajay', 'Simran']

const CheckboxDropdown = ({ handleChange }) => {

    const [open, setOpen] = useState(false);
    const [parentChecked, setParentChecked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    };


    const childCheckboxUpdate = () => {
        const allCheckboxes = document.querySelectorAll('.child-checkbox');
        if (parentChecked) {
            allCheckboxes.forEach((checkbox) => {
                checkbox.click();
            });
        }
    }


    useEffect(() => {
        childCheckboxUpdate();
    // eslint-disable-next-line
    }, [open])


    const handleParentCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setParentChecked(isChecked);
    };


    return (
        <>
            <Grid className="checkbox-dropdown-container-wrapper">
                <Grid className="checkbox-dropdown-container">
                    <FormControlLabel
                        value="Insurance"
                        control={<Checkbox name="Insurance" onChange={handleParentCheckboxChange} className="dropdown-parent-checkbox" icon={<AddEmployeeCheckbox />} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                        label="Insurance"
                        labelPlacement="end"
                    />
                    <Grid className="checkbox-dropdown-icon" onClick={(e) => handleClick(e)}>
                        <svg style={{ cursor: 'pointer' }} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 0.75L6 5.25L1.5 0.75" stroke="#919499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Grid>
                </Grid>


                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid className='sub-checkbox-dropdown-container'>
                        {
                            arr?.map((item, index) => (
                                <FormControlLabel
                                    value={item}
                                    key={index}
                                    control={<Checkbox className="child-checkbox" onChange={handleChange} name={item} icon={<AddEmployeeCheckbox />} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                    label={item}
                                    labelPlacement="end"
                                />
                            ))
                        }
                    </Grid>
                </Collapse>
            </Grid>
        </>
    )
}

export default CheckboxDropdown



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
