import { Grid } from '@mui/material';
import React from 'react';
import './qualification.scss';
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

const Qualification = () => {


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
            <Grid className='profile-qualification-container'>
                <form onSubmit={handleSubmit}>
                    <Grid className='profile-qualification-heading-btn-container'>
                        <h4>Add New Qualification</h4>
                        <Grid className='profile-qualification-btns'>
                            <button className='profile-qualification-btn' type="button">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#007BFF" />
                                </svg>
                                <span>Add More Qualification</span>
                            </button>
                            <button className='profile-qualification-btn profile-qualification-btn-2' type="submit">Save</button>
                        </Grid>
                    </Grid>


                    <Grid className='profile-qualification-form-container-wrapper'>
                        <Grid className='profile-qualification-form-container'>
                        </Grid>
                    </Grid>

                </form>
            </Grid>
        </>
    )
}

export default Qualification
