import { Grid } from '@mui/material'
import './view-leave.scss';
import { useNavigate } from 'react-router-dom';




const ViewLeave = ({ type }) => {
    const navigate = useNavigate();

    return (
        <>
            <Grid className='view-leave-main-container'>

                <Grid className='view-leave-main-wrapper' >
                    <Grid className='view-leave-top-btn-container'>
                        <h4>
                            <svg onClick={() => navigate(-1)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1768_67399)">
                                    <path d="M16 8.5H1.95312L8.10156 14.6484L7.39844 15.3516L0.046875 8L7.39844 0.648438L8.10156 1.35156L1.95312 7.5H16V8.5Z" fill="#212121" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1768_67399">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Leave Details</span>
                        </h4>

                        <Grid className='view-leave-btns'>
                            <button className='view-leave-chat-btn' onClick={() => navigate(-1)} type="button">
                                <span>Chat</span>
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8C18 12.3492 13.9703 15.875 9 15.875C8.10856 15.877 7.22076 15.7612 6.35962 15.5308C5.70262 15.8638 4.194 16.5028 1.656 16.919C1.431 16.955 1.26 16.721 1.34888 16.5117C1.74713 15.5712 2.10713 14.318 2.21513 13.175C0.837 11.7913 0 9.98 0 8C0 3.65075 4.02975 0.125 9 0.125C13.9703 0.125 18 3.65075 18 8ZM5.625 8C5.625 7.70163 5.50647 7.41548 5.2955 7.2045C5.08452 6.99353 4.79837 6.875 4.5 6.875C4.20163 6.875 3.91548 6.99353 3.7045 7.2045C3.49353 7.41548 3.375 7.70163 3.375 8C3.375 8.29837 3.49353 8.58452 3.7045 8.7955C3.91548 9.00647 4.20163 9.125 4.5 9.125C4.79837 9.125 5.08452 9.00647 5.2955 8.7955C5.50647 8.58452 5.625 8.29837 5.625 8ZM10.125 8C10.125 7.70163 10.0065 7.41548 9.7955 7.2045C9.58452 6.99353 9.29837 6.875 9 6.875C8.70163 6.875 8.41548 6.99353 8.2045 7.2045C7.99353 7.41548 7.875 7.70163 7.875 8C7.875 8.29837 7.99353 8.58452 8.2045 8.7955C8.41548 9.00647 8.70163 9.125 9 9.125C9.29837 9.125 9.58452 9.00647 9.7955 8.7955C10.0065 8.58452 10.125 8.29837 10.125 8ZM13.5 9.125C13.7984 9.125 14.0845 9.00647 14.2955 8.7955C14.5065 8.58452 14.625 8.29837 14.625 8C14.625 7.70163 14.5065 7.41548 14.2955 7.2045C14.0845 6.99353 13.7984 6.875 13.5 6.875C13.2016 6.875 12.9155 6.99353 12.7045 7.2045C12.4935 7.41548 12.375 7.70163 12.375 8C12.375 8.29837 12.4935 8.58452 12.7045 8.7955C12.9155 9.00647 13.2016 9.125 13.5 9.125Z" fill="#007BFF" />
                                </svg>

                                <Grid className='view-leave-chat-red-bullet'>
                                    <span>4</span>
                                </Grid>
                            </button>
                        </Grid>

                    </Grid>

                    <Grid className='view-leave-form-container-wrapper'>
                        <Grid className='view-leave-left-part'>
                            <h4>Profile</h4>
                            <ul>
                                <li>
                                    <span>Leave Type</span>
                                    <p>Casual Leave</p>
                                </li>
                                <li>
                                    <span>Start Date</span>
                                    <p>10- Feb - 2024</p>
                                </li>
                                <li>
                                    <span>End Date</span>
                                    <p>10- Feb - 2024</p>
                                </li>
                                <li>
                                    <span>Remark</span>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </li>

                                <li>
                                    <span>Upload Document</span>
                                    <Grid className='view-leave-document-card'>
                                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 12H2V13H2.8C3.1 13 3.3 12.8 3.3 12.5C3.3 12.2 3.1 12 2.8 12ZM8 0H0V16H13V5L8 0ZM4.2 12.6C4.2 13.4 3.6 14 2.8 14H2V15H1V11H2.8C3.6 11 4.2 11.6 4.2 12.4V12.6ZM8.3 13.1C8.3 14.1 7.5 15 6.4 15H5V11H6.4C7.4 11 8.3 11.8 8.3 12.9V13.1ZM12 12H10V13H11.5V14H10V15H9V11H12V12ZM12 10H1V1H8V5H12V10ZM6.4 12H6V14H6.4C7 14 7.4 13.6 7.4 13C7.4 12.4 6.9 12 6.4 12Z" fill="#219653" />
                                        </svg>
                                        <h6>Card.pdf</h6>
                                    </Grid>
                                </li>

                                <li>
                                    <span>Leave Reason</span>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </li>
                            </ul>
                        </Grid>
                        <Grid className='view-leave-right-part'>
                            <Grid className='view-leave-acknowledge'>
                                <h4>Acknowledge</h4>
                                <ul>
                                    <li>Jatin Sharma</li>
                                    <li>Suryansh  Saraswat</li>
                                    <li>Garvita Saraswat</li>
                                    <li>Prabash Singh</li>
                                </ul>
                                <Grid className='view-leave-acknowledge-hr'></Grid>
                            </Grid>
                            <Grid className='view-leave-approval-status'>
                                <h4>Approval Status</h4>
                                <Grid className='view-leave-approval-status-item-container'>
                                    <Grid className='view-leave-approval-status-item'>
                                        <p>Suryansh  Saraswat</p>
                                        <button type="button">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 10.9991L19.56 8.21906L19.9 4.53906L16.29 3.71906L14.4 0.539062L11 1.99906L7.6 0.539062L5.71 3.71906L2.1 4.52906L2.44 8.20906L0 10.9991L2.44 13.7791L2.1 17.4691L5.71 18.2891L7.6 21.4691L11 19.9991L14.4 21.4591L16.29 18.2791L19.9 17.4591L19.56 13.7791L22 10.9991ZM9 15.9991L5 11.9991L6.41 10.5891L9 13.1691L15.59 6.57906L17 7.99906L9 15.9991Z" fill="#219653" />
                                            </svg>
                                            <h4>Approved</h4>
                                        </button>
                                    </Grid>
                                    <Grid className='view-leave-approval-status-item'>
                                        <p>Suryansh’s Note</p>
                                        <span> Hi Garvita, your leaves are Approved Now.</span>
                                    </Grid>
                                    <Grid className='view-leave-approval-status-item'>
                                        <p>HR (Anita Yadav)</p>
                                        <button className='view-leave-pending-btn' type="button">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#FFCE20" />
                                            </svg>
                                            <h4>Pending</h4>
                                        </button>
                                    </Grid>
                                    <Grid className='view-leave-approval-status-item'>
                                        <p>HR’s Note</p>
                                        <span>None</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default ViewLeave
