import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import jobportal from 'assets/images/page-banner.webp';
import { Card, ListGroup } from 'react-bootstrap';

// extra css
const style = {
    mainCard: {
        width: '100%',
        borderRadius: '10px',
        margin: '10px 5px',
        boxShadow:
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
    },
    mainCardHead: {
        backgroundColor: 'var(--primaryMain)',
        color: '#f1f1f1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        borderRadius: '6px',
        margin: '8px'
    }
};
function Index() {
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${jobportal})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Job Portal</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="event-page job_main" style={{ padding: '110px 0 ' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 d-flex">
                            <div style={style.mainCard}>
                                <div style={{ padding: '16px 8px' }}>
                                    <div style={style.mainCardHead}>
                                        <i className="fas fa-th-large" style={{ paddingRight: '8px' }}></i>
                                        Job Notification
                                    </div>
                                    <PerfectScrollbar options={{ suppressScrollX: true }} className="px-2">
                                        <ListGroup variant="flush" style={{ maxHeight: '20rem' }}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                                                <ListGroup.Item style={{ padding: '4px 8px', border: '0' }}>
                                                    <Card className="job-list job-portal" style={{ maxWidth: '100%', padding: '10px' }}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth: '300px',
                                                                    wordWrap: 'break-word',
                                                                    borderLeft: '4px solid var(--primaryMain) ',
                                                                    paddingLeft: '8px'
                                                                }}
                                                            >
                                                                Lorem ipsum dolor sit amet Lorem
                                                            </div>
                                                            <div>
                                                                <i
                                                                    className="fas fa-chevron-right"
                                                                    style={{ color: '#86a1ae', fontSize: '.75rem', paddingLeft: '16px' }}
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex">
                            <div style={style.mainCard}>
                                <div style={{ padding: '16px 8px' }}>
                                    <div style={{ ...style.mainCardHead, backgroundColor: 'var(--secondaryMain)' }}>
                                        <i className="fas fa-th-large" style={{ paddingRight: '8px' }}></i>
                                        Results
                                    </div>
                                    <PerfectScrollbar options={{ suppressScrollX: true }} className="px-2">
                                        <ListGroup variant="flush" style={{ maxHeight: '20rem' }}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                                                <ListGroup.Item style={{ padding: '4px 8px', border: '0' }}>
                                                    <Card className="job-list job-portal-2" style={{ maxWidth: '100%', padding: '10px' }}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth: '300px',
                                                                    wordWrap: 'break-word',
                                                                    borderLeft: '4px solid var(--secondaryMain) ',
                                                                    paddingLeft: '8px'
                                                                }}
                                                            >
                                                                Lorem ipsum dolor sit amet Lorem
                                                            </div>
                                                            <div>
                                                                <i
                                                                    className="fas fa-chevron-right"
                                                                    style={{ color: '#86a1ae', fontSize: '.75rem', paddingLeft: '16px' }}
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex">
                            <div style={style.mainCard}>
                                <div style={{ padding: '16px 8px' }}>
                                    <div style={style.mainCardHead}>
                                        <i className="fas fa-th-large" style={{ paddingRight: '8px' }}></i>
                                        Admit Cards
                                    </div>
                                    <PerfectScrollbar options={{ suppressScrollX: true }} className="px-2">
                                        <ListGroup variant="flush" style={{ maxHeight: '20rem' }}>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                                                <ListGroup.Item style={{ padding: '4px 8px', border: '0' }}>
                                                    <Card className="job-list job-portal" style={{ maxWidth: '100%', padding: '10px' }}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth: '300px',
                                                                    wordWrap: 'break-word',
                                                                    borderLeft: '4px solid var(--primaryMain) ',
                                                                    paddingLeft: '8px'
                                                                }}
                                                            >
                                                                Lorem ipsum dolor sit amet Lorem
                                                            </div>
                                                            <div>
                                                                <i
                                                                    className="fas fa-chevron-right"
                                                                    style={{ color: '#86a1ae', fontSize: '.75rem', paddingLeft: '16px' }}
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
