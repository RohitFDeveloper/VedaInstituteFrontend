/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

// bootstrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

//images
import CourseDetailsBg from 'assets/images/page-banner.webp';
import UpscPoster from 'assets/images/page-banner.webp';

const courseData = {
    name: 'SSC',
    links: [
        {
            title: 'Official Website',
            link: '#'
        },
        {
            title: 'Youtube Videos',
            link: '#'
        },
        {
            title: 'Strategy',
            link: '#'
        }
    ],
    posterUrl: 'https://m.media-amazon.com/images/I/61pDKrfqzuL.jpg',
    title: 'About Course',
    about: 'Even slightly believable. If you are going use a passage of Lorem Ipsum need These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents',
    pdfs: [
        {
            title: 'Exam Notice',
            pdf: '#'
        },
        {
            title: 'Exam Pattern',
            pdf: '#'
        },
        {
            title: 'Our Course',
            pdf: '#'
        }
    ],
    freeCourse: {
        course: 'Free Course Feature',
        courseFeature: [
            {
                title: '1',
                feature: 'Limited Notes'
            },
            {
                title: '2',
                feature: 'Limited Video Lectures'
            },
            {
                title: '3',
                feature: 'Limited Access'
            }
        ]
    },
    paidCourse: {
        course: 'Paid Course Feature',
        courseFeature: [
            {
                title: '1',
                feature: 'Complete Notes'
            },
            {
                title: '2',
                feature: 'All Video Lectures'
            },
            {
                title: '3',
                feature: 'Full Access'
            }
        ]
    }
};
const Index = () => {
    const [CourseDetails, setCourseDetails] = useState(courseData);
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${CourseDetailsBg})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h3 className="title">Course Details</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="teacher-details">
                <div className="container">
                    <div className="row teachers-row justify-content-center">
                        <div className="col-lg-5 col-md-6 col-sm-8 teachers-col">
                            <div className="single-teacher-details mt-50 text-center">
                                <div className="teacher-social">
                                    <ul className="social">
                                        {CourseDetails.links.map((data, index) => {
                                            return (
                                                <li key={index}>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={<Tooltip id="tooltip-top">{data.title}</Tooltip>}
                                                    >
                                                        <a href={data.link} target="_blank">
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    </OverlayTrigger>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="teacher-image">
                                    <a href="teacher-details.html">
                                        <img src={CourseDetails.posterUrl} width="373" height="503" alt="teacher" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 teachers-col">
                            <div className="teacher-details-content mt-45">
                                <h4 className="teacher-name">{CourseDetails.name}</h4>
                                <span className="designation">{CourseDetails.title}</span>
                                {/* <span className="department">Department of Business Administration</span> */}
                                <p>{CourseDetails.about}</p>
                                <ul className="teacher-contact">
                                    {CourseDetails.pdfs.map((data, index) => {
                                        return (
                                            <li key={index}>
                                                <strong>{data.title}</strong>{' '}
                                                <a href={data.pdf} target="_blank">
                                                    Click Here
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="teacher-details-tab">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="experience">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <ul className="nav nav-justified">
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#experience">
                                                    {CourseDetails.freeCourse.course}
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="single-content-tab px-4">
                                            {/* <h4 className="title">Limited</h4> */}
                                            {CourseDetails.freeCourse.courseFeature.map((data, index) => {
                                                return <p key={index}>{data.feature}</p>;
                                            })}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <ul className="nav nav-justified">
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#experience">
                                                    {CourseDetails.paidCourse.course}
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="single-content-tab px-4">
                                            {/* <h4 className="title">Limited</h4> */}
                                            {CourseDetails.paidCourse.courseFeature.map((data, index) => {
                                                return <p key={index}>{data.feature}</p>;
                                            })}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <ul className="nav nav-justified">
                                            <li className="nav-item">
                                                <a data-bs-toggle="tab" href="#experience">
                                                    Enroll Course
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="single-content-tab px-4" style={{ textAlign: 'center' }}>
                                            <h4 className="title">
                                                <a href="#" target="_blank">
                                                    Click Here
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
