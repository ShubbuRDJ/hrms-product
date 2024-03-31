import './basic-detail-employee.scss'
import DropownCustom from '../../../../components/Dropdown-custom/DropdownCustom'
import { useFormik } from 'formik';
import DatePickerCustom from '../../../../components/date_picker/DatePickerCustom';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';

const initialValues = {

}

const BasicDetailsEmp = () => {
    

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
            <Grid className='employee-edit-basic-detail-form-container-wrapper'>
                <form onSubmit={handleSubmit} className='employee-edit-basic-detail-container'>


                    <Grid className='employee-edit-basic-detail-row'>
                        <Grid className="employee-edit-basic-detail-field">
                            <p>First Name</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Last Name</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Employment Type</p>
                            <DropownCustom
                                label={'Employment Type'}
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

                    <Grid className='employee-edit-basic-detail-row'>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Employee ID</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="ID"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Username</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="User Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Email</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                    </Grid>

                    <Grid className='employee-edit-basic-detail-row'>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Date of Birth</p>
                            <DatePickerCustom
                                placeholder={'Date of birth'}
                                value={values.dob}
                                handleChange={setFieldValue}
                                name={'dob'}
                                id={'profile-basic-detail-dob'}
                            />
                            {errors?.dob && touched?.dob ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors?.dob?.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors?.dob}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Gender</p>
                            <DropownCustom
                                label={'Gender'}
                                value={values.expenseType}
                                handleBlur={handleBlur}
                                name={'location'}
                                handleChange={handleChange}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Date of Joining</p>
                            <DatePickerCustom
                                placeholder={'Date of Joining'}
                                value={values.dob}
                                handleChange={setFieldValue}
                                name={'dob'}
                                id={'add-employee-detail-doj'}
                            />
                            {errors?.dob && touched?.dob ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors?.dob?.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors?.dob}</p></Grid>
                            ) : null}
                        </Grid>

                    </Grid>

                    <Grid className='employee-edit-basic-detail-row'>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Department</p>
                            <DropownCustom
                                label={'Department'}
                                value={values.expenseType}
                                handleBlur={handleBlur}
                                name={'department'}
                                handleChange={handleChange}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Designation</p>
                            <DropownCustom
                                label={'Designation'}
                                value={values.expenseType}
                                handleBlur={handleBlur}
                                name={'location'}
                                handleChange={handleChange}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Role</p>
                            <DropownCustom
                                label={'Role'}
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

                    <Grid className='employee-edit-basic-detail-row'>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Experience (Years)</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Exp (Year)"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Experience (Months)</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Exp (Month)"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Relevant Experience (Years)</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Relevant Exp (Year)"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                    </Grid>

                    <Grid className='employee-edit-basic-detail-row'>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Relevant Experience (Months)</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Relevant Exp (Month)"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
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

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Date of Leaving</p>
                            <DatePickerCustom
                                placeholder={'DOL'}
                                value={values.dob}
                                handleChange={setFieldValue}
                                name={'dob'}
                                id={'add-employee-detail-doj'}
                            />
                            {errors?.dob && touched?.dob ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors?.dob?.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors?.dob}</p></Grid>
                            ) : null}
                        </Grid>


                    </Grid>




                    <Grid className='employee-edit-basic-detail-row'>

                        <Grid className="employee-edit-basic-detail-field" style={{ width: '65.69%' }}>
                            <p>Address</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>

                        <Grid className="employee-edit-basic-detail-field">
                            <p>Employee Shift</p>
                            <input
                                type='text'
                                className='add-employee-form-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Employee Shift~"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.specialization}
                            />
                            {errors.location && touched.location ? (
                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                            ) : null}
                        </Grid>


                    </Grid>


                    <Grid className='employee-edit-basic-detail-row'>
                        <Grid className="employee-edit-basic-detail-field employee-edit-basic-detail-field-checkbox ">
                            <p>Weekly Day Off(s)</p>
                            <Grid className='employee-edit-basic-detail-checkbox'>
                                <FormControlLabel
                                    value="Sunday"
                                    control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                    label="Sunday"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="Monday"
                                    control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                    label="Monday"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="Tuesday"
                                    control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                    label="Tuesday"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="Wednesday"
                                    control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                    label="Wednesday"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="Thursday"
                                    control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                    label="Thursday"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="Friday"
                                    control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                    label="Friday"
                                    labelPlacement="top"
                                />
                                <FormControlLabel
                                    value="Saturday"
                                    control={<Checkbox icon={<AddEmployeeCheckbox />} />}
                                    label="Saturday"
                                    labelPlacement="top"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <button className='edit-employee-save-btn' type="submit">Save</button>



                </form>
            </Grid>
        </>
    )
}

export default BasicDetailsEmp





const AddEmployeeCheckbox = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#CF97FF" />
        </svg>
    )
}
