/* eslint-disable no-unused-vars */
import React from 'react';
import aboutBg1 from 'assets/images/page-banner.webp';
import aboutTech1 from 'assets/images/teachers/teacher-1.webp';
import aboutUs from 'assets/images/my_img/about_us.jpg';
import featuresImg from 'assets/images/features-2.webp';
import countImg from 'assets/images/counter-bg.webp';

// icons
import icon1 from 'assets/images/icon/icon-2-1.webp';
import icon2 from 'assets/images/icon/icon-2-2.webp';
import icon3 from 'assets/images/icon/icon-2-3.webp';
import icon4 from 'assets/images/icon/icon-2-4.webp';
import icon5 from 'assets/images/icon/icon-2-5.webp';
import icon6 from 'assets/images/icon/icon-2-6.webp';
import Ourfact from 'pages/home/components/ourfact';

const featuresIcon1 = [
    {
        icon: icon1,
        content1: '250+',
        content2: 'courses'
    },
    {
        icon: icon2,
        content1: 'Skill Based',
        content2: 'Scholarships'
    },
    {
        icon: icon3,
        content1: 'Online',
        content2: 'Education'
    }
];

const featuresIcon2 = [
    {
        icon: icon4,
        content1: 'Expert',
        content2: 'Teachers'
    },
    {
        icon: icon5,
        content1: 'After Course',
        content2: 'Certification'
    },
    {
        icon: icon6,
        content1: 'Download',
        content2: 'Prospectus'
    }
];

const missionCard = [
    {
        heading: 'Our Mission',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    },
    {
        heading: 'Our Goal',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    },
    {
        heading: 'Our Vision',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
    }
];

const Index = () => {
    return (
        <>
            {/* <!--====== Page Banner Start ======--> */}

            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${aboutBg1})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h3 className="title">About Us</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== About Start ======--> */}

            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
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
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image mt-50">
                                <img src={aboutUs} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Features Start ======--> */}

            <div className="features-area-2 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="features-image-2">
                                <img src={featuresImg} width="342" height="524" alt="Features" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="features-items">
                                <div className="features-items-wrapper">
                                    {featuresIcon1.map((item, index) => (
                                        <div
                                            className="single-features-item d-flex align-items-center wow fadeInUpBig"
                                            data-wow-duration="1s"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="item-icon">
                                                <img src={item.icon} width="70" height="70" alt="Icon" />
                                            </div>
                                            <div className="item-content media-body">
                                                <p>
                                                    {item.content1} <br /> {item.content2}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="features-items-wrapper">
                                    {featuresIcon2.map((item, index) => (
                                        <div
                                            className="single-features-item d-flex align-items-center wow fadeInUpBig"
                                            data-wow-duration="1s"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="item-icon">
                                                <img src={item.icon} width="70" height="70" alt="Icon" />
                                            </div>
                                            <div className="item-content media-body">
                                                <p>
                                                    {item.content1} <br />
                                                    {item.content2}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--====== About Director Start ======--> */}
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-40">
                                <h2 className="about-title">
                                    About <span>Director</span>
                                </h2>
                                <span className="line"></span>
                                <p>
                                    Even slightly believable. If you are going use passage of Lorem Ipsum need desire to obtain pain of
                                    itself, because it is pain de sires many pain of itself occur for your study <br /> <br /> Even slightly
                                    believable. If you are going use passage of Lorem Ipsum need desir
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image mt-50">
                                <img src={aboutUs} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Mission Start ======--> */}

            <section className="about_mission pt-0">
                <div className="container">
                    <div className="row">
                        {missionCard.map((item, index) => (
                            <div className="col-lg-4">
                                <div className="mission_detail">
                                    <h4>{item.heading}</h4>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <!--====== Counter Start  ======--> */}

            <Ourfact />
            {/* <div className="counter-area-2">
                <div className="container">
                    <div className="counter-wrapper-2 bg_cover" style={{ backgroundImage: `url(${countImg})` }}>
                        <div className="row">
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30">
                                    <span className="counter-count">
                                        <span className="count" data-count="3652">
                                            0
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30">
                                    <span className="counter-count">
                                        <span className="count" data-count="105">
                                            0
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Faculties</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30">
                                    <span className="counter-count">
                                        <span className="count" data-count="120">
                                            0
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Branches</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30">
                                    <span className="counter-count">
                                        <span className="count" data-count="30">
                                            0
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Awards win</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <!--====== Why choose Us Start ======--> */}
            <section className="choose-us" style={{ backgroundColor: '#f0f8ff', padding: '75px 0' }}>
                <div className="container">
                    <div className="row justify-content-center p-2">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title-2 text-center ">
                                <h2 className="title">Why Veda Institute comes</h2>
                                <span className="line"></span>
                                <p style={{ color: '#010101', textAlign: 'justify' }}>
                                    Even slightly believable. If you are going use a passage of Lorem Ipsum need some Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione
                                    temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore
                                    doloribus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Teachers Start ======--> */}

            <section className="teachers-area" style={{ padding: '75px 0px ' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mt-40">
                                <h2 className="title">Meet our Teachers</h2>
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
        </>
    );
};

export default Index;
