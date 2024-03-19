import {
    FormControl,
    Grid, IconButton, InputAdornment, OutlinedInput,
  } from "@mui/material";
  import "./auth.scss";
  import { useState } from "react";
  import { useFormik } from "formik";
  import { setNewPasswordSchema } from "../../../services/yup-validation-schemas";
  import avLogo from '../../../assets/auth/av_with_text_logo.png';
  import backgroundImg from '../../../assets/auth/background_auth.png';
  import { Visibility, VisibilityOff } from "@mui/icons-material";
//   import { useNavigate } from "react-router-dom";
  
  const initialValues = {
    password: "",
    confirmPass:"",
  };
  
  export default function ResetPassword() {
    // const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
      useFormik({
        initialValues,
        validationSchema: setNewPasswordSchema,
        onSubmit: (values, action) => {
          handleLogin(values);
        },
      });
  
    const handleLogin = async (credentials) => {
      console.log('reset success');
    }
    return (
      <>
        <Grid className="login-main-container">
          <Grid className="login-logo-image-container">
            <Grid className="login-back-image">
              <img src={backgroundImg} alt="back-img" />
            </Grid>
          </Grid>
          <Grid className="login-form-container">
  
            <Grid className="login-form-wrapper">
              <Grid className="login-logo">
                <img src={avLogo} alt="av_logo" />
              </Grid>
              <Grid className="login-welcome-heading">
                <h4>Create Your Password</h4>
              </Grid>
  
              <form onSubmit={handleSubmit}>
                <Grid className="login-form-continer">
  
  
                  <Grid className="login-form-input-field">
                    <label className="form-label" htmlFor="password-login-form-control">Create Password</label>
                  <FormControl
                    id="password-login-form-control"
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
                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '1rem', width: '100%',marginTop:`${(errors.password.length<=60)?'-5px':'8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.password}</p></Grid>
                  ) : null}
                  </Grid>


                  <Grid className="login-form-input-field">
                    <label className="form-label" htmlFor="confirm-password-login-form-control">Confirm Password</label>
                  <FormControl
                    id="confirm-password-login-form-control"
                    variant="outlined"
                  >
                    <OutlinedInput
                      name="confirmPass"
                      placeholder="Enter confirm password"
                      id="confirm-password-login-form-"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPass}
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
                  {errors.confirmPass && touched.confirmPass ? (
                    <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '1rem', width: '100%',marginTop:`${(errors.confirmPass.length<=60)?'-5px':'8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.confirmPass}</p></Grid>
                  ) : null}
                  </Grid>
  
                  
  
                  <button className="login-login-button" type="submit">Submit</button>
  
  
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
  