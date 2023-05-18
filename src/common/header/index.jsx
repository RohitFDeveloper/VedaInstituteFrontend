/* eslint-disable no-unused-vars */

import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Divider, Drawer, Grid, List, ListItem, ListItemText, Stack } from '@mui/material';
// import Buttons from '../Button/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
// import Logo from './'
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
// import colors
import colors from 'assets/scss/_themes-vars.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../logo';

// const pages = ["Home", "About Us", "Pages", "Project", "News", "Contact"];
const pages2 = [
    {
        id: 1,
        title: 'Home',
        url: '/Home'
    },
    {
        id: 2,
        title: 'About Us',
        url: '/home'
    },
    {
        id: 3,
        title: 'Courses',
        url: '/'
    },
    {
        id: 4,
        title: 'Gallery',
        url: '/'
    },
    {
        id: 5,
        title: 'Job Portal',
        url: '/'
    },
    {
        id: 6,
        title: 'Our Topper',
        url: '/'
    },
    {
        id: 7,
        title: 'Scholarship',
        url: '/'
    },
    {
        id: 8,
        title: 'Contact US',
        url: '/'
    }
];

const online_Material = [
    {
        id: 1,
        title: 'Online Store',
        url: '/'
    },
    {
        id: 2,
        title: 'Online Test Series',
        url: '/'
    },
    {
        id: 3,
        title: 'Online Admission',
        url: '/'
    },
    {
        id: 4,
        title: 'Free Study Material',
        url: '/'
    }
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
    const color = colors;
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [header, setHeader] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader(true);
        } else if (window.scrollY > 70) {
            return setHeader(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    const style = {
        backgroundColor: '#ffff',
        position: 'relative',
        // position: header ? 'fixed' : 'stikcy',
        // top: header ? '6.5%' : '0%',
        transition: 'all 0.5s linear'
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    const textLine = {
        textAlign: 'center',
        fontWeight: '500',
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '2px',
            backgroundColor: color.secondary800,
            left: '0',
            bottom: '10px',
            transformOrigin: 'right top',
            transform: 'scale(0,1)',
            transition: 'color 0.5s ,transform 0.9s ease-out'
        },
        '&:hover::before ,&:focus::before': {
            transformOrigin: 'left top',
            transform: 'scale(1,1)'
        }
    };
    return (
        <AppBar sx={style}>
            <Container maxWidth="xl" sx={{ maxWidth: '100%' }}>
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <Logo width="100%" height="100vh" />
                    </Typography>

                    {/* ---------- For Mobile Screen ----------  */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'space-between'
                        }}
                    >
                        <IconButton
                            size="medium"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                            sx={{ backgroundColor: '#0fb3a7', order: '2' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexShrink: '0',
                                '& .MuiDrawer-paper': { backgroundColor: color.primaryMain },
                                position: 'relative'
                            }}
                            className="drawerPaper"
                        >
                            <List>
                                {pages2.map((page) => (
                                    <ListItem key={page.id} onClick={toggleDrawer(false)} sx={{ position: 'relative', color: '#f1f1f1' }}>
                                        <ListItemText primaryTypographyProps={{ position: 'relative' }}>
                                            <Typography component="div" variant="h6" sx={textLine}>
                                                <Link to={page.url} style={{ textDecoration: 'none' }}>
                                                    {page.title}
                                                </Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                            <IconButton onClick={toggleDrawer(false)} sx={{ position: 'absolute', right: '16px', top: '9px' }}>
                                <CloseIcon fontSize="medium" color="#010101" />
                            </IconButton>
                        </Drawer>
                        {/*------------- Company Logo for small Screen -------------- */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 1,
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            <Logo width="100%" height="40vh" />
                        </Typography>
                        {/*----------- Company Name  for small Screen------------*/}
                        {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 1,
                                display: { xs: 'none', sm: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            <Logo width="100%" height="40vh" />
                        </Typography> */}
                    </Box>
                    {/* ---------- Menus Items for large screen ----------- */}
                    <Grid container direction={'column'}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center'
                            }}
                        >
                            <Grid container direction={'row'} sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item>
                                    <List sx={{ display: 'flex', color: color.blackMain, pt: 2, pb: 0 }}>
                                        {online_Material.map((index) => (
                                            <ListItem key={online_Material.id}>
                                                <Button variant="outlined" sx={{ whiteSpace: 'nowrap' }} startIcon={<MenuBookIcon />}>
                                                    {index.title}
                                                </Button>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item>
                                    <List sx={{ display: 'flex', color: color.blackMain, pt: 2, pb: 0 }}>
                                        <ListItem>
                                            <Button>Login</Button>
                                        </ListItem>
                                        <Divider orientation="vertical" flexItem />
                                        <ListItem>
                                            <Button variant="contained">Register</Button>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center'
                            }}
                        >
                            <List sx={{ display: 'flex', height: '50px' }}>
                                {pages2.map((page2) => (
                                    <ListItem key={pages2.id}>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2,
                                                color: '#1b1d21',
                                                display: 'block',
                                                textTransform: 'capitalize',
                                                fontWeight: '600',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Link to={page2.url} style={{ textDecoration: 'none' }}>
                                                {page2.title}
                                            </Link>
                                        </Button>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                    {/* --------------- Search Button --------------- */}
                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Stack direction="row" spacing={2}>
                            <Stack sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                                <Buttons btnName="Get a Quotes" bg="#ebe7e7" clor="#00a499" className="ButtonHover" />
                            </Stack>

                            <Stack sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Tooltip title="Search">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar sx={AvatarCss}>
                                            <SearchIcon />
                                        </Avatar>
                                    </IconButton>
                                </Tooltip>  
                    {/* </Stack>
                        </Stack>
                    // </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
