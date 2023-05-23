import React from 'react';

// images
import Image1 from 'assets/images/slider-1.webp';
import Image2 from 'assets/images/slider-2.webp';

const Slider = () => {
    return (
        <>
            <section className="slider-area slider-active px-0">
                <div className="single-slider d-flex align-items-center bg_cover" style={{ backgroundImage: `url(${Image1})` }}>
                    <div className="container fluid">
                        <div className="slider-content">
                            <h2 className="title" data-animation="fadeInLeft" data-delay="0.2s">
                                Education is the most powerful Weapon
                            </h2>
                            {/* <ul className="slider-btn">
                                <li>
                                    <a
                                        data-animation="fadeInUp"
                                        data-delay="0.6s"
                                        className="main-btn main-btn-2"
                                        href="our-courses-left-sidebar.html"
                                    >
                                        View Courses
                                    </a>
                                </li>
                                <li>
                                    <a data-animation="fadeInUp" data-delay="1s" className="main-btn" href="#">
                                        Learn more
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;
