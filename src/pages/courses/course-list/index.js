/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// bootstrap
import { Tooltip, OverlayTrigger, Card, Button, ListGroup } from 'react-bootstrap';

//images
import CourseDetailsBg from 'assets/images/page-banner.webp';
import UpscPoster from 'assets/images/page-banner.webp';

// extra css
const style = {
    bookCard: {
        overflow: 'hidden',
        whiteSpace: 'normal',
        height: '45px',
        lineHeight: '22px',
        textAlign: 'start',
        fontWeight: '600',
        padding: '0px 8px',
        display: '-webkit-box',
        webkitLineClamp: '2',
        webkitBoxOrient: 'vertical'
    }
};

const Index = () => {
    const [CourseDetails, setCourseDetails] = useState();
    const [ShowResult, setShowResult] = useState(false);
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required('Required!')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(formik.values.search);
            // resetForm();
        }
    });
    const handleChange = (e) => {
        formik.handleChange(e);
        // Perform some custom logic
        if (e.target.value != '') {
            // setShowResult(true);
            // setFilteredQuestions(
            //     questionsList.filter((item) => {
            //         return item.question.toLowerCase().includes(e.target.value.toLowerCase());
            //     })
            // );
        } else {
            // setShowResult(false);
            // setFilteredQuestions([]);
        }
    };
    const resetForm = () => {
        formik.resetForm();
        // setShowResult(false);
        // setFilteredQuestions([]);
    };
    function BasicExample() {
        return (
            <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src="https://reliableacademy.com/assets/images/media/upsc-classes-thane.jpeg" />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>Book Title</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={style.bookCard}>
                            A Comprehensive Guide For Odisha Secretariat ASO 2023 - English
                        </ListGroup.Item>
                        <ListGroup.Item style={{ color: '#010101', fontWeight: '600' }}>
                            ₹ 285 <span style={{ textDecoration: 'line-through', fontSize: '12px', fontWeight: '400' }}>₹ 339</span>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ color: '#2cab49', whiteSpace: 'nowrap', padding: '0', marginTop: '1rem' }}>
                            "TOP 15" coupen applied
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${CourseDetailsBg})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h3 className="title">Courses Details</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="courses-list">
                <div className="container">
                    <div className="row" style={{ margin: '0px 10px 50px 10px' }}>
                        <div className="col-lg-5 col-sm-12">
                            <div className="section-title-2">
                                <h3>Popular Courses</h3>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <div className="ask_serch p-0">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="serach_main" style={{ maxWidth: '100%' }}>
                                        <input
                                            type="text"
                                            name="search"
                                            className="form-control"
                                            style={{ color: 'var(--blackMain)', borderRadius: !ShowResult ? '100px' : '28px 28px 0 0' }}
                                            placeholder="Find solutions"
                                            onBlur={formik.handleBlur}
                                            onChange={handleChange}
                                            value={formik.values.search}
                                            helperText={formik.touched.search && formik.errors.search}
                                            error={Boolean(formik.touched.search && formik.errors.search)}
                                        />
                                        <div className="input-group-append search_btn">
                                            <button
                                                type="reset"
                                                className="btn mx-1"
                                                style={{ backgroundColor: 'var(--paper)', color: 'var(--grey600)' }}
                                                onClick={resetForm}
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                            <button className="btn btn-secondary" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[1, 2, 3, 4].map((index) => {
                            return (
                                <div className="col-lg-3 col-sm-12 p-2 d-flex justify-content-center" key={index}>
                                    <Link to="ssc">
                                        <div className="courses-list-content">
                                            <BasicExample />
                                            <div className="more-details-card">
                                                <div style={{ fontSize: '14px' }}>Click For</div>
                                                <div style={{ fontSize: '18px' }}>More Details</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
