import { Grid } from '@mui/material'
import './add-designation.scss';
import { useFormik } from 'formik';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    department: '',
    desigantion_name:'',
}


const AddDesigantion = ({type}) => {
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
            <Grid className='department-add-main-container'>

                <form className='department-add-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='department-add-top-btn-container'>
                        <h4>{(type==='add')?'Add New Designation':'Edit Designation'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type==='add')?'Save':'Update'}</button>
                            <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='department-add-form-container-wrapper'>
                        <Grid className='department-add-form-container'>


                            <Grid className='department-add-form-row'>

                                <Grid className="department-add-form-field">
                                    <p>Department</p>
                                    <DropownCustom
                                        label={'Department'}
                                        value={values.department}
                                        handleBlur={handleBlur}
                                        name={'department'}
                                        handleChange={handleChange}
                                    />
                                    {errors.department && touched.department ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.department.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.department}</p></Grid>
                                    ) : null}
                                </Grid>


                                <Grid className="department-add-form-field">
                                    <p>Designation Name</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="desigantion_name"
                                        id="qualification-form-control-3"
                                        placeholder="Designation Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.desigantion_name}
                                    />
                                    {errors.desigantion_name && touched.desigantion_name ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.desigantion_name.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.desigantion_name}</p></Grid>
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

export default AddDesigantion
