/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

// form validation
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// image
import LoginBg from 'assets/images/page-banner.webp';

// extra css

const style = {
    error: {
        color: 'var(--errorMain)'
    },
    contactBox: {
        padding: '20px 0',
        borderRadius: '5px',
        boxSizing: 'border-box',
        margin: '0 5px',
        boxShadow:
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
    }
};

const contactForm = [
    {
        type: 'name'
    },
    {
        type: 'email'
    },
    {
        type: 'contact'
    },
    {
        type: 'subject'
    },
    {
        type: 'details'
    }
];
const Index = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contact: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required*'),
            // lastname: Yup.string().required('Last name is required*'),
            email: Yup.string().email('Invalid email address').required('Email is required*'),
            contact: Yup.string().max(10).matches(phoneRegExp, 'Contact number is not valid').required('Contact number is required'),
            subject: Yup.string().required('Subject is required*'),
            message: Yup.string().required('Write something related to subject is required *')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm();
        }
    });
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${LoginBg})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Contact Us</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Contact Start ======--> */}

            <section className="contact-area" style={{ padding: '110px 0' }}>
                <div className="container">
                    <div className="row" style={style.contactBox}>
                        <div className="col-md-4">
                            <div className="contact">
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info-content">
                                        <h5 className="title">Address</h5>
                                        <p>297 Central Street, New Town North City, New York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact ">
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="info-content">
                                        <h5 className="title">Phone</h5>
                                        <p>
                                            <a href="tel:+62548254658">+62548 254 658</a>
                                            <span> &nbsp; , &nbsp;&nbsp;</span>
                                            <a href="tel:+99875587478">+99875 587 478</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact">
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="fas fa-globe-africa"></i>
                                    </div>
                                    <div className="info-content">
                                        <h5 className="title">Web</h5>
                                        <p>
                                            <a href="mailto://info@example.com">info@example.com</a>
                                            <span> &nbsp; , &nbsp;&nbsp;</span>
                                            <a href="www.example.html">www.example.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-title text-center">
                                    <h3 className="title">Leave a message here</h3>
                                    <p>
                                        Here is our event schedule where you can get information about time schedule about this event so
                                        it's very easy for you to manage your time and schedule
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="contact-form-wrapper">
                                    <form onSubmit={formik.handleSubmit} className="form-check">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Name"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.name}
                                                    />
                                                    {formik.touched.name && formik.errors.name ? (
                                                        <div style={style.error}>{formik.errors.name}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                    />
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <div style={style.error}>{formik.errors.email}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input
                                                        type="text"
                                                        name="contact"
                                                        placeholder="Contact"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.contact}
                                                    />
                                                    {formik.touched.contact && formik.errors.contact ? (
                                                        <div style={style.error}>{formik.errors.contact}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-form">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.subject}
                                                    />
                                                    {formik.touched.subject && formik.errors.subject ? (
                                                        <div style={style.error}>{formik.errors.subject}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-form">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Write here..."
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.message}
                                                    />
                                                    {formik.touched.message && formik.errors.message ? (
                                                        <div style={style.error}>{formik.errors.message}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <p className="form-message"></p>
                                            <div className="col-md-12">
                                                <div className="single-form text-center">
                                                    <button className="main-btn">Submit now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Contact Ends ======--> */}
        </>
    );
};

export default Index;
