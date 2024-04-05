import { Grid } from '@mui/material'
import './add-leave.scss';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';
import LeaveCard from '../../../components/leaves-card/LeaveCard'
import casualLeaveIcon from '../../../../assets/leaves/door.svg';
import earnLeaveIcon from '../../../../assets/leaves/dollar.svg';
import shortLeaveIcon from '../../../../assets/leaves/stopwatch.svg';
import restrictedLeaveIcon from '../../../../assets/leaves/walk.svg';
import compOffLeaveIcon from '../../../../assets/leaves/travel.svg';
import paternityLeaveIcon from '../../../../assets/leaves/father-and-son.svg';
import maternityLeaveIcon from '../../../../assets/leaves/mother.svg';

const initialValues = {
    holidayType: '',
    startDate: '',
    endDate: '',
    eventName: '',
    status: '',
    description: '',
}


const AddLeave = ({ type }) => {
    const navigate = useNavigate();

    const { values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched } =
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
            <Grid className='new-holiday-add-main-container'>

            <Grid className='my-leaves-all-leaves-container'>
                        <LeaveCard
                            leaveType={'Casual Leave (CL)'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'#E7EDFF'}
                            icon={casualLeaveIcon}
                            cardRowLimit={4}
                            cardGap={20}
                        />
                        <LeaveCard
                            leaveType={'Earn Leave (EL)'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'#FFE0EB'}
                            icon={earnLeaveIcon}
                            cardRowLimit={4}
                            cardGap={20}
                        />
                        <LeaveCard
                            leaveType={'Short Leave'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'rgba(21, 101, 192, 0.1)'}
                            icon={shortLeaveIcon}
                            cardRowLimit={4}
                            cardGap={20}
                        />
                        <LeaveCard
                            leaveType={'Restricted Leave'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'#ECFCCB'}
                            icon={restrictedLeaveIcon}
                            cardRowLimit={4}
                            cardGap={20}
                        />
                        <LeaveCard
                            leaveType={'Complimentary off'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'#D1FAE5'}
                            icon={compOffLeaveIcon}
                            cardRowLimit={4}
                            cardGap={20}
                        />
                        <LeaveCard
                            leaveType={'Paternity Leave'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'#F3E8FF'}
                            icon={paternityLeaveIcon}
                            cardRowLimit={4}
                            cardGap={20}
                        />
                        <LeaveCard
                            leaveType={'Maternity Leave'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'#FDF2F8'}
                            icon={maternityLeaveIcon}
                            cardRowLimit={4}
                            cardGap={20}
                        />

                    </Grid>


                <form className='new-holiday-add-main-wrapper' onSubmit={handleSubmit}>

                    

                    <Grid className='new-holiday-add-top-btn-container'>
                        <h4>{(type === 'add') ? 'Add Leave' : 'Edit Leave'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type === 'add') ? 'Save' : 'Update'}</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='new-holiday-add-form-container-wrapper'>
                        <Grid className='new-holiday-add-form-container'>

                            <Grid className='new-holiday-add-form-row'>

                                <Grid className="new-holiday-add-form-field">
                                    <p>Holiday Type</p>
                                    <DropownCustom
                                        label={'Holiday Type'}
                                        value={values.holidayType}
                                        handleBlur={handleBlur}
                                        name={'holidayType'}
                                        handleChange={handleChange}
                                    />
                                    {errors.holidayType && touched.holidayType ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.holidayType.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.holidayType}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="new-holiday-add-form-field">
                                    <p>Start Date</p>
                                    <DatePickerCustom
                                        placeholder={'Start Date'}
                                        name={'startDate'}
                                        id={'new-holiday-add-startDate'}
                                        value={values?.startDate}
                                        handleChange={setFieldValue}
                                    />
                                    {errors.startDate && touched.startDate ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.startDate.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.startDate}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="new-holiday-add-form-field">
                                    <p>End Date</p>
                                    <DatePickerCustom
                                        placeholder={'End Date'}
                                        name={'endDate'}
                                        id={'new-holiday-add-endDate'}
                                        value={values?.endDate}
                                        handleChange={setFieldValue}
                                    />
                                    {errors.endDate && touched.endDate ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.endDate.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.endDate}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="new-holiday-add-form-field">
                                    <p>Event Name</p>
                                    <DropownCustom
                                        label={'Event Name'}
                                        value={values.eventName}
                                        handleBlur={handleBlur}
                                        name={'eventName'}
                                        handleChange={handleChange}
                                    />
                                    {errors.eventName && touched.eventName ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.eventName.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.eventName}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="new-holiday-add-form-field">
                                    <p>Status</p>
                                    <DropownCustom
                                        label={'Status'}
                                        value={values.status}
                                        handleBlur={handleBlur}
                                        name={'status'}
                                        handleChange={handleChange}
                                    />
                                    {errors.status && touched.status ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.status.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.status}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="new-holiday-add-form-field" style={{ width: 'calc((100% - 35px) / 2)' }}>
                                    <p>Description</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="description"
                                        id="add-attendance-form-control-3-description"
                                        placeholder="Description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.description}
                                    />
                                    {errors.description && touched.description ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.description.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.description}</p></Grid>
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

export default AddLeave
