import React from 'react';
import jobportal from 'assets/images/page-banner.webp';

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
            <section className="event-page job_main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-event mt-30">
                                <span className="date">Latest JOb</span>
                                <ul>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-event mt-30">
                                <span className="date">Result</span>
                                <ul>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-event mt-30">
                                <span className="date">Admit Card</span>
                                <ul>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                    <li>
                                        <a href="#"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
