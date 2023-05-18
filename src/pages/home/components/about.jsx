/* eslint-disable no-unused-vars */
import React from 'react';
// Material-ui
import { Grid, Typography, Avatar } from '@mui/material';

// project imports
import colors from 'assets/scss/_themes-vars.module.scss';
import envVariables from 'environment.js';

const color = colors;
const style = {
    mainContianer: {
        backgroundColor: color.paper,
        p: 4
    },
    wlcmMsg: {
        fontSize: '1rem',
        textTransform: 'uppercase',
        color: color.primaryDark
    },
    institName: {
        fontWeight: 600,
        textTransform: 'uppercase',
        color: color.secondaryDark
    },
    abtInstit: {
        fontSize: '1rem',
        textAlign: 'justify',
        mt: 2
    }
};

const About = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="space-between" spacing={2} sx={style.mainContianer}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Typography variant="subtitle1" sx={style.wlcmMsg}>
                        Welcome To
                    </Typography>
                    <Typography variant="h5" sx={style.institName}>
                        {envVariables.instituteName}
                    </Typography>
                    <Typography sx={style.abtInstit}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam eius amet ipsam at recusandae quaerat
                        aperiam, enim, iusto quas maxime ea, id nulla. Veritatis, quia deserunt? Vel, corrupti cupiditate? <br />
                        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quam eius amet ipsam at recusandae quaerat
                        aperiam, enim, iusto quas maxime ea, id nulla. Veritatis, quia deserunt? Vel, corrupti cupiditate? Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Eligendi quam eius amet ipsam at recusandae quaerat aperiam, enim, iusto quas
                        maxime ea, id nulla. Veritatis, quia deserunt? Vel, corrupti cupiditate? <br /> <br /> Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Eligendi quam eius amet ipsam at recusandae quaerat aperiam, enim, iusto quas maxime
                        ea, id nulla. Veritatis, quia deserunt? Vel, corrupti cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Eligendi quam eius amet ipsam at recusandae quaerat aperiam, enim, iusto quas maxime ea, id nulla. Veritatis,
                        quia deserunt? Vel, corrupti cupiditate?
                    </Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Avatar
                        alt={envVariables.instituteName}
                        src="https://ritchennai.org/img/rit-about.jpg"
                        variant="rounded"
                        sx={{ width: '100%', height: '100%' }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default About;
