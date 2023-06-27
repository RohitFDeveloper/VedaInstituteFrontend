import React from 'react';
import bookImg from 'assets/images/book1.webp';
import { Tab, Row, Nav, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

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
            <section className="event-area" style={{ backgroundColor: '#d7d8d787' }}>
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
                            <div className="row">
                                {[1, 2, 3].map(() => {
                                    return (
                                        <div className="col-xs-12 col-md-4 d-flex justify-content-center" style={{ padding: '25px' }}>
                                            {/* <Card className="p-2 mx-0" style={{ width: '100%' }}>
                                                <Card.Body className="p-0" style={{ display: 'flex', alignItems: 'start' }}>
                                                    <div style={{ width: '100%', position: 'relative', paddingTop: '58.25%' }}>
                                                        <Card.Img
                                                            src="https://reliableacademy.com/assets/images/media/upsc-classes-thane.jpeg"
                                                            alt="Book"
                                                            style={{ position: 'absolute', top: '0', left: '0' }}
                                                        />
                                                    </div>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item style={style.bookCard}>
                                                            Book Title Lets Crack The UPSC
                                                        </ListGroup.Item>
                                                        <ListGroup.Item
                                                            style={{ color: '#010101', fontSize: '14px', textDecoration: 'underline' }}
                                                        >
                                                            Buy Now
                                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <div>BuyLink1</div>
                                                                <div>BuyLink2</div>
                                                                <div>BuyLink3</div>
                                                            </div>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item
                                                            style={{
                                                                color: 'var(--secondaryMain)',
                                                                whiteSpace: 'nowrap',
                                                                padding: '0',
                                                                marginTop: '1rem',
                                                                fontWeight: '600'
                                                            }}
                                                        >
                                                            Author Name
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Card> */}
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
                                                                style={{ color: '#010101', fontSize: '14px', textDecoration: 'underline' }}
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
                        </div>
                        {/* <div className="tab-pane fade" id="admission">
                            <div className="row" style={{ padding: '50px 0', display: 'flex' }}>
                                {['1', '2', '3'].map((index) => (
                                    <div className="col-lg-4 col-sm-6 pl-2 pr-2" key={index} style={{ padding: '0 20px' }}>
                                        <div className="row" style={{ height: '200px !important' }}>
                                            <div className="col-lg-6 mt-30 pl-0 pr-0">
                                                <div className=" bg_cover" style={{ backgroundImage: `url(${bookImg})`, padding: '0px' }} />
                                            </div>
                                            <div className="col-lg-6 pl-0 pr-0">
                                                <div
                                                    className="single-event text-justify mt-30 p-4"
                                                    style={{ height: '200px', backgroundColor: 'white' }}
                                                >
                                                    <h4 className="event-title">
                                                        <a href="event-details.html">Book Tittle</a>
                                                    </h4>
                                                    <p className="place">Place: Central Hall, New York</p>
                                                    <a href="#" className="more">
                                                        Read more <i className="far fa-chevron-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        {/* <div className="view-btn text-center">
                            <a href="#" className="view-more">
                                View More <i className="fas fa-chevron-right"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Publication;
