import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './employee-directory.scss'
import FilterCustom from '../../components/filter-custom/FilterCustom'


const dummyEmployeeArray = [
    {
        name: 'Prabhash Mishra',
        designation: 'Lead UIUX Designer',
        empId: 'AV/24/724',
        dob: '18/10/1994',
        phone: '905750250',
        email: 'prabhash@gmail.com'
    },
    {
        name: 'Ram Singh',
        designation: 'Full Stack Developer',
        empId: 'AV/24/424',
        dob: '11/04/1998',
        phone: '805558250',
        email: 'ram@gmail.com'
    },
    {
        name: 'Prabhash Mishra',
        designation: 'Lead UIUX Designer',
        empId: 'AV/24/724',
        dob: '18/10/1994',
        phone: '905750250',
        email: 'prabhash@gmail.com'
    },
    {
        name: 'Ram Singh',
        designation: 'Full Stack Developer',
        empId: 'AV/24/424',
        dob: '11/04/1998',
        phone: '805558250',
        email: 'ram@gmail.com'
    },
    {
        name: 'Prabhash Mishra',
        designation: 'Lead UIUX Designer',
        empId: 'AV/24/724',
        dob: '18/10/1994',
        phone: '905750250',
        email: 'prabhash@gmail.com'
    },
    {
        name: 'Ram Singh',
        designation: 'Full Stack Developer',
        empId: 'AV/24/424',
        dob: '11/04/1998',
        phone: '805558250',
        email: 'ram@gmail.com'
    },
    {
        name: 'Prabhash Mishra',
        designation: 'Lead UIUX Designer',
        empId: 'AV/24/724',
        dob: '18/10/1994',
        phone: '905750250',
        email: 'prabhash@gmail.com'
    },
    {
        name: 'Ram Singh',
        designation: 'Full Stack Developer',
        empId: 'AV/24/424',
        dob: '11/04/1998',
        phone: '805558250',
        email: 'ram@gmail.com'
    },
]

const EmployeeDirectory = () => {
    const [locationFilter, setLocationFilter] = useState('');
    return (
        <>
            <Grid className='employee-directory-main-container'>

                <Grid className='add-new-employee-btn-container'>
                    <h4>Employee Directory</h4>
                </Grid>

                <Grid className='add-new-employee-filter-container'>
                    <Grid className='add-new-employee-filter-wrapper'>
                        <Grid className='add-new-employee-filter'>
                            <p>Name</p>
                            <input
                                type='text'
                                className='employee-directory-input-tag'
                                name="specialization"
                                id="qualification-form-control-3"
                                placeholder="Name"
                            />
                        </Grid>
                        <Grid className='add-new-employee-filter'>
                            <p>Department</p>
                            <FilterCustom
                                label={'Department'}
                                filterKey={locationFilter}
                                setFilterKey={setLocationFilter}
                            />
                        </Grid>

                        <Grid className='add-new-employee-filter'>
                            <p>Employee Status</p>
                            <FilterCustom
                                label={'Employee Status'}
                                filterKey={locationFilter}
                                setFilterKey={setLocationFilter}
                            />
                        </Grid>

                        <Grid className='add-new-employee-reset-btn'>
                            <p style={{ visibility: 'hidden' }}>Reset</p>
                            <button type="button">Reset</button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className='employee-directory-cards-main-container'>
                    <Grid className='employee-directory-cards-wrapper'>
                        <Grid className='employee-directory-cards-row'>
                            {
                                dummyEmployeeArray?.map((emp, index) => (
                                    <Grid key={index} className='employee-directory-card'>
                                        <Grid>
                                            <Grid className='employee-directory-card-top-banner-back'>
                                                <Grid className='employee-directory-card-img'>
                                                    <img src="https://picsum.photos/200/300/" alt="card-img" />
                                                </Grid>
                                            </Grid>
                                            <Grid className='employee-directory-card-details-container'>
                                                <Grid className='employee-directory-card-name-designation'>
                                                    <h4>{emp?.name}</h4>
                                                    <p>{emp?.designation}</p>
                                                </Grid>
                                                <Grid className='employee-directory-card-detail-list'>

                                                    <Grid className='employee-directory-card-detail-row'>
                                                        <Grid className='employee-directory-card-detail-icon'>
                                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.6 7.875H13.6V6.125H9.6V7.875ZM9.6 5.25H13.6V3.5H9.6V5.25ZM2.4 10.5H8.8V10.0187C8.8 9.3625 8.50667 8.84129 7.92 8.45512C7.33333 8.06896 6.56 7.87558 5.6 7.875C4.64 7.875 3.86667 8.06837 3.28 8.45512C2.69333 8.84187 2.4 9.36308 2.4 10.0187V10.5ZM5.6 7C6.04 7 6.4168 6.82879 6.7304 6.48637C7.044 6.14396 7.20053 5.73183 7.2 5.25C7.2 4.76875 7.04347 4.35692 6.7304 4.0145C6.41733 3.67208 6.04053 3.50058 5.6 3.5C5.16 3.5 4.78347 3.6715 4.4704 4.0145C4.15733 4.3575 4.00053 4.76933 4 5.25C4 5.73125 4.1568 6.14337 4.4704 6.48637C4.784 6.82937 5.16053 7.00058 5.6 7ZM1.6 14C1.16 14 0.783467 13.8288 0.4704 13.4864C0.157333 13.144 0.000533333 12.7318 0 12.25V1.75C0 1.26875 0.1568 0.856916 0.4704 0.5145C0.784 0.172083 1.16053 0.000583333 1.6 0H14.4C14.84 0 15.2168 0.1715 15.5304 0.5145C15.844 0.8575 16.0005 1.26933 16 1.75V12.25C16 12.7312 15.8435 13.1434 15.5304 13.4864C15.2173 13.8294 14.8405 14.0006 14.4 14H1.6ZM1.6 12.25H14.4V1.75H1.6V12.25Z" fill="black" />
                                                            </svg>
                                                        </Grid>
                                                        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.00029 2.92003C2.17363 2.91995 2.34526 2.88573 2.50538 2.81932C2.6655 2.75291 2.81098 2.65562 2.93349 2.53299C3.05601 2.41036 3.15317 2.2648 3.21944 2.10462C3.2857 1.94444 3.31977 1.77277 3.31969 1.59943C3.31961 1.42608 3.28539 1.25445 3.21898 1.09433C3.15257 0.934213 3.05527 0.788742 2.93264 0.666224C2.81002 0.543707 2.66446 0.446542 2.50428 0.380279C2.3441 0.314015 2.17243 0.279951 1.99909 0.280029C1.649 0.280189 1.31332 0.419412 1.06588 0.667073C0.818447 0.914733 0.679529 1.25054 0.679688 1.60063C0.679847 1.95072 0.81907 2.2864 1.06673 2.53383C1.31439 2.78127 1.6502 2.92019 2.00029 2.92003ZM2.00029 5.08003C1.65004 5.08003 1.31414 5.21916 1.06648 5.46682C0.818822 5.71449 0.679688 6.05038 0.679688 6.40063C0.679688 6.75087 0.818822 7.08677 1.06648 7.33443C1.31414 7.5821 1.65004 7.72123 2.00029 7.72123C2.35053 7.72123 2.68643 7.5821 2.93409 7.33443C3.18175 7.08677 3.32089 6.75087 3.32089 6.40063C3.32089 6.05038 3.18175 5.71449 2.93409 5.46682C2.68643 5.21916 2.35053 5.08003 2.00029 5.08003Z" fill="black" />
                                                        </svg>
                                                        <span>{emp?.empId}</span>
                                                    </Grid>

                                                    <Grid className='employee-directory-card-detail-row'>
                                                        <Grid className='employee-directory-card-detail-icon'>
                                                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16.0003 15.1667V8.50001C16.0003 8.05798 15.8247 7.63406 15.5122 7.3215C15.1996 7.00894 14.7757 6.83334 14.3337 6.83334H4.33366C3.89163 6.83334 3.46771 7.00894 3.15515 7.3215C2.84259 7.63406 2.66699 8.05798 2.66699 8.50001V15.1667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M2.66667 11C2.66667 11 3.08333 10.1667 4.33333 10.1667C5.58333 10.1667 6.41667 11.8333 7.66667 11.8333C8.91667 11.8333 9.75 10.1667 11 10.1667C12.25 10.1667 13.0833 11.8333 14.3333 11.8333C15.5833 11.8333 16 11 16 11M1 15.1667H17.6667M5.16667 4.33333V6.83333M9.33333 4.33333V6.83333M13.5 4.33333V6.83333M5.16667 1H5.175M9.33333 1H9.34167M13.5 1H13.5083" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Grid>
                                                        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.00029 2.92003C2.17363 2.91995 2.34526 2.88573 2.50538 2.81932C2.6655 2.75291 2.81098 2.65562 2.93349 2.53299C3.05601 2.41036 3.15317 2.2648 3.21944 2.10462C3.2857 1.94444 3.31977 1.77277 3.31969 1.59943C3.31961 1.42608 3.28539 1.25445 3.21898 1.09433C3.15257 0.934213 3.05527 0.788742 2.93264 0.666224C2.81002 0.543707 2.66446 0.446542 2.50428 0.380279C2.3441 0.314015 2.17243 0.279951 1.99909 0.280029C1.649 0.280189 1.31332 0.419412 1.06588 0.667073C0.818447 0.914733 0.679529 1.25054 0.679688 1.60063C0.679847 1.95072 0.81907 2.2864 1.06673 2.53383C1.31439 2.78127 1.6502 2.92019 2.00029 2.92003ZM2.00029 5.08003C1.65004 5.08003 1.31414 5.21916 1.06648 5.46682C0.818822 5.71449 0.679688 6.05038 0.679688 6.40063C0.679688 6.75087 0.818822 7.08677 1.06648 7.33443C1.31414 7.5821 1.65004 7.72123 2.00029 7.72123C2.35053 7.72123 2.68643 7.5821 2.93409 7.33443C3.18175 7.08677 3.32089 6.75087 3.32089 6.40063C3.32089 6.05038 3.18175 5.71449 2.93409 5.46682C2.68643 5.21916 2.35053 5.08003 2.00029 5.08003Z" fill="black" />
                                                        </svg>
                                                        <span>{emp?.dob}</span>
                                                    </Grid>

                                                    <Grid className='employee-directory-card-detail-row'>
                                                        <Grid className='employee-directory-card-detail-icon'>
                                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.88889 0H1.11111C0.816426 0 0.533811 0.117063 0.325437 0.325437C0.117063 0.533811 0 0.816426 0 1.11111V14.4444C0 14.7391 0.117063 15.0217 0.325437 15.2301C0.533811 15.4385 0.816426 15.5556 1.11111 15.5556H8.88889C9.18357 15.5556 9.46619 15.4385 9.67456 15.2301C9.88294 15.0217 10 14.7391 10 14.4444V1.11111C10 0.816426 9.88294 0.533811 9.67456 0.325437C9.46619 0.117063 9.18357 0 8.88889 0ZM5.55556 14.4444H4.44444V13.3333H5.55556V14.4444ZM1.11111 12.2222V1.11111H8.88889V12.2222H1.11111Z" fill="black" />
                                                            </svg>
                                                        </Grid>
                                                        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.00029 2.92003C2.17363 2.91995 2.34526 2.88573 2.50538 2.81932C2.6655 2.75291 2.81098 2.65562 2.93349 2.53299C3.05601 2.41036 3.15317 2.2648 3.21944 2.10462C3.2857 1.94444 3.31977 1.77277 3.31969 1.59943C3.31961 1.42608 3.28539 1.25445 3.21898 1.09433C3.15257 0.934213 3.05527 0.788742 2.93264 0.666224C2.81002 0.543707 2.66446 0.446542 2.50428 0.380279C2.3441 0.314015 2.17243 0.279951 1.99909 0.280029C1.649 0.280189 1.31332 0.419412 1.06588 0.667073C0.818447 0.914733 0.679529 1.25054 0.679688 1.60063C0.679847 1.95072 0.81907 2.2864 1.06673 2.53383C1.31439 2.78127 1.6502 2.92019 2.00029 2.92003ZM2.00029 5.08003C1.65004 5.08003 1.31414 5.21916 1.06648 5.46682C0.818822 5.71449 0.679688 6.05038 0.679688 6.40063C0.679688 6.75087 0.818822 7.08677 1.06648 7.33443C1.31414 7.5821 1.65004 7.72123 2.00029 7.72123C2.35053 7.72123 2.68643 7.5821 2.93409 7.33443C3.18175 7.08677 3.32089 6.75087 3.32089 6.40063C3.32089 6.05038 3.18175 5.71449 2.93409 5.46682C2.68643 5.21916 2.35053 5.08003 2.00029 5.08003Z" fill="black" />
                                                        </svg>
                                                        <span>{emp?.phone}</span>
                                                    </Grid>

                                                    <Grid className='employee-directory-card-detail-row'>
                                                        <Grid className='employee-directory-card-detail-icon'>
                                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 8.50014C16 6.93303 15.5092 5.40528 14.5964 4.13146C13.6836 2.85764 12.3947 1.90174 10.9108 1.39801C9.42683 0.894291 7.82237 0.868052 6.32275 1.32298C4.82313 1.77791 3.50369 2.69116 2.54973 3.93445C1.59577 5.17774 1.05522 6.68863 1.00401 8.25489C0.952794 9.82116 1.39348 11.3641 2.26419 12.6671C3.13489 13.97 4.39186 14.9675 5.85855 15.5195C7.32525 16.0714 8.92799 16.15 10.4417 15.7443" stroke="black" strokeLinecap="round" />
                                                                <path d="M8.50033 11.8335C10.3413 11.8335 11.8337 10.3411 11.8337 8.50014C11.8337 6.65919 10.3413 5.16681 8.50033 5.16681C6.65938 5.16681 5.16699 6.65919 5.16699 8.50014C5.16699 10.3411 6.65938 11.8335 8.50033 11.8335Z" stroke="black" />
                                                                <path d="M11.833 6.00012V9.75012C11.833 10.3027 12.0525 10.8326 12.4432 11.2233C12.8339 11.614 13.3638 11.8335 13.9163 11.8335C14.4689 11.8335 14.9988 11.614 15.3895 11.2233C15.7802 10.8326 15.9997 10.3027 15.9997 9.75012V8.50012" stroke="black" strokeLinecap="round" />
                                                            </svg>
                                                        </Grid>
                                                        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.00029 2.92003C2.17363 2.91995 2.34526 2.88573 2.50538 2.81932C2.6655 2.75291 2.81098 2.65562 2.93349 2.53299C3.05601 2.41036 3.15317 2.2648 3.21944 2.10462C3.2857 1.94444 3.31977 1.77277 3.31969 1.59943C3.31961 1.42608 3.28539 1.25445 3.21898 1.09433C3.15257 0.934213 3.05527 0.788742 2.93264 0.666224C2.81002 0.543707 2.66446 0.446542 2.50428 0.380279C2.3441 0.314015 2.17243 0.279951 1.99909 0.280029C1.649 0.280189 1.31332 0.419412 1.06588 0.667073C0.818447 0.914733 0.679529 1.25054 0.679688 1.60063C0.679847 1.95072 0.81907 2.2864 1.06673 2.53383C1.31439 2.78127 1.6502 2.92019 2.00029 2.92003ZM2.00029 5.08003C1.65004 5.08003 1.31414 5.21916 1.06648 5.46682C0.818822 5.71449 0.679688 6.05038 0.679688 6.40063C0.679688 6.75087 0.818822 7.08677 1.06648 7.33443C1.31414 7.5821 1.65004 7.72123 2.00029 7.72123C2.35053 7.72123 2.68643 7.5821 2.93409 7.33443C3.18175 7.08677 3.32089 6.75087 3.32089 6.40063C3.32089 6.05038 3.18175 5.71449 2.93409 5.46682C2.68643 5.21916 2.35053 5.08003 2.00029 5.08003Z" fill="black" />
                                                        </svg>
                                                        <span>{emp?.email}</span>
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid className='employee-directory-card-bottom-banner'>

                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default EmployeeDirectory
