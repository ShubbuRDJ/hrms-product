import {
  FormControl,
  Grid, IconButton, InputAdornment, OutlinedInput, TextField,
} from "@mui/material";
import "./auth.scss";
import { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../../services/yup-validation-schemas";
import avLogo from '../../../assets/auth/av_with_text_logo.png';
import googleLogo from '../../../assets/auth/google.svg';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  device_token: "aaa",
  device_id: "abc",
  device_type: "Laptop"
};

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        handleLogin(values);
        // action.resetForm();
      },
    });

  const handleLogin = async (credentials) => {
    console.log('Login success');
  }
  return (
    <>
      <Grid className="login-main-container">
        <Grid className="login-logo-image-container">
          <Grid className="login-back-image">
            <img src="https://dashboard.appventurez.com/skin/hrsale_assets/img/bg/banner.jpg" alt="back-img" />
          </Grid>
        </Grid>
        <Grid className="login-form-container">

          <Grid className="login-form-wrapper">
            <Grid className="login-logo">
              <img src={avLogo} alt="av_logo" />
            </Grid>
            <Grid className="login-welcome-heading">
              <p>Welcome</p>
              <h4>Login to your account</h4>
            </Grid>

            <form onSubmit={handleSubmit}>
              <Grid className="login-form-continer">

                <Grid className="login-form-input-field">
                  <label htmlFor="email-login-form-control">Email</label>
                  <TextField
                    name="email"
                    id="email-login-form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                  <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '1rem', width: '100%',marginTop:`${(errors.email.length<=60)?'-5px':'8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.email}</p></Grid>
                ) : null}
                </Grid>

                <Grid className="login-form-input-field">
                  <label className="form-label" htmlFor="password-login-form-control">Password</label>
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

                <Grid className="login-remember-forgot">
                {/* <FormControlLabel control={<Checkbox  icon={<img src={checkboxLogo} alt="google" />}  />} label="Remember me" /> */}
                <p onClick={()=>navigate('/forgot')}>Forgot password?</p>
                </Grid>

                <button className="login-login-button" type="submit">Login</button>

                <button className="login-google-button" type="button">
                  <img src={googleLogo} alt="google" />
                  <span>Or sign-in with google</span>
                  </button>

              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
