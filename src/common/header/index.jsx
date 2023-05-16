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
import { Drawer, List, ListItem, ListItemText, Stack } from '@mui/material';
// import Buttons from '../Button/Button';

// import Logo from './'
import SearchIcon from '@mui/icons-material/Search';
// import colors
import colors from 'assets/scss/_themes-vars.module.scss';
// import primary from '../style.scss';
// import secondary from '../style.scss';
import { Link } from 'react-router-dom';
import Logo from '../logo';

// const pages = ["Home", "About Us", "Pages", "Project", "News", "Contact"];
const pages2 = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Product',
        url: '/contact'
    },
    {
        id: 3,
        title: 'Our Services',
        url: '/contact'
    },
    {
        id: 4,
        title: 'About Us',
        url: '/about_us'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
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
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/test"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <Logo width="100%" height="50vh" />
                    </Typography>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/test"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            textDecoration: 'none'
                        }}
                    >
                        <Stack direction="column" fontWeight="600">
                            <Stack sx={{ color: '#01948a', lineHeight: '1.3' }}>Nabh</Stack>
                            <Stack sx={{ color: '#ec6e33', lineHeight: '1.3' }}>Technology</Stack>
                        </Stack>
                    </Typography> */}
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
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center'
                        }}
                    >
                        {pages2.map((page2) => (
                            <Link to={page2.url} style={{ textDecoration: 'none' }}>
                                <Button
                                    key={pages2.id}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: '#1b1d21',
                                        display: 'block',
                                        textTransform: 'capitalize',
                                        fontWeight: '600'
                                    }}
                                >
                                    {page2.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
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
                                {/* <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu> */}
                    {/* </Stack>
                        </Stack>
                    // </Box> */}{' '}
                    // */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
