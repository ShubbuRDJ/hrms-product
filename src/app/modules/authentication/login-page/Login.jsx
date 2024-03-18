import {
  Grid,
} from "@mui/material";
import "./login.scss";
import { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../../../services/yup-validation-schemas";
import avLogo from '../../../../assets/auth/av_with_text_logo.png';

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
          <Grid className="login-back-image">
          <img src="https://dashboard.appventurez.com/skin/hrsale_assets/img/bg/banner.jpg" alt="back-img" />
          </Grid>
        </Grid>
        <Grid className="login-form-container">
          <form onSubmit={handleSubmit}>
            <Grid className="login-form-wrapper">
              <Grid className="login-logo">
                <img src={avLogo} alt="av_logo" />
              </Grid>
              <Grid className="login-welcome-heading">
                <p>Welcome</p>
                <h4>Login to your account</h4>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
