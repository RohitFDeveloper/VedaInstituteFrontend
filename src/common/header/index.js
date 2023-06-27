/* eslint-disable no-unused-vars */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout, selectUser } from 'features/userSlice';
// bootstrap
import { Button, Container, Nav, Navbar, NavDropdown, Row, Col, Offcanvas, Stack, Accordion, Card } from 'react-bootstrap';
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// project imports
import logo from 'assets/images/logo.png';
import Logo from 'common/logo/index';
import constants from 'constants';

// const datas
const topMenuData = [
    {
        title: 'Publication Books',
        url: 'publication',
        dropdown: false
    },
    {
        title: 'Online Test Series',
        url: 'online-test-series',
        dropdown: false
    },
    {
        title: 'Online Admission',
        url: 'admission',
        dropdown: false
    },
    {
        title: 'Free Study Material',
        url: '/',
        dropdown: false
    },
    {
        title: 'Scholarship Test',
        url: 'scholarship-test',
        dropdown: false
    },
    {
        title: 'Ask a question?',
        url: 'ask-question',
        dropdown: false
    }
    // {
    //     title: 'Quick Links',
    //     submenu: [
    //         {
    //             title: 'Test Results',
    //             url: '/'
    //         }
    //     ]
    // }
];
const mainMenuData = [
    {
        title: 'Home',
        dropdown: false,
        url: '/'
    },
    {
        title: 'About Us',
        dropdown: false,
        url: 'about-us'
    },
    // {
    //     title: 'Courses',
    //     dropdown: true,
    //     submenu: [
    //         {
    //             title: 'UPSC',
    //             url: 'course/upsc'
    //         },
    //         {
    //             title: 'SSC',
    //             url: 'course/ssc'
    //         },
    //         {
    //             title: 'Bank PO',
    //             url: 'course/bank-po'
    //         }
    //     ]
    // },
    {
        title: 'Courses',
        dropdown: false,
        url: 'courses'
    },
    // {
    //     title: 'Publication Books',
    //     dropdown: false,
    //     url: 'publication'
    // },
    {
        title: 'Gallery',
        dropdown: false,
        url: 'gallery'
    },
    {
        title: 'Job Portal',
        dropdown: false,
        url: 'job-portal'
    },
    {
        title: 'Previous Year Papers',
        dropdown: false,
        url: 'previous-year-papers'
    },
    {
        title: 'Daily Current Updates',
        dropdown: false,
        url: 'daily-current-updates'
    },
    {
        title: 'My Courses',
        dropdown: false,
        url: 'my-courses'
    },
    {
        title: 'Contact Us',
        dropdown: false,
        url: 'contact-us'
    }
];
function Index() {
    // const user = useSelector(selectUser);
    // const dispatch = useDispatch();
    // console.log(user != null ? user.loggedIn : null);
    const isloggedin = localStorage.getItem('loggedIn') == null ? false : localStorage.getItem('loggedIn');
    const isMobile = useMediaQuery({ maxWidth: 991 });
    const navigate = useNavigate();
    const handleLogout = () => {
        // dispatch(logout());
        localStorage.removeItem('loggedIn');
        toast.error('Logout Successfully !', {
            theme: 'colored',
            position: 'bottom-right',
            style: {
                color: '#fff',
                background: 'var(--errorMain)'
            }
        });
    };
    // exta css
    const style = {
        links: {
            fontWeight: 600,
            color: isMobile ? '#fff' : '#07294d',
            textDecoration: 'none',
            '.navLink::hover': {
                color: 'red'
            }
        },
        sublinks: {
            color: '#07294d',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column'
        },
        buttonDropdown: {
            border: '1px solid #fff',
            borderRadius: '5px',
            backgroundColor: '#07294d'
        },
        buttonLink: {
            border: '1px solid #fff',
            textAlign: 'left',
            padding: '14px 20px'
        },
        credButton: {
            // margin: '0 5px',
            space: {
                margin: '0 5px'
            }
        }
    };
    const [TopMenu, setTopMenu] = useState(topMenuData);
    const [MainMenu, setMainMenu] = useState(mainMenuData);
    const [show, setShow] = useState(false);

    const handleClose = (url) => {
        setShow(false);
        navigate(url);
    };
    const handleShow = () => setShow(true);
    return isMobile ? (
        <>
            <Stack className="py-2" direction="horizontal" gap={3}>
                <Logo width="150" height="60" />
                <div className="ms-auto" />
                <div className="vr" />
                <Button variant="outline-secondary" onClick={handleShow} className="me-2">
                    <i className="fas fa-bars"></i>
                </Button>
            </Stack>
            <Offcanvas show={show} onHide={handleClose} placement="top" style={{ height: '100%' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Logo width="150" height="60" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ backgroundColor: '#07294d' }}>
                    <Stack gap={3}>
                        <Row>
                            <Col style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                <Link to="/login" style={{ ...style.links, ...style.credButton }} onClick={handleClose}>
                                    <i className="fas fa-sign-in-alt" style={style.credButton.space}></i>
                                    Login
                                </Link>
                                <span className="px-2" style={style.links}>
                                    |
                                </span>
                                <Link to="/register" style={{ ...style.links, ...style.credButton }} onClick={handleClose}>
                                    <i className="fas fa-user-plus" style={style.credButton.space}></i>
                                    Register
                                </Link>
                            </Col>
                        </Row>
                        {MainMenu.map((data, index) => {
                            return data.dropdown ? (
                                <>
                                    <Accordion>
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header style={style.buttonDropdown}>
                                                <div style={{ color: '#07294d', fontWeight: 600 }}> {data.title}</div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {data.submenu.map((data, index) => {
                                                    return (
                                                        <>
                                                            <Link style={style.sublinks} key={index} to={data.url} onClick={handleClose}>
                                                                {data.title}
                                                            </Link>
                                                            <hr />
                                                        </>
                                                    );
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </>
                            ) : (
                                <Button
                                    variant="outline-secondary"
                                    style={style.buttonLink}
                                    key={index}
                                    onClick={() => handleClose(data.url)}
                                >
                                    <span style={style.links}>{data.title}</span>
                                </Button>
                            );
                        })}
                        {TopMenu.map((data, index) => {
                            return data.dropdown ? (
                                <>
                                    <Accordion>
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header style={style.buttonDropdown}>
                                                <div style={style.links}> {data.title}</div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {data.submenu.map((data, index) => {
                                                    return (
                                                        <Link style={style.links} key={index} to={data.url} onClick={handleClose}>
                                                            {data.title}
                                                        </Link>
                                                    );
                                                })}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </>
                            ) : (
                                <Button
                                    variant="outline-secondary"
                                    style={style.buttonLink}
                                    key={index}
                                    onClick={() => handleClose(data.url)}
                                >
                                    <span style={style.links}>{data.title}</span>
                                </Button>
                            );
                        })}
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    ) : (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', width: '100%' }} navbarScroll>
                            <Container fluid>
                                <Row style={{ alignItems: 'center' }}>
                                    <Col lg="10">
                                        <Row>
                                            <Col style={{ display: 'flex' }}>
                                                {TopMenu.map((data, index) => {
                                                    return data.title == 'Quick Links' ? (
                                                        <NavDropdown
                                                            title={<span style={style.links}>{data.title}</span>}
                                                            id="navbarScrollingDropdown"
                                                        >
                                                            {data.submenu.map((data, index) => {
                                                                return (
                                                                    <>
                                                                        <NavDropdown.Item key={index} activeClassName="active">
                                                                            <Link to={data.url} activeClassName="active">
                                                                                {data.title}
                                                                            </Link>
                                                                        </NavDropdown.Item>
                                                                        <NavDropdown.Divider />
                                                                    </>
                                                                );
                                                            })}
                                                        </NavDropdown>
                                                    ) : (
                                                        <Nav.Link style={style.links} key={index}>
                                                            <Link to={data.url}>
                                                                <Button variant="success">{data.title}</Button>
                                                            </Link>
                                                        </Nav.Link>
                                                    );
                                                })}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="2">
                                        <Row>
                                            <Col style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                                <Nav.Link style={style.links}>
                                                    {isloggedin ? (
                                                        <Link
                                                            to="#"
                                                            onClick={handleLogout}
                                                            style={{ display: 'flex', alignItems: 'center' }}
                                                        >
                                                            <i className="fas fa-sign-out-alt" style={{ margin: '0 5px' }}></i>
                                                            Logout
                                                        </Link>
                                                    ) : (
                                                        <Link to="/login" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <i className="fas fa-sign-in-alt" style={{ margin: '0 5px' }}></i>
                                                            Login
                                                        </Link>
                                                    )}
                                                </Nav.Link>
                                                <span>|</span>
                                                <Nav.Link style={style.links}>
                                                    {isloggedin ? (
                                                        <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <i className="fas fa-user-circle" style={{ margin: '0 5px' }}></i>
                                                            Profile
                                                        </Link>
                                                    ) : (
                                                        <Link to="/register" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <i className="fas fa-user-plus" style={{ margin: '0 5px' }}></i>
                                                            Register
                                                        </Link>
                                                    )}
                                                </Nav.Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Logo width="200" height="88" />
                    </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggler-icon" /> */}
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            {mainMenuData.map((data, index) => {
                                return data.dropdown ? (
                                    <NavDropdown
                                        title={
                                            <span style={style.links} className="MainLink">
                                                {data.title}
                                            </span>
                                        }
                                        id="navbarScrollingDropdown"
                                    >
                                        {data.submenu.map((data, index) => {
                                            return (
                                                <>
                                                    <NavDropdown.Item key={index} style={style.links}>
                                                        <Link to={data.url}>{data.title}</Link>
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                </>
                                            );
                                        })}
                                    </NavDropdown>
                                ) : (
                                    <Nav.Link style={style.links} key={index} className="navLink MainLink">
                                        <NavLink exact to={data.url} className={({ isActive }) => (isActive ? 'ActiveMainLink' : null)}>
                                            {data.title}
                                        </NavLink>
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Index;
