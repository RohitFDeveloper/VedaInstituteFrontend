/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';

// bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// project imports
import Poster from '../common/poster/index';
import ScrollTop from '../common/scroll-top/index';
import ContactIcons from '../common/contact-icons/index';
import TopHeader from '../common/top-header/index';
import Header from '../common/header/index';
import Footer from '../common/footer/index';

function Index() {
    return (
        <>
            <Container fluid>
                <Row>
                    <TopHeader />
                </Row>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Outlet />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>

            {/* info and contact components */}
            <Poster />
            <ContactIcons />
            <ScrollTop />
        </>
    );
}

export default Index;
