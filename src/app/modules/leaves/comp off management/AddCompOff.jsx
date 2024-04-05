import { Grid } from '@mui/material'
import './add-department.scss';
import { useFormik } from 'formik';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';

const initialValues = {
    department_name: '',
    department_email:'',
    department_head:'',
}


const AddCompOff = ({type}) => {


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
            <Grid className='department-add-main-container'>

                <form className='department-add-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='department-add-top-btn-container'>
                        <h4>{(type==='add')?'Add Comp Off':'Edit Comp Off'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type==='add')?'Save':'Update'}</button>
                            <button type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='department-add-form-container-wrapper'>
                        <Grid className='department-add-form-container'>


                            <Grid className='department-add-form-row'>

                                <Grid className="department-add-form-field">
                                    <p>Department Name</p>
                                    <DropownCustom
                                        label={'Name'}
                                        value={values.department_name}
                                        handleBlur={handleBlur}
                                        name={'department_name'}
                                        handleChange={handleChange}
                                    />
                                    {errors.department_name && touched.department_name ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.department_name.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.department_name}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="department-add-form-field">
                                    <p>Department Head</p>
                                    <DropownCustom
                                        label={'Department Head'}
                                        value={values.department_head}
                                        handleBlur={handleBlur}
                                        name={'department_head'}
                                        handleChange={handleChange}
                                    />
                                    {errors.department_head && touched.department_head ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.department_head.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.department_head}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="department-add-form-field">
                                    <p>Department Email</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="department_email"
                                        id="qualification-form-control-3"
                                        placeholder="Department Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.department_email}
                                    />
                                    {errors.department_email && touched.department_email ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.department_email.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.department_email}</p></Grid>
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

export default AddCompOff
