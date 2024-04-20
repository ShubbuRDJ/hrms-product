import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './prompt-custom.scss';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import PropTypes from 'prop-types';


const initialValues = {
    comment: ''
}

function PromptCustom({ open, setOpen, heading, setPromptMsg }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const promptCommentValidation = Yup.object({
        comment: Yup.string()
            .required("Please enter the comment to move ahead"),
    });

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: promptCommentValidation,
            onSubmit: (values, action) => {
                handleSave(values);
            },
        });

    const handleSave = async (credentials) => {
        setPromptMsg(credentials)
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth={true}
            maxWidth={'xs'}
            open={open}
            onClose={handleClose}
            aria-labelledby="prompt-dialog-title"
        >
            <Grid className='dialog-main-container'>

                <Grid className='prompt-dialog-cross-button'>
                    <Grid onClick={() => setOpen(!open)} className='dialog-box-cross-icon'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.01172 14.9891L8.00239 7.99848L14.9931 14.9891M14.9931 1.00781L8.00105 7.99848L1.01172 1.00781" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Grid>


                </Grid>

                <form className='prompt-dialog-content-box' onSubmit={handleSubmit}>

                    <Grid className='prompt-dialog-text'>
                        <h4>{heading}</h4>
                    </Grid>

                    <Grid className='prompt-dialog-textarea'>
                        <textarea id="prompt-comment" name="comment" rows="4" cols="50"
                            placeholder='Add a comment'
                            onChange={handleChange}
                            value={values?.comment}
                            onBlur={handleBlur}
                        >
                        </textarea>
                        {errors.comment && touched.comment ? (
                            <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.comment.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.comment}</p></Grid>
                        ) : null}
                    </Grid>



                    <Grid className='prompt-dialog-btns'>
                        <button onClick={() => setOpen(!open)} className='prompt-dialog-no-btn' type="button">No</button>
                        <button className='prompt-dialog-yes-btn' type="submit">Yes</button>
                    </Grid>

                </form>
            </Grid>
        </Dialog>
    );
}

PromptCustom.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    setPromptMsg: PropTypes.func.isRequired,
};

export default React.memo(PromptCustom)
