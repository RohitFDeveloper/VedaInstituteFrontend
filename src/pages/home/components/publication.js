import React from 'react';
import countImg from 'assets/images/counter-bg.webp';

const Publication = () => {
    return (
        <>
            <section class="event-area" style={{ backgroundColor: '#d7d8d787' }}>
                <div class="container">
                    <div class="event-title-tab-menu">
                        <div class="event-title mt-40">
                            <h2 class="title">
                                Our <br /> Publications
                            </h2>
                        </div>

                        <div class="event-tab-menu mt-40">
                            <ul class="nav">
                                <li>
                                    <a class="active" data-bs-toggle="tab" href="#courses">
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
                    <div class="tab-content event-tab-items wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="tab-pane fade show active" id="courses">
                            <div class="row" style={{ padding: '50px 0', display: 'flex' }}>
                                {['1', '2', '3'].map((index) => (
                                    <div class="col-lg-4 col-sm-6 pl-2 pr-2" key={index} style={{ padding: '0 20px' }}>
                                        <div className="row">
                                            <div className="col-lg-6 mt-30 pl-0 pr-0">
                                                <div className="bg_cover" style={{ backgroundImage: `url(${countImg})`, padding: '0px' }} />
                                            </div>
                                            <div className="col-lg-6 pl-0 pr-0">
                                                <div class="single-event text-justify mt-30 p-4">
                                                    <h4 class="event-title">
                                                        <a href="event-details.html">Micro Biological Workshop</a>
                                                    </h4>
                                                    <p class="place">Place: Central Hall, New York</p>
                                                    <a href="#" class="more">
                                                        Read more <i class="far fa-chevron-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="tab-pane fade" id="admission">
                            <div class="row" style={{ padding: '50px 0', display: 'flex' }}>
                                {['1', '2', '3'].map((index) => (
                                    <div class="col-lg-4 col-sm-6 pl-2 pr-2" key={index} style={{ padding: '0 20px' }}>
                                        <div className="row">
                                            <div className="col-lg-6 mt-30 pl-0 pr-0">
                                                <div
                                                    className=" bg_cover"
                                                    style={{ backgroundImage: `url(${countImg})`, padding: '0px' }}
                                                />
                                            </div>
                                            <div className="col-lg-6 pl-0 pr-0">
                                                <div class="single-event text-justify mt-30 p-4">
                                                    <h4 class="event-title">
                                                        <a href="event-details.html">Micro Biological Workshop</a>
                                                    </h4>
                                                    <p class="place">Place: Central Hall, New York</p>
                                                    <a href="#" class="more">
                                                        Read more <i class="far fa-chevron-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div class="view-btn text-center">
                            <a href="#" class="view-more">
                                View More <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Publication;
