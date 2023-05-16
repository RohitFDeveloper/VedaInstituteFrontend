/* eslint-disable no-unused-vars */
import React from 'react';

// Material-ui
import { Box, Grid, List, ListItemAvatar, Avatar, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Container } from '@mui/system';
import Icon from '@mui/material/Icon';
// icons
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaLinkedinIn, FaPinterestP, FaFacebookF } from 'react-icons/fa';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

// project imports
import colors from 'assets/scss/_themes-vars.module.scss';

// others
const color = colors;

// rendering data
const infoData = [
    {
        id: 1,
        type: 'number',
        title: '0731-546123',
        icon: 'phone'
    },
    {
        id: 2,
        type: 'email',
        title: 'nabh@nabhtech.com',
        icon: 'email'
    }
];

const TopHeader = () => {
    const style = {
        // backgroundColor: color.primaryDark,
        backgroundColor: color.primary800,
        width: '100%'
    };
    const AvatarCss = {
        mr: 1,
        width: '30px',
        height: '30px',
        backgroundColor: color.paper,
        color: color.secondaryDark,
        '&:hover': {
            color: color.primaryMain
        }
    };
    return (
        <>
            <Box sx={style}>
                <Container style={{ padding: '9px 15px', m: 0 }} maxWidth="xl">
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" color={color.paper}>
                        <Grid item sx={{ justifyContent: { sm: 'center' } }}>
                            <Grid container direction="row">
                                <Grid
                                    item
                                    sx={{
                                        color: color.paper,
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        display: { xs: 'flex', lg: 'flex' },
                                        flexGrow: 1
                                    }}
                                >
                                    Grow Faster, Higher and Stronger!!
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                {/*-------------Conatct Info --------- */}
                                {infoData.map((item, index) => {
                                    return (
                                        <Grid item key={index}>
                                            <List sx={{ py: 0, display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                                                <ListItem sx={{ py: 0, pl: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: '25px', color: color.paper }}>
                                                        <Icon fontSize="small">{item.icon}</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText>{item.title}</ListItemText>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    );
                                })}
                                {/*------------  Social Media Icons ----------------  */}
                                <Grid item>
                                    <List sx={{ py: 0, display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
                                        <ListItem sx={{ p: 0 }}>
                                            <ListItemAvatar sx={{ display: 'flex' }}>
                                                <Avatar sx={AvatarCss}>
                                                    <FaFacebookF fontSize="medium" />
                                                </Avatar>
                                                <Avatar sx={AvatarCss}>
                                                    <TwitterIcon fontSize="small" />
                                                </Avatar>
                                                <Avatar sx={AvatarCss}>
                                                    <InstagramIcon fontSize="small" />
                                                </Avatar>
                                                <Avatar sx={AvatarCss}>
                                                    <FaLinkedinIn fontSize="medium" fontWeight="600" />
                                                </Avatar>
                                                <Avatar sx={AvatarCss}>
                                                    <FaPinterestP fontSize="medium" />
                                                </Avatar>
                                            </ListItemAvatar>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default TopHeader;
