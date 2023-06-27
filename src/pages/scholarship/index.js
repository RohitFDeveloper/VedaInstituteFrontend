/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';
// bootstrap
import { Button, Card, ListGroup, ListGroupItem, Row, Modal, Container } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardFooter from 'react-bootstrap/esm/CardHeader';

// images
import exampapers from 'assets/images/page-banner.webp';

// project imports
import pdfFile from 'assets/docs/file-sample.pdf';
import PDFReader from 'common/components/pdf-viewer/PDFReader';
import Logo from 'common/logo/index';
import { Link } from 'react-router-dom';

const demoPapers = [
    {
        title: 'Current Affairs Quiz',
        scheduled: '09 March, 2023',
        shift: 'Shift 1',
        tier: 'Tier 1',
        questions: '100',
        marks: '100',
        time: '5mins',
        language: 'English, Hindi'
    },
    {
        title: 'Current Affairs Quiz',
        scheduled: '09 April, 2023',
        shift: 'Shift 1',
        tier: 'Tier 1',
        questions: '100',
        marks: '100',
        time: '5mins',
        language: 'English, Hindi'
    },
    {
        title: 'Current Affairs Quiz',
        scheduled: '19 July, 2023',
        shift: 'Shift 1',
        tier: 'Tier 1',
        questions: '100',
        marks: '100',
        time: '5mins',
        pdfUrl: pdfFile,
        language: 'English, Hindi'
    },
    {
        title: 'Current Affairs Quiz',
        scheduled: '10 March, 2023',
        shift: 'Shift 2',
        tier: 'Tier 1',
        questions: '100',
        marks: '100',
        time: '5mins',
        pdfUrl: pdfFile,
        language: 'English'
    }
];

const Index = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const style = {
        paperHeading: { marginBottom: '25px' },
        paperDeatailCon: { padding: '24px 0' },
        buttonCon: {
            display: 'grid',
            gridAutoFlow: 'column',
            gap: '0.5rem',
            alignItems: 'center',
            maxWidth: '280px'
        },
        listGroup: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '1rem',
            padding: '8px 0'
        },
        listGroupItem: {
            color: 'var(--grey600)',
            border: '0',
            padding: '0',
            whiteSpace: 'nowrap'
        },
        cardBody: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline'
            // padding: '24px'
        }
    };
    const [modalShow, setModalShow] = useState(false);
    const [PdfUrl, setPdfUrl] = useState('');
    // function MyVerticallyCenteredModal(props) {
    //     return (
    //         <Modal {...props} fullscreen={isMobile ? true : false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    //             <Modal.Header closeButton>
    //                 <Logo width="150" height="60" />
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <Container fulid style={{ display: 'flex', justifyContent: 'center' }}>
    //                     <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    //                         <PDFReader pdfFile={PdfUrl} />
    //                     </div>
    //                 </Container>
    //             </Modal.Body>
    //         </Modal>
    //     );
    // }
    // function showPaper(url) {
    //     setModalShow(true);
    //     setPdfUrl(url);
    // }
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${exampapers})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Scholarship Tests</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ssc-chl paper" style={{ padding: '60px 0px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-10">
                            <div className="paper-details" style={style.paperDeatailCon}>
                                <div className="paper-heading" style={style.paperHeading}>
                                    <h3>SSC CHSL Previous Year Question Paper—Download Free PDFs here!</h3>
                                </div>
                                <div className="paper-content text-justify" style={{ textAlign: 'justify' }}>
                                    <p>
                                        SSC CGL is a national-level level exam conducted by SSC every year. This means if a candidate is
                                        selected for a post then he/she may be asked to serve anywhere in the country. Before appearing for
                                        the exam, it is important for the candidates to solve as many SSC CGL last year Paper as they can.
                                        Practicing SSC CHSL Previous year paper in Hindi and English will give the candidates an idea about
                                        the difficulty level of the questions and the trend.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container px-0">
                        <div className="card-container " style={{ padding: '24px 0' }}>
                            <div className="paperName">
                                <h4>Scholarship Tests </h4>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div style={{ padding: '1rem 2rem', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                            <div className="row">
                                {demoPapers.map((data, index) => {
                                    return (
                                        <div className="col-lg-12 col-sm-12 m-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                            <div key={index} className="my-2">
                                                <div style={style.cardBody}>
                                                    <div>
                                                        <div className={isMobile ? 'h6' : 'h5'}>
                                                            {data.title} ({data.scheduled}) (Time : {data.time})
                                                        </div>
                                                        <ListGroup style={style.listGroup}>
                                                            <ListGroupItem style={style.listGroupItem}>
                                                                <i className="fas fa-calendar-alt"></i>
                                                                <span style={{ paddingLeft: '6px' }}>{data.scheduled}</span>
                                                            </ListGroupItem>
                                                            <ListGroupItem style={style.listGroupItem}>
                                                                <i className="fas fa-history"></i>
                                                                <span style={{ paddingLeft: '6px' }}>{data.time}</span>
                                                            </ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                    <div className="button" style={style.buttonCon}>
                                                        <Link to="/ask-question">
                                                            <Button
                                                                className="normalBtn text-uppercase"
                                                                size="sm"
                                                                style={{ background: '#f0f0f0', color: '#07294d' }}
                                                            >
                                                                Start Quiz
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> */}
        </>
    );
};

export default Index;
