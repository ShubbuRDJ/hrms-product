import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import "./login.scss";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../../../services/yup-validation-schemas";

const initialValues = {
  email: "",
  password: "",
  device_token: "aaa",
  device_id: "abc",
  device_type: "Laptop"
};

export default function Login() {
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
        action.resetForm();
      },
    });

  const handleLogin = async (credentials) => {
    console.log('Login success');
  }
  return (
    <>
      <Grid className="login-main-container">
        <Grid className="login-logo-image-container">
          <Grid className="login-logo">
            <img src={''} alt="AV_logo" />
          </Grid>
          <Grid className="login-background-image">
            <img src={''} alt="background" />
          </Grid>
        </Grid>
        <Grid className="login-form-container">
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Grid className="login-form-heading">
                <h2>Login to your Account</h2>
              </Grid>
              <Grid className="login-form-field">
                <label className="form-label" htmlFor="email-form-control"><img src={''} alt="email-logo" />Email ID</label>
                <TextField
                  name="email"
                  id="email-form-control"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <Grid style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '1rem', width: '100%' }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.email}</p></Grid>
                ) : null}
              </Grid>

              <Grid className="login-form-field" style={{marginTop:'0'}}>
                <label className="form-label" htmlFor="password-form-control"> <img src={''} alt="password-logo" />Password</label>
                <FormControl
                  id="password-form-control"
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
                  <Grid style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '1rem', width: '100%' }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.password}</p></Grid>
                ) : null}
              </Grid>

              <Grid className="form-button">
                <button type="submit">Sign In</button>
              </Grid>
              <Grid className="form-forgot">
                <Link to='/forgotPassword'>Forgot Password?</Link>
              </Grid>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
