/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useMediaQuery } from 'react-responsive';

// form validation
import { useFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// image
import LoginBg from 'assets/images/page-banner.webp';

const Index = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            DOB: '',
            email: '',
            contact: '',
            address: '',
            school: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('First name is required*'),
            lastname: Yup.string().required('Last name is required*'),
            DOB: Yup.string().required('DOB is required*'),
            email: Yup.string().email('Invalid email address').required('Email is required*'),
            contact: Yup.string()
                .min(10)
                .max(10)
                .matches(phoneRegExp, 'Contact number is not valid')
                .required('Contact number is required'),
            address: Yup.string().required('address is required*').min(10, 'Your address is too short , please fill full address.'),
            school: Yup.string().required('school is required*').min(10, 'fill full name of school / college.'),
            confirmPassword: Yup.string()
                .required('Password is required*')
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm();
        }
    });

    const style = {
        nameCont: {
            display: 'flex',
            columnGap: '8px',
            flexDirection: isMobile ? 'column' : 'row'
        },

        error: {
            color: 'var(--errorMain)'
        }
    };

    return (
        <>
            <section class="page-banner">
                <div class="page-banner-bg bg_cover" style={{ backgroundImage: `url(${LoginBg})` }}>
                    <div class="container">
                        <div class="banner-content text-center">
                            <h2 class="title">Admission</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="login-register">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="login-register-content">
                                <h4 class="title">Admission Form</h4>

                                <div class="login-register-form">
                                    <form onSubmit={formik.handleSubmit} className="form-check">
                                        <div style={style.nameCont} className="row">
                                            <div class="single-form col">
                                                <label htmlFor="firstname">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstname"
                                                    name="firstname"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.firstname}
                                                />
                                                {formik.touched.firstname && formik.errors.firstname ? (
                                                    <div style={style.error}>{formik.errors.firstname}</div>
                                                ) : null}
                                            </div>

                                            <div class="single-form col">
                                                <label htmlFor="lastname">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastname"
                                                    name="lastname"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.lastname}
                                                />
                                                {formik.touched.lastname && formik.errors.lastname ? (
                                                    <div style={style.error}>{formik.errors.lastname}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div style={style.nameCont} className="row">
                                            <div class="single-form col">
                                                <label htmlFor="email">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    id="date"
                                                    name="DOB"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.DOB}
                                                />
                                                {formik.touched.DOB && formik.errors.DOB ? (
                                                    <div style={style.error}>{formik.errors.DOB}</div>
                                                ) : null}
                                            </div>
                                            <div class="single-form col">
                                                <label htmlFor="email">Gender</label>
                                                <div className="d-flex align-items-center py-2">
                                                    <input type="radio" id="date" name="date" style={{ height: '16px' }} />
                                                    <label class="form-check-label px-3" for="flexRadioDefault1">
                                                        Male
                                                    </label>
                                                    <input type="radio" id="date" name="date" style={{ height: '16px' }} />
                                                    <label class="form-check-label px-3" for="flexRadioDefault1">
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={style.nameCont} className="row">
                                            <div class="single-form col">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div style={style.error}>{formik.errors.email}</div>
                                                ) : null}
                                            </div>
                                            <div class="single-form col">
                                                <label htmlFor="contact">Phone</label>
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
                                        <div style={style.nameCont} className="row">
                                            <div class="single-form col">
                                                <label htmlFor="fahterName">Fahter Name</label>
                                                <input type="text" id="fahterName" name="fahterName" />
                                            </div>
                                            <div class="single-form col">
                                                <label htmlFor="motherName">Mother Name</label>
                                                <input type="text" id="motherName" name="motherName" />
                                            </div>
                                        </div>
                                        <div style={style.nameCont} className="row">
                                            <div class="single-form col">
                                                <label htmlFor="state">State</label>
                                                <input type="text" id="state" name="state" />
                                            </div>
                                            <div class="single-form col">
                                                <label htmlFor="city">City</label>
                                                <input type="text" id="city" name="city" />
                                            </div>
                                        </div>
                                        <div class="single-form">
                                            <label htmlFor="address">Address</label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.address}
                                            />
                                            {formik.touched.address && formik.errors.address ? (
                                                <div style={style.error}>{formik.errors.address}</div>
                                            ) : null}
                                        </div>
                                        <br />
                                        <div>
                                            <h6 class="title">Education Details</h6>
                                        </div>
                                        <div class="single-form">
                                            <label htmlFor="highSchool">Name of School / College</label>
                                            <input
                                                type="text"
                                                id="school"
                                                name="school"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.school}
                                            />
                                            {formik.touched.school && formik.errors.school ? (
                                                <div style={style.error}>{formik.errors.school}</div>
                                            ) : null}
                                        </div>
                                        <div style={style.nameCont} className="row">
                                            <div class="single-form col">
                                                <Form.Select aria-label="Class" style={{ lineHeight: '2.5' }}>
                                                    <option>Class</option>
                                                    {['6th - 8th', '9th - 10th', '11th - 12th', 'Under Graduate', 'Post Graduate'].map(
                                                        (item, index) => (
                                                            <option value="1">{item}</option>
                                                        )
                                                    )}
                                                </Form.Select>
                                            </div>
                                            <div class="single-form col">
                                                <Form.Select aria-label="Medium" style={{ lineHeight: '2.5' }}>
                                                    <option>Medium</option>
                                                    <option value="1">Hindi</option>
                                                    <option value="2">English</option>
                                                    <option value="3">Other</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div class="single-form">
                                            <div class="checkbox">
                                                <input type="checkbox" id="remember" />
                                                <label for="remember">
                                                    <span></span>Receive Information Are True
                                                </label>
                                            </div>
                                        </div>
                                        <div class="single-form">
                                            <button class="main-btn" type="submit">
                                                Register
                                            </button>
                                        </div>

                                        <div class="single-form">
                                            <label>Already have an account?</label>
                                            <Link to="/login" class="main-btn main-btn-2">
                                                Log in instead!
                                            </Link>
                                        </div>
                                    </form>
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
