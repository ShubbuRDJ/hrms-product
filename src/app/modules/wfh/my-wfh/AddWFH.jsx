import {Grid} from '@mui/material'
import './add-wfh.scss';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';
import FileUpload from '../../../components/file-upload/FileUpload';

const initialValues = {
    date: '',
    employee: '',
    punchInTime: '',
    punchOutTime: '',
    modeOfWork: '',
    leave_reason: '',
    subject: '',
}


const AddWFH = ({ type }) => {
    const navigate = useNavigate();

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

    const handleFileChange = () => {
        console.log('vjdsbdshsffew');
    }

    return (
        <>
            <Grid className='add-wfh-main-container'>

                <form className='add-wfh-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='add-wfh-top-btn-container'>
                        <h4>Add Work From Home</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">Save</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='add-wfh-form-container-wrapper'>
                        <Grid className='add-wfh-form-container'>

                            <Grid className='add-wfh-form-row'>
                                <Grid className="add-wfh-form-field">
                                    <p>Start Date</p>
                                    <DatePickerCustom
                                        placeholder={'Select to date'}
                                        value={values?.date}
                                        name={'startDate'}
                                        id={'add-wfh-start-date'}
                                        handleChange={setFieldValue}
                                    />
                                </Grid>
                                <Grid className="add-wfh-form-field">
                                    <p>End Date</p>
                                    <DatePickerCustom
                                        placeholder={'Select to date'}
                                        value={values?.date}
                                        name={'endDate'}
                                        id={'add-wfh-end-date'}
                                        handleChange={setFieldValue}
                                    />
                                </Grid>

                                <Grid className="add-wfh-form-field add-wfh-form-field-second">
                                    <p>Upload Document</p>
                                    <FileUpload
                                        handleChange={handleFileChange}
                                        id={'add-wfh-file-upload'}
                                    />
                                </Grid>

                                <Grid className="add-wfh-form-field add-wfh-form-field-textarea">
                                    <p>Reason</p>
                                    <textarea id="add-wfh-leave_reason" name="leave_reason" rows="4" cols="50"
                                        placeholder='Reason'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.leave_reason}
                                    >
                                    </textarea>
                                    {errors.leave_reason && touched.leave_reason ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.leave_reason.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.leave_reason}</p></Grid>
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

export default AddWFH
