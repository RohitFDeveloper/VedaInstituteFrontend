/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

// form validation
import { useFormik } from 'formik';
import * as Yup from 'yup';

// image
import LoginBg from 'assets/images/page-banner.webp';
const style = {
    error: {
        color: 'var(--errorMain)'
    }
};

const Index = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().email('Invalid email address').required('Email is required*'),
            password: Yup.string().required('Password is required*')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm();
        }
    });
    return (
        <>
            <section class="page-banner">
                <div class="page-banner-bg bg_cover" style={{ backgroundImage: `url(${LoginBg})` }}>
                    <div class="container">
                        <div class="banner-content text-center">
                            <h2 class="title">Login</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="login-register">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="login-register-content">
                                <h4 class="title">Login to Your Account</h4>
                                <div class="login-register-form">
                                    <form onSubmit={formik.handleSubmit} className="form-check">
                                        <div class="single-form">
                                            <label htmlFor="username">Email Address</label>
                                            <input
                                                type="email"
                                                id="username"
                                                name="username"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.username}
                                            />
                                            {formik.touched.username && formik.errors.username ? (
                                                <div style={style.error}>{formik.errors.username}</div>
                                            ) : null}
                                        </div>
                                        <div class="single-form">
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
                                        <div class="single-form">
                                            <button class="main-btn" type="submit">
                                                Login
                                            </button>
                                        </div>
                                        <div class="single-form d-flex justify-content-end">
                                            <div class="forget">
                                                <Link to="/reset-password">Lost Your Password</Link>
                                            </div>
                                        </div>
                                        <div class="single-form">
                                            <label>You don't have account ?</label>
                                            <Link to="/register" class="main-btn main-btn-2">
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
