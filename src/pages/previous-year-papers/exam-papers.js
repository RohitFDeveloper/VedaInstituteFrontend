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

const demoPapers = [
    {
        title: 'SSC CHSL Exam 2022 Official Paper',
        scheduled: '09 March, 2023',
        shift: 'Shift 1',
        tier: 'Tier 1',
        questions: '100',
        marks: '100',
        time: '60mins',
        pdfUrl: pdfFile,
        language: 'English, Hindi'
    },
    {
        title: 'SSC CGL Exam 2022 Official Paper',
        scheduled: '10 March, 2023',
        shift: 'Shift 2',
        tier: 'Tier 1',
        questions: '100',
        marks: '100',
        time: '60mins',
        pdfUrl: pdfFile,
        language: 'English'
    }
];

const ExamPapers = () => {
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
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal {...props} fullscreen={isMobile ? true : false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Logo width="150" height="60" />
                </Modal.Header>
                <Modal.Body>
                    <Container fulid style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <PDFReader pdfFile={PdfUrl} />
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
    function showPaper(url) {
        setModalShow(true);
        setPdfUrl(url);
    }
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${exampapers})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Exam Papers</h2>
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
                                <h4>Question Papers </h4>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            {demoPapers.map((data, index) => {
                                return (
                                    <Card key={index} className="my-2">
                                        {/* <CardHeader>header</CardHeader> */}
                                        <Card.Body style={style.cardBody}>
                                            <div>
                                                <Card.Title className={isMobile ? 'h6' : 'h5'}>
                                                    {data.title +
                                                        ', ' +
                                                        'Held On: ' +
                                                        data.scheduled +
                                                        ', ' +
                                                        data.shift +
                                                        ', ' +
                                                        data.tier}
                                                </Card.Title>
                                                <ListGroup style={style.listGroup}>
                                                    <ListGroupItem style={style.listGroupItem}>
                                                        <i className="fas fa-question-circle"></i>
                                                        <span style={{ paddingLeft: '6px' }}>{data.questions + ' ' + 'Questions'}</span>
                                                    </ListGroupItem>
                                                    <ListGroupItem style={style.listGroupItem}>
                                                        <i className="fas fa-marker"></i>
                                                        <span style={{ paddingLeft: '6px' }}>{data.marks + ' ' + 'Marks'}</span>
                                                    </ListGroupItem>
                                                    <ListGroupItem style={style.listGroupItem}>
                                                        <i className="fas fa-history"></i>
                                                        <span style={{ paddingLeft: '6px' }}>{data.time}</span>
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </div>
                                            <div className="button" style={style.buttonCon}>
                                                <a href={data.pdfUrl} download={true}>
                                                    <Button className="normalBtn" size="sm">
                                                        Download
                                                    </Button>
                                                </a>

                                                <Button
                                                    variant="outline-dark"
                                                    className="btnDark"
                                                    size="sm"
                                                    onClick={() => showPaper(data.pdfUrl)}
                                                >
                                                    View
                                                </Button>
                                            </div>
                                        </Card.Body>
                                        <CardFooter style={{ padding: '8px 24px', color: 'var(--primaryMain)' }}>
                                            <i className="fas fa-language p-1"></i> Available In - {data.language}
                                        </CardFooter>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

export default ExamPapers;
