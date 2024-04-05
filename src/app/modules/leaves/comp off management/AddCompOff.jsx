import { Grid } from '@mui/material'
import './add-comp-off.scss';
import { useFormik } from 'formik';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';
import { useNavigate } from 'react-router-dom';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';

const initialValues = {
    emp: '',
    no_of_comp_off: '',
    validity: '',
    remarks: '',
}


const AddCompOff = ({ type }) => {
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

    return (
        <>
            <Grid className='comp-off-add-main-container'>

                <form className='comp-off-add-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='comp-off-add-top-btn-container'>
                        <h4>{(type === 'add') ? 'Add Comp Off' : 'Edit Comp Off'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type === 'add') ? 'Save' : 'Update'}</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='comp-off-add-form-container-wrapper'>
                        <Grid className='comp-off-add-form-container'>


                            <Grid className='comp-off-add-form-row'>

                                <Grid className="comp-off-add-form-field">
                                    <p>Select Employee</p>
                                    <DropownCustom
                                        label={'Select emp'}
                                        value={values.emp}
                                        handleBlur={handleBlur}
                                        name={'emp'}
                                        handleChange={handleChange}
                                    />
                                    {errors.emp && touched.emp ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.emp.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.emp}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="comp-off-add-form-field">
                                    <p>No of days to add</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="no_of_comp_off"
                                        id="add-comp-off-form-control-no_of_comp_off"
                                        placeholder="No of comp off"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.no_of_comp_off}
                                    />
                                    {errors.no_of_comp_off && touched.no_of_comp_off ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.no_of_comp_off.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.no_of_comp_off}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="comp-off-add-form-field">
                                    <p>Valid till</p>
                                    <DatePickerCustom
                                        placeholder={'Validity period'}
                                        value={values?.validity}
                                        name={'validity'}
                                        id={'add-comp-off-validity'}
                                        handleChange={setFieldValue}
                                    />
                                    {errors.validity && touched.validity ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.validity.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.validity}</p></Grid>
                                    ) : null}
                                </Grid>

                            </Grid>

                            <Grid className='comp-off-add-form-row'>
                                <Grid className="comp-off-add-form-field" style={{ width: 'calc((100% - 35px) / 2)' }}>
                                    <p>Remarks</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="remarks"
                                        id="add-comp-off-form-control-remarks"
                                        placeholder="Add Remarks.."
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.remarks}
                                    />
                                    {errors.remarks && touched.remarks ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.remarks.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.remarks}</p></Grid>
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

export default AddCompOff
