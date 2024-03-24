import { FormControl, Grid, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import './change-password.scss';
import { useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { changePasswordSchema } from '../../../../services/yup-validation-schemas';

const initialValues = {
  oldPass:'',
  password:'',
  confirmPassword:''
}
const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: changePasswordSchema,
      onSubmit: (values, action) => {
        handleSave(values);
      },
    });

  const handleSave = async (credentials) => {
    console.log('password changed success');
  }
  return (
    <>
      <Grid className='change-password-container'>
        <h4>Change Password</h4>

        <form onSubmit={handleSubmit}>
          <Grid className='change-password-form-container'>

            <Grid className="change-password-input-field">
              <label className="form-label" htmlFor="change-password-form-control-old">Old Password</label>
              <FormControl
                id="change-password-form-control-old"
                variant="outlined"
              >
                <OutlinedInput
                  name="oldPass"
                  placeholder="Enter Old password"
                  id="outlined-adornment-password1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.oldPass}
                  type={showOldPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowOldPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {errors.oldPass && touched.oldPass ? (
                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.oldPass.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.oldPass}</p></Grid>
              ) : null}
            </Grid>

            <Grid className="change-password-input-field">
              <label className="form-label" htmlFor="change-password-form-control">New Password</label>
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

            <Grid className="change-password-input-field">
              <label className="form-label" htmlFor="change-password-form-control">Confirm Password</label>
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

            <button className='change-password-save-btn' type="submit">Save</button>

          </Grid>
        </form>
      </Grid>
    </>
  )
}

export default ChangePassword
