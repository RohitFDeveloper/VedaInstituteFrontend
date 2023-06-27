/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// bootstrap
import { Button, Modal, Container } from 'react-bootstrap';

// project imports
import logo from 'assets/images/logo.png';
function Index({ ...props }) {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [modalShow, setModalShow] = useState(true);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
                        {isMobile ? (
                            <img src={logo} width={props.width} height={props.height} alt="Logo" style={{ objectFit: 'cover' }} />
                        ) : (
                            <img src={logo} width={props.width} height={props.height} alt="Logo" style={{ objectFit: 'cover' }} />
                        )}
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
    return <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />;
}

export default Index;
