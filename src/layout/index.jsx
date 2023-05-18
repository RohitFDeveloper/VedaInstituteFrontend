/* eslint-disable no-unused-vars */
// import { Outlet } from 'react-router-dom';
// import React from 'react';
// import { lazy } from 'react';

import Header from '../common/header/index.jsx';
import TopHeader from '../common/top-header/index.jsx';

// Material-ui
import { Grid } from '@mui/material';
import Home from 'pages/home/index';
// const Header = lazy(() => import('./Header'));
// const Header = lazy(() => import('./Header'));

const Layout = () => {
    return (
        <>
            <Grid container direction="column" spacing={0} sx={{ maxWidth: '100%', position: 'relative' }}>
                <Grid item>
                    <TopHeader />
                </Grid>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <Home />
                </Grid>
                <Grid item>footer</Grid>
            </Grid>
        </>
    );
};

export default Layout;
