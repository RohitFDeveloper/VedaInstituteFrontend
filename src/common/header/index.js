/* eslint-disable no-unused-vars */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// bootstrap
import { Button, Container, Nav, Navbar, NavDropdown, Row, Col, Offcanvas, Stack, Accordion, Card } from 'react-bootstrap';

// project imports
import logo from 'assets/images/logo.png';
import Logo from 'common/logo/index';

// const datas
const topMenuData = [
    {
        title: 'Publication Books',
        url: '/',
        dropdown: false
    },
    {
        title: 'Online Test Series',
        url: '/',
        dropdown: false
    },
    {
        title: 'Online Admission',
        url: '/',
        dropdown: false
    },
    {
        title: 'Free Study Material',
        url: '/',
        dropdown: false
    },
    {
        title: 'Scholarship Test',
        url: '/',
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
        dropdown: true,
        submenu: [
            {
                title: 'About Institute',
                url: 'about/institute'
            },
            {
                title: 'Expert Team',
                url: 'about/team'
            }
        ]
    },
    {
        title: 'Courses',
        dropdown: true,
        submenu: [
            {
                title: 'UPSC',
                url: 'course/upsc'
            },
            {
                title: 'SSC',
                url: '/'
            },
            {
                title: 'Bank',
                url: '/'
            }
        ]
    },
    {
        title: 'Publication Books',
        dropdown: false,
        url: '/'
    },
    {
        title: 'Gallery',
        dropdown: true,
        submenu: [
            {
                title: 'Photo Gallery',
                url: '/'
            },
            {
                title: 'Video Gallery',
                url: '/'
            }
        ]
    },
    {
        title: 'Job Portal',
        dropdown: false,
        url: '/'
    },
    {
        title: 'Previous Year Papers',
        dropdown: false,
        url: '/'
    },
    {
        title: 'Daily Current Updates',
        dropdown: false,
        url: '/'
    },
    {
        title: 'Contact Us',
        dropdown: false,
        url: '/'
    }
];
function Index() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    // exta css
    const style = {
        links: {
            fontWeight: 600,
            color: isMobile ? '#fff' : '#07294d',
            textDecoration: 'none'
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

    const handleClose = () => setShow(false);
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
                                <Link to="/" style={{ ...style.links, ...style.credButton }} onClick={handleClose}>
                                    <i className="fas fa-sign-in-alt" style={style.credButton.space}></i>
                                    Login
                                </Link>
                                <span className="px-2" style={style.links}>
                                    |
                                </span>
                                <Link to="/" style={{ ...style.links, ...style.credButton }} onClick={handleClose}>
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
                                <Button variant="outline-secondary" style={style.buttonLink} key={index} onClick={handleClose}>
                                    <Link style={style.links} to={data.url}>
                                        {data.title}
                                    </Link>
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
                                <Button variant="outline-secondary" style={style.buttonLink} key={index} onClick={handleClose}>
                                    <Link style={style.links} to={data.url}>
                                        {data.title}
                                    </Link>
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
                                    <Col lg="9">
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
                                                                        <NavDropdown.Item key={index}>
                                                                            <Link to={data.url}>{data.title}</Link>
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
                                    <Col lg="3">
                                        <Row>
                                            <Col style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                                                <Nav.Link style={style.links}>
                                                    <Link to="/">
                                                        <i className="fas fa-sign-in-alt" style={{ margin: '0 5px' }}></i>
                                                        Login
                                                    </Link>
                                                </Nav.Link>
                                                <span className="px-2">|</span>
                                                <Nav.Link style={style.links}>
                                                    <Link to="/">
                                                        <i className="fas fa-user-plus" style={{ margin: '0 5px' }}></i>
                                                        Register
                                                    </Link>
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
                                    <NavDropdown title={<span style={style.links}>{data.title}</span>} id="navbarScrollingDropdown">
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
                                    <Nav.Link style={style.links} key={index}>
                                        <Link to={data.url}>{data.title}</Link>
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
