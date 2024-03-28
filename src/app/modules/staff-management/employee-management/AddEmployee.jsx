import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import './add-employee.scss';
import { useFormik } from 'formik';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';


const initialValues = {
    location: ''
}


const AddEmployee = () => {



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
            <Grid className='employee-add-main-container'>

                <form className='employee-add-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='employee-add-top-btn-container'>
                        <h4>Add New Employee</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="button">Close</button>
                            <button type="submit">Save</button>
                        </Grid>

                    </Grid>

                    <Grid className='employee-add-form-container-wrapper'>
                        <Grid className='employee-add-form-container'>


                            <Grid className='employee-add-form-row'>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>



                            </Grid>

                            <Grid className='employee-add-form-row'>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="specialization"
                                        id="qualification-form-control-3"
                                        placeholder="Specialization"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.specialization}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>



                            </Grid>


                            <Grid className='employee-add-form-row'>

                                <Grid className="employee-add-form-field">
                                    <p>Select Location</p>
                                    <DropownCustom
                                        label={'Select location'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>


                                <Grid className="employee-add-form-field employee-add-form-field-checkbox ">
                                    <p>Weekly Day Off(s)</p>
                                    <Grid className='employee-add-form-checkbox'>
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                            label="Sunday"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                            label="Monday"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                            label="Tuesday"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                            label="Wednesday"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                            label="Thursday"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                            label="Friday"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            value="top"
                                            control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                            label="Saturday"
                                            labelPlacement="top"
                                        />
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

export default AddEmployee




const AddEmployeeCheckbox = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#CF97FF" />
        </svg>
    )
}
