import {Grid} from '@mui/material'
import './restricted-leave.scss';
import { useNavigate } from 'react-router-dom';
import AdvanceTableCustom from '../../../components/advance-table-custom /AdvanceTableCustom';



const RestrictedLeave = ({ type }) => {
    const navigate = useNavigate();


    return (
        <>
            <Grid className='restricted-leave-main-container'>

                <Grid className='restricted-leave-main-wrapper'>
                    <Grid className='restricted-leave-top-btn-container'>
                        <h4>Restricted Leave</h4>

                        <Grid className='add-new-employee-btns'>
                            <button type="submit">Save</button>
                            <button onClick={() => navigate(-1)} type="button">Cancel</button>
                        </Grid>

                    </Grid>

                    <Grid className='restricted-leave-form-container-wrapper'>
                        <Grid className='restricted-leave-limit-msg'>
                            <p>Only 2 leaves can be availed. Please select accordingly.</p>
                        </Grid>
                        <AdvanceTableCustom/>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default RestrictedLeave
