import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import './add-dsr.scss';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';
import TimePickerCustom from '../../../components/time-picker/TimePickerCustom';
import { useState } from 'react';
import moduleConstants from '../../../../constants/moduleConstants';

const initialValues = {
    date: '',
    projectName: '',
    estHours: '',
    dsr: '',
}


const AddDsr = ({ type }) => {
    const navigate = useNavigate();
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const { values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched } =
        useFormik({
            initialValues,
            // validationSchema: profileQualificationSchema,
            onSubmit: (values, action) => {
                handleSave(values);
            },
        });

    const handleSave = async (credentials) => {
        console.log(credentials, 'jhsbdwuyduweydweu');
    }

    return (
        <>
            <Grid className='add-dsr-main-container'>

                <form className='add-dsr-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='add-dsr-top-btn-container'>
                        <h4>Create New DSR</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">Save</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='add-dsr-form-container-wrapper'>
                        <Grid className='add-dsr-form-container'>

                            <Grid className='add-dsr-form-row'>
                                <Grid className="add-dsr-form-field">
                                    <p>Project Name</p>
                                    <DropownCustom
                                        label={'Select Project Name'}
                                        value={values.projectName}
                                        handleBlur={handleBlur}
                                        name={'projectName'}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid className="add-dsr-form-field">
                                    <p>Date</p>
                                    <DatePickerCustom
                                        placeholder={'Select Date'}
                                        value={values?.date}
                                        name={'date'}
                                        id={'add-dsr-date'}
                                        handleChange={setFieldValue}
                                    />
                                </Grid>

                                <Grid className="add-dsr-form-field">
                                    <p>Estimated Hour</p>
                                    <TimePickerCustom
                                        placeholder={'Select Hours'}
                                        name={'estHours'}
                                        id={'add-attendance-estHours'}
                                    />
                                </Grid>

                                <Grid className="add-dsr-form-field add-dsr-checkbox-field">
                                    <p>No Work Done</p>
                                    <FormControlLabel
                                        value="noWorkDone"
                                        control={<Checkbox checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e?.target?.checked)} disableRipple name='noWorkDone' icon={<AddEmployeeCheckbox />} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                        labelPlacement="end"
                                    />
                                </Grid>

                                <Grid className="add-dsr-form-field add-dsr-form-field-textarea">
                                    <p>Enter Your Report</p>
                                    <textarea id="add-dsr-leave_reason" name="dsr" rows="4" cols="50"
                                        placeholder='Enter Report'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={checkboxChecked?moduleConstants?.NO_WORK_DONE:values?.dsr}
                                    >
                                    </textarea>
                                    {errors.dsr && touched.dsr ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.dsr.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.dsr}</p></Grid>
                                    ) : null}
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </form>

            </Grid>
        </>
    )
}

export default AddDsr













const AddEmployeeCheckbox = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" />
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E9CFFF" />
        </svg>
    )
}
const AddEmployeeCheckboxChecked = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1768_69713)">
                <rect width="32" height="32" rx="8" fill="white" />
                <path d="M13.5111 23.4667L26.0444 10.9333L23.5556 8.44444L13.5111 18.4889L8.44444 13.4222L5.95555 15.9111L13.5111 23.4667ZM3.55556 32C2.57778 32 1.74104 31.6521 1.04533 30.9564C0.34963 30.2607 0.00118519 29.4234 0 28.4444V3.55556C0 2.57778 0.348444 1.74104 1.04533 1.04533C1.74222 0.34963 2.57896 0.00118519 3.55556 0H28.4444C29.4222 0 30.2596 0.348444 30.9564 1.04533C31.6533 1.74222 32.0012 2.57896 32 3.55556V28.4444C32 29.4222 31.6521 30.2596 30.9564 30.9564C30.2607 31.6533 29.4234 32.0012 28.4444 32H3.55556Z" fill="#007BFF" />
            </g>
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E9CFFF" />
            <defs>
                <clipPath id="clip0_1768_69713">
                    <rect width="32" height="32" rx="8" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
