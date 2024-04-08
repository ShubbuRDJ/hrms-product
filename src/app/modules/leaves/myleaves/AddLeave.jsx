import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material'
import './add-leave.scss';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import DropownCustom from '../../../components/Dropdown-custom/DropdownCustom';
import LeaveCard from '../../../components/leaves-card/LeaveCard'
import casualLeaveIcon from '../../../../assets/leaves/door.svg';
import earnLeaveIcon from '../../../../assets/leaves/dollar.svg';
import shortLeaveIcon from '../../../../assets/leaves/stopwatch.svg';
import restrictedLeaveIcon from '../../../../assets/leaves/walk.svg';
import compOffLeaveIcon from '../../../../assets/leaves/travel.svg';
import paternityLeaveIcon from '../../../../assets/leaves/father-and-son.svg';
import maternityLeaveIcon from '../../../../assets/leaves/mother.svg';
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom';
import FileUpload from '../../../components/file-upload/FileUpload';
import { useState } from 'react';

const initialValues = {
    date: '',
    employee: '',
    punchInTime: '',
    punchOutTime: '',
    modeOfWork: '',
    leave_reason: '',
    subject: '',
}


const AddLeave = ({ type }) => {
    const navigate = useNavigate();
    const [checkboxChecked, setCheckboxChecked] = useState(false);

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

    const handleFileChange = () => {
        console.log('vjdsbdshsffew');
    }

    console.log(checkboxChecked, 'vdfjvfei4r4r');

    return (
        <>
            <Grid className='add-leave-main-container'>

                <Grid className='add-leave-all-leaves-container'>
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

                <form className='add-leave-main-wrapper' onSubmit={handleSubmit}>
                    <Grid className='add-leave-top-btn-container'>
                        <h4>{(type === 'add') ? 'Add Leave' : 'Edit Leave'}</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">{(type === 'add') ? 'Save' : 'Update'}</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='add-leave-form-container-wrapper'>
                        <Grid className='add-leave-form-container'>

                            <Grid className='add-leave-form-row'>

                                <Grid className="add-leave-form-field">
                                    <p>Leave Type</p>
                                    <DropownCustom
                                        label={'Select Leave Type'}
                                        value={values.employee}
                                        handleBlur={handleBlur}
                                        name={'employee'}
                                        handleChange={handleChange}
                                    />
                                    {errors.employee && touched.employee ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.employee.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.employee}</p></Grid>
                                    ) : null}
                                </Grid>


                                <Grid className=" add-leave-form-field-second add-leave-field-container-wrapper">
                                    <Grid className="add-leave-form-field add-leave-checkbox-field">
                                        <p>Half Day ?</p>
                                        <FormControlLabel
                                            value="Dashboard"

                                            control={<Checkbox checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e?.target?.checked)} disableRipple name='dashboard' icon={<AddEmployeeCheckbox />} checkedIcon={<AddEmployeeCheckboxChecked />} />}
                                            labelPlacement="end"
                                        />
                                    </Grid>

                                    <Grid className="add-leave-form-field" style={{ marginLeft: '-70px', display: `${!checkboxChecked ? 'none' : ''}` }}>
                                        <p>Half Day Shift</p>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="1" control={<Radio disableRipple icon={<AddLeaveRadioIcon />} checkedIcon={<AddLeaveRadioCheckedIcon />} />} label="1st Half" />
                                            <FormControlLabel value="2" control={<Radio disableRipple icon={<AddLeaveRadioIcon />} checkedIcon={<AddLeaveRadioCheckedIcon />} />} label="2nd Half" />
                                        </RadioGroup>

                                    </Grid>
                                </Grid>

                            </Grid>


                            <Grid className='add-leave-form-row'>
                                <Grid className="add-leave-form-field">
                                    <p>Start Date</p>
                                    <DatePickerCustom
                                        placeholder={'Select to date'}
                                        value={values?.date}
                                        name={'startDate'}
                                        id={'add-leave-start-date'}
                                        handleChange={setFieldValue}
                                    />
                                </Grid>
                                <Grid className="add-leave-form-field">
                                    <p>End Date</p>
                                    <DatePickerCustom
                                        placeholder={'Select to date'}
                                        value={values?.date}
                                        name={'endDate'}
                                        id={'add-leave-end-date'}
                                        handleChange={setFieldValue}
                                    />
                                </Grid>

                                <Grid className="add-leave-form-field add-leave-form-field-second">
                                    <p>Upload Document</p>
                                    <FileUpload
                                        handleChange={handleFileChange}
                                        id={'add-leave-file-upload'}

                                    />
                                </Grid>

                                <Grid className="add-leave-form-field add-leave-form-field-second">
                                    <p>Subject</p>
                                    <input
                                        type='text'
                                        className='add-employee-form-input-tag'
                                        name="subject"
                                        id="add-attendance-form-control-3-subject"
                                        placeholder="Type Remark...."
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.subject}
                                    />
                                    {errors.subject && touched.subject ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.subject.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.subject}</p></Grid>
                                    ) : null}
                                </Grid>

                                <Grid className="add-leave-form-field add-leave-form-field-textarea">
                                    <p>Leave Reason</p>
                                    <textarea id="add-leave-leave_reason" name="leave_reason" rows="4" cols="50"
                                        placeholder='Type ....'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.leave_reason}
                                    >
                                    </textarea>
                                    {errors.leave_reason && touched.leave_reason ? (
                                        <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: 'auto', width: '100%', marginTop: `${(errors.leave_reason.length <= 60) ? '-5px' : '8px'}` }}><p style={{ margin: '0', padding: '0' }} className="form-error">{errors.leave_reason}</p></Grid>
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







const AddEmployeeCheckbox = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" />
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E9CFFF" />
        </svg>
    )
}
const AddEmployeeCheckboxChecked = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1768_69713)">
                <rect width="32" height="32" rx="8" fill="white" />
                <path d="M13.5111 23.4667L26.0444 10.9333L23.5556 8.44444L13.5111 18.4889L8.44444 13.4222L5.95555 15.9111L13.5111 23.4667ZM3.55556 32C2.57778 32 1.74104 31.6521 1.04533 30.9564C0.34963 30.2607 0.00118519 29.4234 0 28.4444V3.55556C0 2.57778 0.348444 1.74104 1.04533 1.04533C1.74222 0.34963 2.57896 0.00118519 3.55556 0H28.4444C29.4222 0 30.2596 0.348444 30.9564 1.04533C31.6533 1.74222 32.0012 2.57896 32 3.55556V28.4444C32 29.4222 31.6521 30.2596 30.9564 30.9564C30.2607 31.6533 29.4234 32.0012 28.4444 32H3.55556Z" fill="#007BFF" />
            </g>
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E9CFFF" />
            <defs>
                <clipPath id="clip0_1768_69713">
                    <rect width="32" height="32" rx="8" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}


const AddLeaveRadioCheckedIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z" fill="#007BFF" />
        </svg>

    )
}

const AddLeaveRadioIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z" fill="#E9CFFF" />
        </svg>

    )
}
