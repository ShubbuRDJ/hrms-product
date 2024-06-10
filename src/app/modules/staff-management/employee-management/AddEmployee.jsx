import { Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import './add-employee.scss';
import { useFormik } from 'formik';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const initialValues = {
    location: '',
    address: '',
}


const AddEmployee = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
                                    <p>Contact Number</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="specialization"
                                        id="qualification-form-control-3"
                                        placeholder="Phone no"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.specialization}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
                                    <p>Account Manager</p>
                                    <DropownCustom
                                        label={'Account Manager'}
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
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

                                <Grid className="employee-add-form-field">
                                    <p>Password</p>
                                    <FormControl
                                        id="change-password-form-control2"
                                        variant="outlined"
                                    >
                                        <OutlinedInput
                                            name="password"
                                            placeholder="Enter password"
                                            id="outlined-adornment-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            type={showPassword ? "text" : "password"}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    {errors.password && touched.password ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.password.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.password}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Confirm Password</p>
                                    <FormControl
                                        id="change-password-form-control"
                                        variant="outlined"
                                    >
                                        <OutlinedInput
                                            name="confirmPassword"
                                            placeholder="Re-Enter password"
                                            id="outlined-adornment-password2"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                            type={showConfirmPassword ? "text" : "password"}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowConfirmPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.confirmPassword.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.confirmPassword}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field">
                                    <p>Office Shift</p>
                                    <DropownCustom
                                        label={'Day Shift'}
                                        value={values.expenseType}
                                        handleBlur={handleBlur}
                                        name={'location'}
                                        handleChange={handleChange}
                                    />
                                    {errors.location && touched.location ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="employee-add-form-field  employee-add-form-address-field">
                                    <p>Address</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="address"
                                        id="qualification-form-control-3"
                                        placeholder="Address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                    />
                                    {errors.address && touched.address ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.address.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.address}</p></Grid>
                                    ) : null}
                                </Grid>


                                <Grid className="employee-add-form-field employee-add-form-field-checkbox ">
                                    <p>Weekly Day Off(s)</p>
                                    <Grid className='employee-add-form-checkbox'>
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
