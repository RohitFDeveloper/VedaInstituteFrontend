import React from 'react';
import countImg from 'assets/images/counter-bg.webp';

const Publication = () => {
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
                                <li>
                                    <a data-bs-toggle="tab" href="#admission">
                                        Upcomming
                                    </a>
                                </li>
                                {/* <li>
                                    <a data-bs-toggle="tab" href="#training">
                                        Training
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content event-tab-items wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="tab-pane fade show active" id="courses">
                            <div className="row" style={{ padding: '50px 0', display: 'flex' }}>
                                {['1', '2', '3'].map((index) => (
                                    <div className="col-lg-4 col-sm-6 pl-2 pr-2" key={index} style={{ padding: '0 20px' }}>
                                        <div className="row">
                                            <div className="col-lg-6 mt-30 pl-0 pr-0">
                                                <div className="bg_cover" style={{ backgroundImage: `url(${countImg})`, padding: '0px' }} />
                                            </div>
                                            <div className="col-lg-6 pl-0 pr-0">
                                                <div className="single-event text-justify mt-30 p-4">
                                                    <h4 className="event-title">
                                                        <a href="event-details.html">Micro Biological Workshop</a>
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
                        </div>
                        <div className="tab-pane fade" id="admission">
                            <div className="row" style={{ padding: '50px 0', display: 'flex' }}>
                                {['1', '2', '3'].map((index) => (
                                    <div className="col-lg-4 col-sm-6 pl-2 pr-2" key={index} style={{ padding: '0 20px' }}>
                                        <div className="row">
                                            <div className="col-lg-6 mt-30 pl-0 pr-0">
                                                <div
                                                    className=" bg_cover"
                                                    style={{ backgroundImage: `url(${countImg})`, padding: '0px' }}
                                                />
                                            </div>
                                            <div className="col-lg-6 pl-0 pr-0">
                                                <div className="single-event text-justify mt-30 p-4">
                                                    <h4 className="event-title">
                                                        <a href="event-details.html">Micro Biological Workshop</a>
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
                        </div>

                        <div className="view-btn text-center">
                            <a href="#" className="view-more">
                                View More <i className="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Publication;
