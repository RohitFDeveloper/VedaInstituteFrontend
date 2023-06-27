/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from 'assets/images/counter-bg.webp';

const ourInfo = [
    {
        title: 'About Us',
        url: 'about-us'
    },
    {
        title: 'Contact Us',
        url: 'contact-us'
    },
    {
        title: 'FAQs',
        url: 'faqs'
    },
    {
        title: 'Terms & Conditions',
        url: 'terms-conditions'
    }
];
const latestCourses = [
    {
        title: 'Banking',
        url: 'courses/banking'
    },
    {
        title: 'SSC',
        url: 'courses/ssc'
    },
    {
        title: 'PSC',
        url: 'courses/psc'
    },
    {
        title: 'Railway',
        url: 'courses/railway'
    },
    {
        title: 'Agriculter',
        url: 'courses/agriculter'
    }
];
const socialLinks = [
    {
        title: 'Youtube',
        icon: 'fab fa-youtube',
        url: 'https://www.youtube.com/'
    },
    {
        title: 'Facebook',
        icon: 'fab fa-facebook',
        url: 'https://www.facebook.com/'
    },
    {
        title: 'Instagram',
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com/'
    }
];
function Index() {
    return (
        <>
            <section className="footer-area bg_cover" style={{ backgroundImage: ` url(${footerBg})` }}>
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Our Information</h4>
                                    <ul className="link-list">
                                        {ourInfo.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={item.url}>{item.title}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Latest Courses</h4>
                                    <ul className="link-list">
                                        {latestCourses.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={item.url}>{item.title}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Social Links</h4>
                                    <ul className="link-list">
                                        {socialLinks.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={item.url} target="_blank">
                                                        <i className={item.icon} style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                                        <span>{item.title}</span>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-link mt-45">
                                    <h4 className="footer-title">Contact Info</h4>
                                    <ul className="link-list">
                                        <li>
                                            <p>245, Veda Institute, Indore City, Madhya Pradesh, India</p>
                                        </li>
                                        <li>
                                            <p>
                                                <a href="tel:+01254659874">+01234 567 890 </a>
                                            </p>
                                            <p>
                                                <a href="tel:+32145857458">+98765 432 100</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <a href="#">vedainfo@veda.com</a>
                                            </p>
                                            <p>
                                                <a href="#">vedahelp@veda.com</a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <div className="copyright text-center">
                            <p>
                                &copy; 2023 <span> Veda Career Institute </span> Made with <i className="fa fa-heart"></i> by{' '}
                                <a href="#">company name</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
