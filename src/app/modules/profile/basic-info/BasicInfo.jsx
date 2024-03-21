import { Grid } from '@mui/material';
import React from 'react';
import './basic-info.scss';
import { useFormik } from 'formik';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';



const initialValues = {
    fName: "",
    lName: "",
};

const BasicInfo = () => {


    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            // validationSchema: loginSchema,
            onSubmit: (values, action) => {
                handleSave(values);
                // action.resetForm();
            },
        });

    const handleSave = async (credentials) => {
        console.log('Login success');
    }
    return (
        <>
            <Grid className='profile-basic-info-container'>
                <h4>Employee Details</h4>

                <form onSubmit={handleSubmit}>
                    <Grid className='profile-basic-info-form-container'>
                        <Grid className='profile-basic-info-form-row'>

                            <Grid className='profile-basic-info-input-field'>
                                <label htmlFor="fName-basic-info-form-control">First Name</label>
                                <input
                                    type='text'
                                    className='profile-basic-info-input-tag'
                                    name="fName"
                                    id="fName-basic-info-form-control"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fName}
                                />
                                {errors.fName && touched.fName ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '1rem', width: '100%', marginTop: `${(errors.fName.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.fName}</p></Grid>
                                ) : null}
                            </Grid>

                            <Grid className='profile-basic-info-input-field'>
                                <label htmlFor="lName-basic-info-form-control">Last Name</label>
                                <input
                                    type='text'
                                    className='profile-basic-info-input-tag'
                                    name="lName"
                                    id="lName-basic-info-form-control"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lName}
                                />
                                {errors.lName && touched.lName ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '1rem', width: '100%', marginTop: `${(errors.lName.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.lName}</p></Grid>
                                ) : null}
                            </Grid>

                            <Grid className='profile-basic-info-input-field'>
                                <label htmlFor="email-login-form-control">Date of Birth</label>
                                <DatePickerCustom
                                placeholder={'Date of birth'}
                                />
                                {errors.email && touched.email ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '1rem', width: '100%', marginTop: `${(errors.email.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.email}</p></Grid>
                                ) : null}
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}

export default BasicInfo
