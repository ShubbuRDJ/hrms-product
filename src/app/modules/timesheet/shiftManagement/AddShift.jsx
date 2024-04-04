import { Grid } from '@mui/material'
import './add-shift.scss';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import TimePickerCustom from '../../../components/time-picker/TimePickerCustom';

const initialValues = {
    shiftName: '',
    inTime: '',
    outTime: '',
}


const AddShift = ({ type }) => {
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
                        <h4>{(type === 'add') ? 'Add New Office Shift' : 'Edit Office Shift'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type === 'add') ? 'Save' : 'Update'}</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='new-attendance-add-form-container-wrapper'>
                        <Grid className='new-attendance-add-form-container'>

                            <Grid className='new-attendance-add-form-row'>

                                <Grid className="new-attendance-add-form-field">
                                    <p>Shift Name</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="shiftName"
                                        id="add-attendance-form-control-3-ShiftName"
                                        placeholder="Shift Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.shiftName}
                                    />
                                    {errors.shiftName && touched.shiftName ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.shiftName.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.shiftName}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="new-attendance-add-form-field">
                                    <p>In Time</p>
                                    <TimePickerCustom
                                        placeholder={'In Time'}
                                        name={'inTime'}
                                        id={'add-attendance-inTime'}
                                    />
                                </Grid>

                                <Grid className="new-attendance-add-form-field">
                                    <p>Out Time</p>
                                    <TimePickerCustom
                                        placeholder={'Out Time'}
                                        name={'outTime'}
                                        id={'add-attendance-outTime'}
                                    />
                                </Grid>

                            </Grid>


                        </Grid>
                    </Grid>
                </form>

            </Grid>
        </>
    )
}

export default AddShift
