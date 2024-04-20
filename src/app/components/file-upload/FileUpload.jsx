import { Grid } from '@mui/material'
import React from 'react'
import './file-upload.scss'
import PropTypes from 'prop-types';

const FileUpload = ({ handleChange, id }) => {
    const openFileInput = () => {
        document.getElementById(id).click();
    };
    return (
        <>
            <button className='file-upload-main-btn' id='qualification-form-control-8' type="button" onClick={openFileInput}>
                <Grid className='file-upload-btn'>
                    <span>Choose File</span>
                </Grid>
                <span>No file Choosen</span>
                <input
                    type='file'
                    id={id}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onInput={handleChange}
                />
            </button>
        </>
    )
}

FileUpload.propTypes = {
    handleChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default FileUpload
