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
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('First name is required*'),
            lastname: Yup.string().required('Last name is required*'),
            email: Yup.string().email('Invalid email address').required('Email is required*'),
            username: Yup.string().required('Username is required*'),
            password: Yup.string().required('Password is required*').min(5, 'Your password is too short.'),
            confirmPassword: Yup.string()
                .required('Password is required*')
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
                            <h2 class="title">Register</h2>
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
                                        <div class="single-form">
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
                                        <div class="single-form">
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
                                        <div class="single-form">
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
                                        <div class="single-form">
                                            <div class="checkbox">
                                                <input type="checkbox" id="remember" />
                                                <label for="remember">
                                                    <span></span>Receive Offers From Our Partners
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
