import React from 'react';
// import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from 'assets/images/logo.png';
const style = {
    links: {
        fontWeight: 600,
        color: '#07294d'
    }
};
function Index() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', width: '100%', justifyContent: 'center' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={style.links}>
                                <Button variant="success">Publication Books</Button>
                            </Nav.Link>
                            <Nav.Link href="#action1" style={style.links}>
                                <Button variant="success">Online Test Series</Button>
                            </Nav.Link>
                            <Nav.Link href="#action1" style={style.links}>
                                <Button variant="success">Online Admission</Button>
                            </Nav.Link>
                            <Nav.Link href="#action1" style={style.links}>
                                <Button variant="success">Free Study Material</Button>
                            </Nav.Link>
                            <Nav.Link href="#action1" style={style.links}>
                                <Button variant="success">Scholarship Test</Button>
                            </Nav.Link>
                            <Nav.Link href="#action1" style={style.links}>
                                <Button variant="danger">Quick Links</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} width="200" height="88" alt="Logo" style={{ objectFit: 'cover' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1" style={style.links}>
                                Home
                            </Nav.Link>
                            <NavDropdown title={<span style={style.links}>About Us</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action4">About Institute</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Expert Team</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span style={style.links}>Courses</span>} id="navbarScrollingDropdown" style={style.links}>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1" style={style.links}>
                                Publication Books
                            </Nav.Link>
                            <NavDropdown title={<span style={style.links}>Gallery</span>} id="navbarScrollingDropdown" style={style.links}>
                                <NavDropdown.Item href="#action4">Photo Gallery</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Video Gallery</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1" style={style.links}>
                                Job Portal
                            </Nav.Link>
                            <Nav.Link href="#action1" style={style.links}>
                                Previous Year Papers
                            </Nav.Link>
                            <Nav.Link href="#action1" style={style.links}>
                                Daily Current Updates
                            </Nav.Link>
                            {/* <NavDropdown title="Quick Links" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action4">others</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown> */}
                            <Nav.Link href="#action1" style={style.links}>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Index;
