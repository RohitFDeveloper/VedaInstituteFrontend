/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../../../store/actions/authActions';

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
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const handleSubmit = (formData) => {
        // const user = { email: formData.email };
        // dispatch(login(user));
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userEmail', formData.email);
    };
    const formik = useFormik({
        initialValues: {
            // mobile: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            // mobile: Yup.string()
            //     .matches(/^\d{10}$/, 'Invalid mobile number')
            //     .required('Mobile number is required'),
            email: Yup.string().email('Invalid email address').required('Email is required*'),
            password: Yup.string().required('Password is required*')
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
                .post(`${envVariables.baseURL}api/login`, data)
                .then((res) => {
                    console.log(res);
                    handleSubmit(values);
                    toast.success('Login successfull !', {
                        theme: 'colored',
                        position: 'bottom-right',
                        style: {
                            color: '#fff',
                            background: 'var(--secondary200)'
                        }
                    });
                    setLoading(false);
                    navigate('/');
                })
                .catch((error) => {
                    // console.log(error.response.data.message);
                    if (error.response.data.message === 'Email & Password does not match with our record.') {
                        toast.error('Invalid email or password !', {
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
                            <h2 className="title">Login</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-register-content">
                                <h4 className="title">Login to Your Account</h4>
                                <div className="login-register-form">
                                    <form onSubmit={formik.handleSubmit} className="form-check">
                                        <div className="single-form">
                                            <label htmlFor="email">Email/Mobile</label>
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.username}
                                            />
                                            {formik.touched.username && formik.errors.username ? (
                                                <div style={style.error}>{formik.errors.username}</div>
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
                                            <button className="main-btn" type="submit" disabled={isLoading}>
                                                {isLoading ? (
                                                    <span>
                                                        <i className="fas fa-spinner"></i> Please wait…
                                                    </span>
                                                ) : (
                                                    'Login'
                                                )}
                                            </button>
                                        </div>
                                        <div className="single-form">
                                            <button type="button" className="main-btn login-with-google-btn">
                                                Sign in with Google
                                            </button>
                                        </div>
                                        <div className="single-form d-flex justify-content-end">
                                            <div className="forget">
                                                <Link to="/reset-password">Forgot Password</Link>
                                            </div>
                                        </div>
                                        <div className="single-form">
                                            <label>You don't have account ?</label>
                                            <Link to="/register" className="main-btn main-btn-2">
                                                Create Account Now
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
