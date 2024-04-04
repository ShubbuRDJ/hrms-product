import { Grid } from '@mui/material'
import './add-company-policy.scss';
import { useFormik } from 'formik';
import TextEditor from '../../../components/TextEditor/TextEditor';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    title:'',
    policyDetails:''
}


const AddCompanyPolicy = ({type}) => {
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
            <Grid className='company-policy-add-main-container'>

                <form className='company-policy-add-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='company-policy-add-top-btn-container'>
                        <h4>{(type==='add')?'Add New Policy':'Edit New Policy'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type==='add')?'Save':'Update'}</button>
                            <button onClick={()=>navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='company-policy-add-form-container-wrapper'>
                        <Grid className='company-policy-add-form-container'>

                            <Grid className='company-policy-add-form-row'>
                                <Grid className="company-policy-add-form-field">
                                    <p>Title</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="title"
                                        id="qualification-form-control-3"
                                        placeholder="Title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.title}
                                    />
                                    {errors.title && touched.title ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.title.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.title}</p></Grid>
                                    ) : null}
                                </Grid>
                            </Grid>

                            <Grid className='company-policy-add-form-row'>
                                <Grid className="company-policy-add-text-editor-field">
                                    <p className='company-policy-add-text-editor-heading'>Policy Details</p>
                                    <TextEditor placeholder={'Policy Details'}/>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                </form>

            </Grid>
        </>
    )
}

export default AddCompanyPolicy
