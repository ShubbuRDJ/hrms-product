import { Grid } from '@mui/material';
import React from 'react';
import './basic-info.scss';
import { useFormik } from 'formik';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';
import { profileBasicDetailSchema } from '../../../../services/yup-validation-schemas';



const initialValues = {
    fName: "",
    lName: "",
    dob: '',
    totalWorkingMonth: '',
    totalWorkingYear: '',
    relevantWorkingMonth: '',
    relevantWorkingYear: '',
    address: ''
};

const BasicInfo = () => {


    const { values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: profileBasicDetailSchema,
            onSubmit: (values, action) => {
                handleSave(values);
            },
        });

    const handleSave = async (credentials) => {
        console.log(credentials, 'jhsbdwuyduweydweu');
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
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.fName.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.fName}</p></Grid>
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
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.lName.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.lName}</p></Grid>
                                ) : null}
                            </Grid>

                            <Grid className='profile-basic-info-input-field'>
                                <label htmlFor="email-login-form-control">Date of Birth</label>
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
                        </Grid>

                        <Grid className='profile-basic-info-form-row'>

                            <Grid className='profile-basic-info-input-field profile-basic-info-input-field-second'>
                                <label htmlFor="email-login-form-control">Total Working Experience</label>
                                <DatePickerCustom
                                    placeholder={'Month'}
                                    type={'month'}
                                    value={values?.totalWorkingMonth}
                                    handleChange={setFieldValue}
                                    name={'totalWorkingMonth'}
                                    id={'profile-basic-detail-totalWorkingMonth'}

                                />
                                {errors.totalWorkingMonth && touched.totalWorkingMonth ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.totalWorkingMonth.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.totalWorkingMonth}</p></Grid>
                                ) : null}
                            </Grid>

                            <Grid className='profile-basic-info-input-field profile-basic-info-input-field-second'>
                                <label style={{ visibility: "hidden" }} htmlFor="email-login-form-control">Date of Birth</label>
                                <DatePickerCustom
                                    placeholder={'Year'}
                                    type={'year'}
                                    value={values?.totalWorkingYear}
                                    handleChange={setFieldValue}
                                    name={'totalWorkingYear'}
                                    id={'profile-basic-detail-totalWorkingYear'}
                                />
                                {errors.totalWorkingYear && touched.totalWorkingYear ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.totalWorkingYear.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.totalWorkingYear}</p></Grid>
                                ) : null}
                            </Grid>


                            <Grid className='profile-basic-info-input-field profile-basic-info-input-field-second'>
                                <label htmlFor="email-login-form-control">Relevant Working Experience</label>
                                <DatePickerCustom
                                    placeholder={'Month'}
                                    type={'month'}
                                    value={values?.relevantWorkingMonth}
                                    handleChange={setFieldValue}
                                    name={'relevantWorkingMonth'}
                                    id={'profile-basic-detail-relevantWorkingMonth'}
                                />
                                {errors.relevantWorkingMonth && touched.relevantWorkingMonth ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.relevantWorkingMonth.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.relevantWorkingMonth}</p></Grid>
                                ) : null}
                            </Grid>

                            <Grid className='profile-basic-info-input-field profile-basic-info-input-field-second'>
                                <label style={{ visibility: "hidden" }} htmlFor="email-login-form-control">Date of Birth</label>
                                <DatePickerCustom
                                    placeholder={'Year'}
                                    type={'year'}
                                    value={values?.relevantWorkingYear}
                                    handleChange={setFieldValue}
                                    name={'relevantWorkingYear'}
                                    id={'profile-basic-detail-relevantWorkingYear'}
                                />
                                {errors.relevantWorkingYear && touched.relevantWorkingYear ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.relevantWorkingYear.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.relevantWorkingYear}</p></Grid>
                                ) : null}
                            </Grid>

                        </Grid>

                        <Grid className='profile-basic-info-form-row'>

                            <Grid className='profile-basic-info-input-field profile-basic-info-textarea'>
                                <label htmlFor="email-login-form-control">Address</label>
                                <textarea id="address" name="address" rows="4" cols="50"
                                    placeholder='Address'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address}
                                >
                                </textarea>
                                {errors.address && touched.address ? (
                                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.address.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.address}</p></Grid>
                                ) : null}
                            </Grid>

                        </Grid>

                        <button className='profile-basic-info-btn' type="submit">Save</button>

                    </Grid>
                </form>
            </Grid>
        </>
    )
}

export default BasicInfo
