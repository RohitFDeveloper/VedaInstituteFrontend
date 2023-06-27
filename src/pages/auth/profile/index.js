/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Table, Button } from 'react-bootstrap';
// form validation
import { useFormik } from 'formik';
import * as Yup from 'yup';

// image
import LoginBg from 'assets/images/page-banner.webp';

const purchasedCourse = [
    {
        id: 1,
        course: 'UPSC',
        purchasedDate: '20-05-2023',
        expiryDate: '08-06-2023'
    },
    {
        id: 2,
        course: 'SSC',
        purchasedDate: '10-04-2023',
        expiryDate: '07-06-2023'
    },
    {
        id: 3,
        course: 'BANK PO',
        purchasedDate: '12-03-2023',
        expiryDate: '10-06-2023'
    },
    {
        id: 4,
        course: 'BANK PO',
        purchasedDate: '12-03-2023',
        expiryDate: '06-06-2023'
    }
];

const Index = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [currentDate, setcurrentDate] = useState('');

    // var currentDate = null;
    const formik = useFormik({
        initialValues: {
            firstname: 'Sandeep',
            lastname: 'Sharma',
            username: 'Sandeep99',
            email: 'sandeep@gmail.com',
            contact: '0123456789',
            selectExam: 'upsc'
            // password: '',
            // confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('First name is required*'),
            lastname: Yup.string().required('Last name is required*'),
            username: Yup.string().required('Username is required*'),
            email: Yup.string().email('Invalid email address').required('Email is required*'),
            contact: Yup.string().required('Mobile number is required*'),
            selectExam: Yup.string().required('Please select exam')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
        }
    });
    useEffect(() => {
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
        let currentYear = date.getFullYear();
        setcurrentDate(`${currentDay}-${currentMonth}-${currentYear}`);
        // console.log('The current date is ' + currentDate);
        // debugger;
    }, []);
    const style = {
        nameCont: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            paddingTop: '30px',
            alignItems: 'center'
        },
        buttonCon: {
            display: 'grid',
            gridAutoFlow: 'column',
            gap: '0.5rem',
            alignItems: 'center',
            maxWidth: '280px'
        },
        error: {
            color: 'var(--errorMain)'
        },
        tableContent: {
            textAlign: 'center',
            whiteSpace: 'nowrap'
        }
    };
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${LoginBg})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Profile</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="login-register-content">
                                <h4 className="title">Your Account Information</h4>
                                <div className="login-register-form">
                                    <form onSubmit={formik.handleSubmit} className="form-check">
                                        <div className="row pb-4">
                                            <div className="col-md-5">
                                                <div className="row d-flex justify-content-center ">
                                                    <div className="profile-av pt-5">
                                                        <div className="d-flex justify-content-center pt-3">
                                                            <div className=" profile-avtar ">
                                                                <img
                                                                    className="img-profile"
                                                                    src="https://cdn.dribbble.com/users/1175294/avatars/normal/33d5e5a25cc556ee7538eaf4b5808a0e.jpeg?1589591872"
                                                                    alt="img1"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-center py-3">
                                                            <div>
                                                                <h6>User Name : </h6>
                                                                <span>nabh@890</span>
                                                            </div>
                                                        </div>

                                                        <div className=" btn-profile d-flex justify-content-center py-3">
                                                            {/* <Button className="profile-upload text-uppercase mx-2">Upload</Button>
                                                            <Button className="profile-delete text-uppercase mx-2">delete</Button> */}
                                                            <div className="button" style={style.buttonCon}>
                                                                <a>
                                                                    <Button className="normalBtn" size="sm">
                                                                        Upload / Edit
                                                                    </Button>
                                                                </a>

                                                                <Button
                                                                    variant="outline-dark"
                                                                    className="btnDark"
                                                                    size="sm"
                                                                    // onClick={() => showPaper(data.pdfUrl)}
                                                                >
                                                                    Remove
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div style={style.nameCont} className="row">
                                                    <div className="single-form col">
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
                                                    <div className="single-form col">
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
                                                <div style={style.nameCont} className="row pt-0">
                                                    <div className="single-form col">
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
                                                    <div className="single-form col">
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
                                                <div className="single-form">
                                                    <button className="main-btn" type="submit">
                                                        Edit Profile
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mt-4 purchase-course">
                                            <div className="col-md-12">
                                                <h4 className="title">Purchased Courses</h4>
                                                <div className="single-form">
                                                    <Table striped responsive className="profile-table" style={style.tableContent}>
                                                        <thead>
                                                            <tr>
                                                                <th>S.No.</th>
                                                                <th>Course</th>
                                                                <th>Purchased Date</th>
                                                                <th>Expiry Date</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {purchasedCourse.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>{item.id}</td>
                                                                    <td>{item.course}</td>
                                                                    <td>{item.purchasedDate}</td>
                                                                    <td>{item.expiryDate}</td>
                                                                    <td>
                                                                        {item.expiryDate >= currentDate ? (
                                                                            <Button
                                                                                variant="primary"
                                                                                size="sm"
                                                                                style={{
                                                                                    background: 'var(--secondaryMain)',
                                                                                    borderRadius: '50px',
                                                                                    padding: '2px 12px',
                                                                                    border: '0'
                                                                                }}
                                                                            >
                                                                                Active
                                                                            </Button>
                                                                        ) : (
                                                                            <Button
                                                                                variant="primary"
                                                                                size="sm"
                                                                                style={{
                                                                                    background: 'var(--errorMain)',
                                                                                    borderRadius: '50px',
                                                                                    padding: '2px 12px',
                                                                                    border: '0'
                                                                                }}
                                                                            >
                                                                                Expired
                                                                            </Button>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>
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
        </>
    );
};

export default Index;
