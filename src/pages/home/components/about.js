import React from 'react';

// images

import About1 from 'assets/images/about/about-1.webp';
import About2 from 'assets/images/about/about-2.webp';
import About3 from 'assets/images/about/about-3.webp';
import About4 from 'assets/images/about/about-4.webp';

// icons

import Icon1 from 'assets/images/about/icon/icon-1.webp';
import Icon2 from 'assets/images/about/icon/icon-2.webp';
import Icon3 from 'assets/images/about/icon/icon-3.webp';
import Icon4 from 'assets/images/about/icon/icon-4.webp';

function About() {
    return (
        <>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="about-content mt-40">
                                <h2 className="about-title">
                                    Best <span>Educational</span> Environment
                                </h2>
                                <span className="line"></span>
                                <p>
                                    Even slightly believable. If you are going use passage of Lorem Ipsum need desire to obtain pain of
                                    itself, because it is pain de sires many pain of itself occur for your study <br /> <br /> Even slightly
                                    believable. If you are going use passage of Lorem Ipsum need desir
                                </p>
                                <a href="#" className="main-btn">
                                    Explore
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-image mt-50">
                                <div className="single-image image-1">
                                    <img src={About1} width="290" height="290" alt="about" />
                                </div>
                                <div className="single-image image-2">
                                    <img src={About2} width="225" height="225" alt="about" />
                                </div>
                                <div className="single-image image-3">
                                    <img src={About3} width="190" height="190" alt="about" />
                                </div>
                                <div className="single-image image-4">
                                    <img src={About4} width="140" height="140" alt="about" />
                                </div>

                                <div className="about-icon icon-1">
                                    <img src={Icon1} width="46" height="46" alt="icon" />
                                </div>
                                <div className="about-icon icon-2">
                                    <img src={Icon2} width="46" height="46" alt="icon" />
                                </div>
                                <div className="about-icon icon-3">
                                    <img src={Icon3} width="46" height="46" alt="icon" />
                                </div>
                                <div className="about-icon icon-4">
                                    <img src={Icon4} width="46" height="46" alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
