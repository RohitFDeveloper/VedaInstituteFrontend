/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// bootstrap
import Carousel from 'react-bootstrap/Carousel';
// images
import Image1 from 'assets/images/slider-1.webp';
import Image2 from 'assets/images/slider-2.webp';

// datas
const sliderData = [
    {
        imageUrl: Image1,
        title: 'Education is the most powerful Weapon msg 1'
    },
    {
        imageUrl: Image1,
        title: 'Education is the most powerful Weapon msg 2'
    },
    {
        imageUrl: Image1,
        title: 'Education is the most powerful Weapon msg 3'
    }
];

const Slider = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [Slider, setSlider] = useState(sliderData);
    return (
        <>
            <section className="slider-area slider-active px-0">
                {/* <div className="single-slider d-flex align-items-center bg_cover" style={{ backgroundImage: `url(${Image1})` }}>
                    <div className="container fluid">
                        <div className="slider-content">
                            <h2 className="title" data-animation="fadeInLeft" data-delay="0.2s">
                                Education is the most powerful Weapon
                            </h2>
                            <ul className="slider-btn">
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
                            </ul>
                        </div>
                    </div>
                </div> */}
                <Carousel fade>
                    {Slider.map((data, index) => {
                        return (
                            <Carousel.Item interval={1000} key={index}>
                                <img className="d-block w-100" src={data.imageUrl} alt="First slide" />
                                {!isMobile ? (
                                    <Carousel.Caption style={{ top: '30%', bottom: 'auto', left: '10%', right: 'auto' }}>
                                        <div className="slider-content">
                                            <h2 className="title">{data.title}</h2>
                                            <ul className="slider-btn">
                                                <li>
                                                    <a className="main-btn main-btn-2" href="#">
                                                        Subscribe Us
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Carousel.Caption>
                                ) : null}
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </section>
        </>
    );
};

export default Slider;
