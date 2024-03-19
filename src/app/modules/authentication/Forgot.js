import {
    Grid, TextField,
  } from "@mui/material";
  import "./auth.scss";
  import { useFormik } from "formik";
  import { forgotPasswordSchema } from "../../../services/yup-validation-schemas";
  import avLogo from '../../../assets/auth/av_with_text_logo.png';
  import backgroundImg from '../../../assets/auth/background_auth.png';
import { useNavigate } from "react-router-dom";
  
  const initialValues = {
    email: "",
  };
  
  export default function Forgot() {
    const navigate = useNavigate();
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
      useFormik({
        initialValues,
        validationSchema: forgotPasswordSchema,
        onSubmit: (values, action) => {
          handleLogin(values);
        },
      });
  
    const handleLogin = async (credentials) => {
      console.log('forgot success');
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
                <h4>Reset Your Password</h4>
                <p className="forgot-text">We will send you a link to reset password.</p>
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
  
                  <button className="login-login-button forgot-login-button" type="submit">Recover Password</button>
  
                  <button onClick={()=>navigate('/login')} className="login-google-button" type="button">
                    <span>Back To Login</span>
                    </button>
  
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
  