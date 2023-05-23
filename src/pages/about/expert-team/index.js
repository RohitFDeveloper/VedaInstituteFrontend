import React from 'react';
import aboutBg1 from 'assets/images/page-banner.webp';
import aboutTech1 from 'assets/images/teachers/teacher-1.webp';

const Index = () => {
    return (
        <>
            {/* <!--====== Page Banner Start ======--> */}

            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${aboutBg1})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h3 className="title">Expert Team</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Page Banner Ends ======--> */}

            {/* <!--====== Teachers Start ======--> */}

            <section className="teachers-area" style={{ padding: '110px 0px ' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mt-40">
                                <h2 className="title">Meet our Teachers</h2>
                                <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
                            </div>
                        </div>
                    </div>
                    <div className="teachers-wrapper">
                        <div className="row teachers-row">
                            {['1', '2', '3'].map(() => (
                                <div className="col-md-4 col-sm-6 teachers-col">
                                    <div className="single-teacher mt-30 text-center">
                                        <div className="teacher-social">
                                            <ul className="social">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="teacher-image">
                                            <a href="teacher-details.html">
                                                <img src={aboutTech1} width="266" height="359" alt="teacher" />
                                            </a>
                                        </div>
                                        <div className="teacher-content">
                                            <h4 className="name">
                                                <a href="teacher-details.html">Roberto Carlos</a>
                                            </h4>
                                            <span className="designation">Science Lecturor</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Teachers End ======--> */}
        </>
    );
};

export default Index;
