import React from 'react';
import bookImg from 'assets/images/book1.webp';
import { Tab, Row, Nav, Col, Card, Button, ListGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useMediaQuery } from 'react-responsive';
import publication from 'assets/images/page-banner.webp';

const Publication = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // extra css
    const style = {
        bookCard: {
            overflow: 'hidden',
            fontWeight: 'normal',
            whiteSpace: 'normal',
            height: '45px',
            lineHeight: '22px',
            textAlign: 'center',
            fontSize: isMobile ? '18px' : '15px',
            color: 'var(--primaryMain)',
            fontWeight: 'bold',
            padding: '0px 8px',
            display: '-webkit-box',
            webkitLineClamp: '2',
            webkitBoxOrient: 'vertical'
        },
        examCard: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: '6px'
        }
    };
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${publication})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Publications</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="event-area">
                <div className="container">
                    <div className="event-title-tab-menu">
                        <div className="event-title mt-40">
                            <h2 className="title">
                                Our <br /> Publications
                            </h2>
                        </div>

                        <div className="event-tab-menu mt-40">
                            <ul className="nav">
                                <li>
                                    <a className="active" data-bs-toggle="tab" href="#courses">
                                        Available
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content event-tab-items wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="tab-pane show active" id="courses">
                            <PerfectScrollbar options={{ suppressScrollX: true }} style={{ padding: '0 15px' }}>
                                <div className="row" style={{ maxHeight: '25rem' }}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                                        return (
                                            <div className="col-xs-12 col-md-4 d-flex justify-content-center" style={{ padding: '25px' }}>
                                                <div
                                                    className="row"
                                                    style={{
                                                        boxShadow: '1px 2px 5px 0px',
                                                        zIndex: '2',
                                                        padding: '-5px',
                                                        flexDirection: 'row',
                                                        padding: '8px',
                                                        borderRadius: '6px',
                                                        background: 'white'
                                                    }}
                                                >
                                                    <div className="col-md-6 col-xs-6 p-0">
                                                        <div
                                                            className="image-container"
                                                            style={{
                                                                display: 'flex',
                                                                height: '100%',
                                                                padding: '8px',
                                                                justifyContent: 'center'
                                                            }}
                                                        >
                                                            <img
                                                                src="https://reliableacademy.com/assets/images/media/upsc-classes-thane.jpeg"
                                                                alt="Book"
                                                                style={{
                                                                    width: isMobile ? '80%' : '100%',
                                                                    borderRadius: '6px',
                                                                    boxShadow: '0px 0px 2px 0px '
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xs-6">
                                                        <div>
                                                            <ListGroup variant="flush" style={{ paddingTop: isMobile ? '8px' : null }}>
                                                                <ListGroup.Item style={style.bookCard}>
                                                                    Book Title Lets Crack The UPSC
                                                                </ListGroup.Item>
                                                                <ListGroup.Item
                                                                    style={{
                                                                        color: '#010101',
                                                                        fontSize: '14px',
                                                                        textDecoration: 'underline'
                                                                    }}
                                                                >
                                                                    Buy Now
                                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                        <a>
                                                                            <div>BuyLink1</div>
                                                                        </a>
                                                                        <a>
                                                                            <div>BuyLink2</div>
                                                                        </a>
                                                                        <a>
                                                                            <div>BuyLink3</div>
                                                                        </a>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item
                                                                    style={{
                                                                        color: 'var(--secondaryMain)',
                                                                        whiteSpace: 'nowrap',
                                                                        padding: '0',
                                                                        marginTop: '1rem',
                                                                        fontWeight: '600',
                                                                        textAlign: 'center'
                                                                    }}
                                                                >
                                                                    Author Name
                                                                </ListGroup.Item>
                                                            </ListGroup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Publication;
