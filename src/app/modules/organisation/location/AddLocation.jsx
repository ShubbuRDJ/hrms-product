import { Grid } from '@mui/material'
import './add-location.scss';
import { useFormik } from 'formik';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    country: '',
    zip: '',
    state: '',
    city: '',
    email: '',
    address1: '',
    address2: '',
    phone: '',
    fax: '',
    location_name: '',
    location_head: '',
}


const AddLocation = ({ type }) => {
    const navigate = useNavigate();

    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            // validationSchema: profileQualificationSchema,
            onSubmit: (values, action) => {
                handleSave(values);
            },
        });

    const handleSave = async (credentials) => {
        console.log(credentials, 'jhsbdwuyduweydweu');
    }

    return (
        <>
            <Grid className='location-add-main-container'>

                <form className='location-add-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='location-add-top-btn-container'>
                        <h4>{(type === 'add') ? 'Add New Location' : 'Edit Location'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type === 'add') ? 'Save' : 'Update'}</button>
                            <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='location-add-form-container-wrapper'>
                        <Grid className='location-add-form-container'>


                            <Grid className='location-add-form-row'>

                                <Grid className="location-add-form-field">
                                    <p>Address Line 1</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="address1"
                                        id="qualification-form-control-3"
                                        placeholder="Address Line 1"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address1}
                                    />
                                    {errors.address1 && touched.address1 ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.address1.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.address1}</p></Grid>
                                    ) : null}
                                </Grid>


                                <Grid className="location-add-form-field">
                                    <Grid className='location-add-form-row'>

                                        <Grid className="location-add-form-field">
                                            <p>Location Name</p>
                                            <input
                                                type='text'
                                                className='add-employee-form-input-tag'
                                                name="location_name"
                                                id="qualification-form-control-3"
                                                placeholder="Location Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.location_name}
                                            />
                                            {errors.location_name && touched.location_name ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location_name.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location_name}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className="location-add-form-field">
                                            <p>Location Head</p>
                                            <DropownCustom
                                                label={'Department'}
                                                value={values.location_head}
                                                handleBlur={handleBlur}
                                                name={'location_head'}
                                                handleChange={handleChange}
                                            />
                                            {errors.location_head && touched.location_head ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.location_head.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.location_head}</p></Grid>
                                            ) : null}
                                        </Grid>

                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid className='location-add-form-row'>

                                <Grid className="location-add-form-field">
                                    <p>Address Line 2</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="address2"
                                        id="qualification-form-control-3"
                                        placeholder="Address Line 2"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address2}
                                    />
                                    {errors.address2 && touched.address2 ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.address2.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.address2}</p></Grid>
                                    ) : null}
                                </Grid>


                                <Grid className="location-add-form-field">
                                    <Grid className='location-add-form-row'>

                                        <Grid className="location-add-form-field">
                                            <p>Phone</p>
                                            <input
                                                type='text'
                                                className='add-employee-form-input-tag'
                                                name="phone"
                                                id="qualification-form-control-3"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                            />
                                            {errors.phone && touched.phone ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.phone.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.phone}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className="location-add-form-field">
                                            <p>Fax Number</p>
                                            <input
                                                type='text'
                                                className='add-employee-form-input-tag'
                                                name="fax"
                                                id="qualification-form-control-3"
                                                placeholder="Fax No"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.fax}
                                            />
                                            {errors.fax && touched.fax ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.fax.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.fax}</p></Grid>
                                            ) : null}
                                        </Grid>

                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid className='location-add-form-row'>

                                <Grid className="location-add-form-field">
                                    <Grid className='location-add-form-row'>
                                        <Grid className="location-add-form-field location-add-three-in-row" >
                                            <p>City</p>
                                            <input
                                                type='text'
                                                className='add-employee-form-input-tag'
                                                name="city"
                                                id="qualification-form-control-3"
                                                placeholder="City"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                            />
                                            {errors.city && touched.city ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.city.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.city}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className="location-add-form-field location-add-three-in-row" >
                                            <p>State / Province</p>
                                            <input
                                                type='text'
                                                className='add-employee-form-input-tag'
                                                name="state"
                                                id="qualification-form-control-3"
                                                placeholder="State/Province"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.state}
                                            />
                                            {errors.state && touched.state ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.state.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.state}</p></Grid>
                                            ) : null}
                                        </Grid>

                                        <Grid className="location-add-form-field location-add-three-in-row">
                                            <p>Zip / Postal Code</p>
                                            <input
                                                type='text'
                                                className='add-employee-form-input-tag'
                                                name="zip"
                                                id="qualification-form-control-3"
                                                placeholder="Zip"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.zip}
                                            />
                                            {errors.zip && touched.zip ? (
                                                <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.zip.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.zip}</p></Grid>
                                            ) : null}
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid className="location-add-form-field">
                                    <p>Email</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="email"
                                        id="qualification-form-control-3"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.email.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.email}</p></Grid>
                                    ) : null}
                                </Grid>

                            </Grid>

                            <Grid className='location-add-form-row'>

                                <Grid className="location-add-form-field">
                                    <p>Country</p>
                                    <DropownCustom
                                        label={'Country'}
                                        value={values.country}
                                        handleBlur={handleBlur}
                                        name={'country'}
                                        handleChange={handleChange}
                                    />
                                    {errors.country && touched.country ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.country.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.country}</p></Grid>
                                    ) : null}
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </form>

            </Grid>
        </>
    )
}

export default AddLocation
