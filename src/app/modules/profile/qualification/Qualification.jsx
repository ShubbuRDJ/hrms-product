import { Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import './qualification.scss';
import { useFormik } from 'formik';
import { profileQualificationSchema } from '../../../../services/yup-validation-schemas';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';



const initialValues = {
    specialization: '',
    timePeriodFrom: '',
    timePeriodTo: '',
    scoreObtain: '',
    university: '',
    educationLevel: '',
    totalScore: ''
};

const Qualification = () => {
    const qualificationFormContainer = useRef(null);

    const [qualificationFormCount, setQualificationFormCount] = useState(['1']);


    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: profileQualificationSchema,
            onSubmit: (values, action) => {
                handleSave(values);
            },
        });

    const handleSave = async (credentials) => {
        console.log(credentials, 'jhsbdwuyduweydweu');
    }


    const openFileInput = () => {
        // Use the click method to open the file input
        document.getElementById('qualification-fileInput').click();
    };

    const handleFileChange = () => {
        console.log('vjdsbdshsffew');
    };

    const handleMoreQualification = () => {
        setQualificationFormCount([...qualificationFormCount, Math.random()]);
    }

    const reduceQualificationCount = () => {
        const newArray = qualificationFormCount.slice(0, -1);
        setQualificationFormCount(newArray);
    }



    console.log(qualificationFormCount, 'vfduve8ureere');


    return (
        <>
            <Grid className='profile-qualification-container'>
                <form onSubmit={handleSubmit}>
                    <Grid className='profile-qualification-heading-btn-container'>
                        <h4>Add New Qualification</h4>
                        <Grid className='profile-qualification-btns'>
                            <button className='profile-qualification-btn' type="button" onClick={handleMoreQualification}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#007BFF" />
                                </svg>
                                <span>Add More Qualification</span>
                            </button>
                            <button className='profile-qualification-btn profile-qualification-btn-2' type="submit">Save</button>
                        </Grid>
                    </Grid>


                    <Grid ref={qualificationFormContainer} className='profile-qualification-form-container-wrapper' id='profile-qualification-form-container-wrapper'>

                        {
                            qualificationFormCount.map((item, index) => (
                                <Grid key={index} className='profile-qualification-form-container'>

                                    <Grid className='profile-qualification-form-row'>

                                        <Grid className='profile-qualification-form-input-container'>
                                            <label htmlFor="fName-basic-info-form-control">School/College/University</label>
                                            <DropownCustom
                                                label={'University'}
                                                value={values.expenseType}
                                                handleBlur={handleBlur}
                                                name={'university'}
                                                handleChange={handleChange}
                                            />
                                            {errors.university && touched.university ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.university.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.university}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className='profile-qualification-form-input-container'>
                                            <label htmlFor="fName-basic-info-form-control">Education Level</label>
                                            <DropownCustom
                                                label={'Education'}
                                                name={'educationLevel'}
                                                handleChange={handleChange}
                                                handleBlur={handleBlur}
                                                value={values?.educationLevel}
                                            />
                                            {errors.educationLevel && touched.educationLevel ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.educationLevel.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.educationLevel}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className='profile-qualification-form-input-container'>
                                            <label htmlFor="qualification-form-control-3">Specialization</label>
                                            <input
                                                type='text'
                                                className='profile-qualification-input-tag'
                                                name="specialization"
                                                id="qualification-form-control-3"
                                                placeholder="Specialization"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.specialization}
                                            />
                                            {errors.specialization && touched.specialization ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.specialization.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.specialization}</p></Grid>
                                            ) : null}
                                        </Grid>

                                    </Grid>

                                    <Grid className='profile-qualification-form-row'>

                                        <Grid className='profile-qualification-form-input-container'>
                                            <label htmlFor="qualification-form-control-4">Time Period</label>
                                            <input
                                                type='text'
                                                className='profile-qualification-input-tag'
                                                name="timePeriodFrom"
                                                id="qualification-form-control-4"
                                                placeholder="From"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.timePeriodFrom}
                                            />
                                            {errors.timePeriodFrom && touched.timePeriodFrom ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.timePeriodFrom.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.timePeriodFrom}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className='profile-qualification-form-input-container'>
                                            <label htmlFor="qualification-form-control-5">Time Period</label>
                                            <input
                                                type='text'
                                                className='profile-qualification-input-tag'
                                                name="timePeriodTo"
                                                id="qualification-form-control-5"
                                                placeholder="To"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.timePeriodTo}
                                            />
                                            {errors.timePeriodTo && touched.timePeriodTo ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.timePeriodTo.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.timePeriodTo}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className='profile-qualification-form-input-container'>
                                            <label htmlFor="qualification-form-control-6">Score Obtained</label>
                                            <input
                                                type='text'
                                                className='profile-qualification-input-tag'
                                                name="scoreObtain"
                                                id="qualification-form-control-6"
                                                placeholder="Score Obtained"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.scoreObtain}
                                            />
                                            {errors.scoreObtain && touched.scoreObtain ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.scoreObtain.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.scoreObtain}</p></Grid>
                                            ) : null}
                                        </Grid>

                                    </Grid>

                                    <Grid className='profile-qualification-form-row'>

                                        <Grid className='profile-qualification-form-input-container'>
                                            <label htmlFor="qualification-form-control-7">Total Score</label>
                                            <input
                                                type='text'
                                                className='profile-qualification-input-tag'
                                                name="totalScore"
                                                id="qualification-form-control-7"
                                                placeholder="Total Score"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.totalScore}
                                            />
                                            {errors.totalScore && touched.totalScore ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.totalScore.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.totalScore}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className='profile-qualification-form-input-container profile-qualification-file-input-container'>
                                            <label htmlFor="qualification-form-control-8">Upload Documents</label>
                                            <button className='qualification-file-upload-main-btn' id='qualification-form-control-8' type="button" onClick={openFileInput}>
                                                <Grid className='qualification-file-upload-btn'>
                                                    <span>Choose File</span>
                                                </Grid>
                                                <span>No file Choosen</span>
                                                <input
                                                    type='file'
                                                    id='qualification-fileInput'
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    onInput={handleFileChange}
                                                />
                                            </button>
                                        </Grid>



                                    </Grid>

                                    <Grid className='qualification-delete-btn-container'>
                                        <button type="button" style={{ display: `${(qualificationFormCount.length <= 1) ? 'none' : ''}` }} onClick={reduceQualificationCount}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6673 2.66667H10.334L9.66732 2H6.33398L5.66732 2.66667H3.33398V4H12.6673M4.00065 12.6667C4.00065 13.0203 4.14113 13.3594 4.39118 13.6095C4.64122 13.8595 4.98036 14 5.33398 14H10.6673C11.0209 14 11.3601 13.8595 11.6101 13.6095C11.8602 13.3594 12.0007 13.0203 12.0007 12.6667V4.66667H4.00065V12.6667Z" fill="#FF0000" />
                                            </svg>
                                            <span>Delete</span>
                                        </button>
                                    </Grid>



                                </Grid>
                            ))
                        }

                    </Grid>

                </form>
            </Grid>
        </>
    )
}

export default Qualification
