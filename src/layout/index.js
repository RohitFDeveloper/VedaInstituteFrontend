import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from '../common/top-header/index.jsx';
import Header from '../common/header/index.js';
import Footer from '../common/footer/index.js';
import Home from 'pages/home/index';

function Index() {
    return (
        <Container fluid>
            <Row>
                <TopHeader />
            </Row>
            <Row>
                <Header />
            </Row>
            <Row>
                <Home />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Index;
