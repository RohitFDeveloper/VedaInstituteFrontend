/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// form validation
import { useFormik } from 'formik';
import * as Yup from 'yup';

// third party
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// project others
import envVariables from 'environment.js';

// image
import LoginBg from 'assets/images/page-banner.webp';
const style = {
    error: {
        color: 'var(--errorMain)'
    }
};

const Index = () => {
    const [isLoading, setLoading] = useState(false);
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            // username: '',
            email: '',
            contact: '',
            selectExam: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('First name is required*'),
            lastname: Yup.string().required('Last name is required*'),
            // username: Yup.string().required('Username is required*'),
            email: Yup.string().email('Invalid email address').required('Email is required*'),
            // contact: Yup.string().required('Mobile number is required*'),
            contact: Yup.string()
                .min(10)
                .max(10)
                .matches(phoneRegExp, 'Contact number is not valid')
                .required('Contact number is required'),
            selectExam: Yup.string().required('Please select exam'),
            password: Yup.string().required('Password is required*').min(5, 'Your password is too short.'),
            confirmPassword: Yup.string()
                .required('Password is required*')
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (values, { resetForm }) => {
            setLoading(true);
            const data = {
                first_name: values.firstname,
                last_name: values.lastname,
                email: values.email,
                phone: values.contact,
                exam_id: values.selectExam,
                password: values.password
            };
            axios
                .post(`${envVariables.baseURL}api/register`, data)
                .then((res) => {
                    // console.log(res);
                    toast.error('Regsitered Successfully!', {
                        theme: 'colored',
                        style: {
                            color: '#fff',
                            background: 'var(--secondaryMain)'
                        }
                    });
                    setLoading(false);
                })
                .catch((error) => {
                    if (error.response.data.errors.email == 'The email has already been taken.') {
                        toast.error('Email already registered!', {
                            theme: 'colored',
                            style: {
                                color: '#fff',
                                background: 'var(--errorMain)'
                            }
                        });
                    } else {
                        toast.error('Something went wrong with login!', {
                            theme: 'colored',
                            style: {
                                color: '#fff',
                                background: 'var(--errorMain)'
                            }
                        });
                    }
                    setLoading(false);
                });
            resetForm();
        }
    });
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${LoginBg})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Register</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-register-content">
                                <h4 className="title">Create Your Account</h4>

                                <div className="login-register-form">
                                    <form onSubmit={formik.handleSubmit} className="form-check">
                                        <div className="single-form">
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
                                        <div className="single-form">
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
                                        {/* <div className="single-form">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.username}
                                            />
                                            {formik.touched.username && formik.errors.username ? (
                                                <div style={style.error}>{formik.errors.username}</div>
                                            ) : null}
                                        </div> */}
                                        <div className="single-form">
                                            <label htmlFor="email">Email Address</label>
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
                                        <div className="single-form">
                                            <label htmlFor="contact">Mobile Number</label>
                                            <input
                                                type="text"
                                                id="contact"
                                                name="contact"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.contact}
                                            />
                                            {formik.touched.contact && formik.errors.contact ? (
                                                <div style={style.error}>{formik.errors.contact}</div>
                                            ) : null}
                                        </div>
                                        <div className="single-form">
                                            <label htmlFor="selectExam">Select Exam</label>
                                            <select
                                                id="selectExam"
                                                name="selectExam"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.selectExam}
                                            >
                                                <option value="">Select an option</option>
                                                <option value="upsc">UPSC</option>
                                            </select>
                                            {formik.touched.selectExam && formik.errors.selectExam ? (
                                                <div style={style.error}>{formik.errors.selectExam}</div>
                                            ) : null}
                                        </div>
                                        <div className="single-form">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />
                                            {formik.touched.password && formik.errors.password ? (
                                                <div style={style.error}>{formik.errors.password}</div>
                                            ) : null}
                                        </div>
                                        <div className="single-form">
                                            <label htmlFor="password">Confirm Password</label>
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                name="confirmPassword"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.confirmPassword}
                                            />
                                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                                <div style={style.error}>{formik.errors.confirmPassword}</div>
                                            ) : null}
                                        </div>
                                        <div className="single-form">
                                            <button className="main-btn" type="submit">
                                                {isLoading ? (
                                                    <span>
                                                        <i className="fas fa-spinner"></i> Submitting…
                                                    </span>
                                                ) : (
                                                    'Register'
                                                )}
                                            </button>
                                        </div>

                                        <div className="single-form">
                                            <label>Already have an account?</label>
                                            <Link to="/login" className="main-btn main-btn-2">
                                                Login to your account!
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
