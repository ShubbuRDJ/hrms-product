import { Grid } from '@mui/material'
import './add-attendance.scss';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import TimePickerCustom from '../../../components/time-picker/TimePickerCustom';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';

const initialValues = {
    date: '',
    employee: '',
    punchInTime: '',
    punchOutTime: '',
    modeOfWork: '',
}


const AddAttendance = ({ type }) => {
    const navigate = useNavigate();

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
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
            <Grid className='new-attendance-add-main-container'>

                <form className='new-attendance-add-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='new-attendance-add-top-btn-container'>
                        <h4>{(type === 'add') ? 'Add New Attendance' : 'Edit Attendance'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type === 'add') ? 'Save' : 'Update'}</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='new-attendance-add-form-container-wrapper'>
                        <Grid className='new-attendance-add-form-container'>

                            <Grid className='new-attendance-add-form-row'>

                                <Grid className="new-attendance-add-form-field">
                                    <p>Date</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="date"
                                        id="add-attendance-form-control-3-date"
                                        placeholder="Date"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.date}
                                    />
                                    {errors.date && touched.date ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.date.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.date}</p></Grid>
                                    ) : null}
                                </Grid>


                                <Grid className="new-attendance-add-form-field">
                                    <p>Employee</p>
                                    <DropownCustom
                                        label={'Employee'}
                                        value={values.employee}
                                        handleBlur={handleBlur}
                                        name={'employee'}
                                        handleChange={handleChange}
                                    />
                                    {errors.employee && touched.employee ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.employee.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.employee}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="new-attendance-add-form-field">
                                    <p>Punch In Time</p>
                                    <TimePickerCustom
                                        placeholder={'Punch In Time'}
                                        name={'punchInTime'}
                                        id={'add-attendance-punchInTime'}
                                    />
                                </Grid>

                                <Grid className="new-attendance-add-form-field">
                                    <p>Punch Out Time</p>
                                    <TimePickerCustom
                                        placeholder={'Punch Out Time'}
                                        name={'punchOutTime'}
                                        id={'add-attendance-punchInTime'}
                                    />
                                </Grid>

                                <Grid className="new-attendance-add-form-field">
                                    <p>Mode Of Work</p>
                                    <DropownCustom
                                        label={'Mode Of Work'}
                                        value={values.modeOfWork}
                                        handleBlur={handleBlur}
                                        name={'modeOfWork'}
                                        handleChange={handleChange}
                                    />
                                    {errors.modeOfWork && touched.modeOfWork ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.modeOfWork.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.modeOfWork}</p></Grid>
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

export default AddAttendance
