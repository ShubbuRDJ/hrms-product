import { Grid } from '@mui/material'
import './view-location.scss';
import { useNavigate } from 'react-router-dom';


const ViewLocation = () => {
    const navigate = useNavigate();

    return (
        <>
            <Grid className='location-view-main-container'>

                <Grid className='location-view-main-wrapper'>

                    <Grid className='location-view-top-btn-container'>
                        <h4>View Location</h4>
                        <svg onClick={() => navigate(-1)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.01172 14.9891L8.00239 7.99848L14.9931 14.9891M14.9931 1.00781L8.00105 7.99848L1.01172 1.00781" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </Grid>


                    <Grid className='location-view-list-wrapper'>
                        <Grid className='location-view-list-row'>
                            <Grid className='location-view-list-item'>
                                <p>Location</p>
                                <p>Loram Ipsum texttexted</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Phone no</p>
                                <p>4792398458</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Location Head</p>
                                <p>Loram Ipsum texttexted</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Fax No</p>
                                <p>7283642786</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>City</p>
                                <p>Noida</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>State</p>
                                <p>Uttar Pradesh</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Country</p>
                                <p>India</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Zip Code</p>
                                <p>213232</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Added By</p>
                                <p>Text</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Email</p>
                                <p>prabhash@gmail.com</p>
                            </Grid>
                            <Grid className='location-view-list-item'>
                                <p>Address Line 1</p>
                                <p>Noida UP India</p>
                            </Grid>
                            <Grid className='location-view-list-item' >
                                <p>Address Line 2</p>
                                <p>Noida UP India</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default ViewLocation
