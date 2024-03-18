import { Grid } from '@mui/material';
import React, { memo } from 'react';
import './filter-for-resource-component.scss';

function FilterForResourceComponent() {
    const accountManagerDropdownArray = ['Shubhankar', 'Suryansh', 'Auresh', 'Ashish',];
    const softwareDeveloperDropdownArray = ['Python', 'ReactJs', 'AngularJs', 'NodeJs',];
    const [selectResource, setSelectResource] = React.useState('All');
    const [openDrop, setOpenDrop] = React.useState(false);
    const [openSoftwareDeveloperDrop, setOpenSoftwareDeveloperDrop] = React.useState(false);
    const [openAccountManagerDrop, setOpenAccountManagerDrop] = React.useState(false);
    return (
        <div className="filter-for-resource-component">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={(e) => { e.preventDefault(); setOpenDrop(!openDrop); setOpenAccountManagerDrop(false); setOpenSoftwareDeveloperDrop(false) }} className="filter-for-resource-component-btn">
                <p>{selectResource}</p>
                {!openDrop ? <svg style={{ marginRight: '0.6rem' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg> :
                    <svg style={{ marginRight: '0.6rem' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.07992 15.0498L10.5999 8.5298C11.3699 7.7598 12.6299 7.7598 13.3999 8.5298L19.9199 15.0498" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
            </div>
            <div id="myfilter-for-resource-component" className="filter-for-resource-component-content" style={{ display: `${openDrop ? 'block' : 'none'}`, marginTop: '0.1rem', borderRadius: '0.2rem' }}>
                <Grid style={{ height: '2.56rem', cursor: 'pointer', display: 'flex', borderBottom: '1px solid #DDD', padding: '0', alignItems: 'center', paddingLeft: '1rem' }} onClick={() => { setSelectResource(<p style={{ color: '#000' }}>All</p>); setOpenDrop(!openDrop); setOpenAccountManagerDrop(false); setOpenSoftwareDeveloperDrop(false); }}>
                    <p style={{ color: '#232323', fontWeight: '500', fontSize: '1.125rem' }}>All</p>
                </Grid>
                <Grid className='dashboard-all-month-filter-for-resource-component-content'>
                    <p style={{ color: '#232323', fontWeight: '500', fontSize: '1.125rem' }} onClick={() => {setOpenAccountManagerDrop(!openAccountManagerDrop); setOpenSoftwareDeveloperDrop(false);}}>Account Manager</p>
                </Grid>
                <Grid className='dashboard-all-month-filter-for-resource-component-content'>
                    <p style={{ color: '#232323', fontWeight: '500', fontSize: '1.125rem' }} onClick={() => {setOpenSoftwareDeveloperDrop(!openSoftwareDeveloperDrop); setOpenAccountManagerDrop(false);}}>Software Developer</p>
                </Grid>
                <Grid style={{ height: '2.56rem', cursor: 'pointer', display: 'flex', borderBottom: '1px solid #DDD', padding: '0', alignItems: 'center', paddingLeft: '1rem' }} onClick={() => { setSelectResource(<p style={{ color: '#000' }}>Business Analyst</p>); setOpenDrop(!openDrop); setOpenAccountManagerDrop(false); setOpenSoftwareDeveloperDrop(false); }}>
                    <p style={{ color: '#232323', fontWeight: '500', fontSize: '1.125rem' }}>Business Analyst</p>
                </Grid>
                <Grid style={{ height: '2.56rem', cursor: 'pointer', display: 'flex', borderBottom: '1px solid #DDD', padding: '0', alignItems: 'center', paddingLeft: '1rem' }} onClick={() => { setSelectResource(<p style={{ color: '#000' }}>Project Manager</p>); setOpenDrop(!openDrop); setOpenAccountManagerDrop(false); setOpenSoftwareDeveloperDrop(false); }}>
                    <p style={{ color: '#232323', fontWeight: '500', fontSize: '1.125rem' }}>Project Manager</p>
                </Grid>
            </div>
            <Grid className='dashboard-all-accountManager-filter-for-resource-component-container' style={{ display: `${openAccountManagerDrop ? 'block' : 'none'}` }}>
                {
                    accountManagerDropdownArray?.map((AM, index) => (
                        <Grid key={index + 1} style={{ height: '2.56rem', cursor: 'pointer', display: 'flex', borderBottom: '1px solid #DDD', padding: '0', alignItems: 'center', paddingLeft: '1rem' }} onClick={() => { setSelectResource(<p style={{ color: '#000' }}>{AM}</p>); setOpenDrop(!openDrop); setOpenAccountManagerDrop(!openAccountManagerDrop); }}>
                            <p style={{ color: '#232323', fontWeight: '500', fontSize: '1.125rem' }}>{AM}</p>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid className='dashboard-all-SoftwareDeveloper-filter-for-resource-component-container' style={{ display: `${openSoftwareDeveloperDrop ? 'block' : 'none'}` }}>
                {
                    softwareDeveloperDropdownArray?.map((SDE, index) => (
                        <Grid key={index + 1} style={{ height: '2.56rem', cursor: 'pointer', display: 'flex', borderBottom: '1px solid #DDD', padding: '0', alignItems: 'center', paddingLeft: '1rem' }} onClick={() => { setSelectResource(<p style={{ color: '#000' }}>{SDE}</p>); setOpenDrop(!openDrop); setOpenSoftwareDeveloperDrop(!openSoftwareDeveloperDrop); }}>
                            <p style={{ color: '#232323', fontWeight: '500', fontSize: '1.125rem' }}>{SDE}</p>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default memo(FilterForResourceComponent)
