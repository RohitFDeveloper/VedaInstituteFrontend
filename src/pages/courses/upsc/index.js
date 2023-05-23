/* eslint-disable no-unused-vars */
import React from 'react';
import aboutBg1 from 'assets/images/page-banner.webp';
import aboutCampus from 'assets/images/campus-1.webp';
import aboutTech1 from 'assets/images/teachers/teacher-1.webp';
const index = () => {
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${aboutBg1})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h3 className="title">Course Details</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section class="teacher-details">
                <div class="container">
                    <div class="row teachers-row justify-content-center">
                        <div class="col-lg-5 col-md-6 col-sm-8 teachers-col">
                            <div class="single-teacher-details mt-50 text-center">
                                <div class="teacher-social">
                                    <ul class="social">
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="teacher-image">
                                    <a href="teacher-details.html">
                                        <img src={aboutTech1} width="373" height="503" alt="teacher" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 teachers-col">
                            <div class="teacher-details-content mt-45">
                                <h4 class="teacher-name">UPSC</h4>
                                <span class="designation">About Course</span>
                                <span class="department">Department of Business Administration</span>
                                <p>
                                    Even slightly believable. If you are going use a passage of Lorem Ipsum need These cases are perfectly
                                    simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when
                                    nothing prevents
                                </p>
                                <ul class="teacher-contact">
                                    <li>
                                        <strong>PDF:</strong> <a href="#">Download Exam Pattern</a>
                                    </li>
                                    <li>
                                        <strong>PDF:</strong> <a href="#">Download Free Notes</a>
                                    </li>
                                    <li>
                                        <strong>PDF:</strong> <a href="#">Download Exam Strategies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="teacher-details-tab">
                        <ul class="nav nav-justified">
                            <li class="nav-item">
                                {/* class="active" */}
                                <a data-bs-toggle="tab" href="#experience">
                                    Free Course Feature
                                </a>
                            </li>
                            <li class="nav-item">
                                <a data-bs-toggle="tab" href="#educational">
                                    Paid Course Feature
                                </a>
                            </li>
                            <li class="nav-item">
                                <a data-bs-toggle="tab" href="#achievements ">
                                    Buy Course
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="experience">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Professor</h4>
                                            <p>Business Administration</p>
                                            <p>Boston University</p>
                                            <p>2012 to 2013</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Assistant Professor</h4>
                                            <p>Business Administration</p>
                                            <p>Boston University</p>
                                            <p>2010 to 2012</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Lecturer</h4>
                                            <p>Business Administration</p>
                                            <p>Boston University</p>
                                            <p>2008 to 2010</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="educational">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">PhD. in Business Studies</h4>
                                            <p>Boston University</p>
                                            <p>2005 - 2006</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Diploma in It Professional</h4>
                                            <p>Boston University</p>
                                            <p>2007 to 2008</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Diploma in Social Media</h4>
                                            <p>Yale University</p>
                                            <p>2010 to 2012</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Master in Business Studies</h4>
                                            <p>Boston University</p>
                                            <p>2003 - 2004</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Diploma in Communication Skills</h4>
                                            <p>Yale University</p>
                                            <p>2009 - 2010</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Diploma in Project Management</h4>
                                            <p>Boston University</p>
                                            <p>2012 - 2013</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Bachelor of Business Administration</h4>
                                            <p>Stanford University</p>
                                            <p>1999 - 2003</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Diploma in Team Management</h4>
                                            <p>Boston University</p>
                                            <p>2007 - 2008</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="achievements">
                                <div class="row">
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Best Recherche Award 2019</h4>
                                            <p>
                                                Lorem Ipsum need These cases are perfectly simple and easy to distinguish. In a free hour,
                                                when our power of choice.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Faculty Gold Medalist 2018</h4>
                                            <p>
                                                Lorem Ipsum need These cases are perfectly simple and easy to distinguish. In a free hour,
                                                when our power of choice.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                        <div class="single-content-tab">
                                            <h4 class="title">Best Teacher Award 2015</h4>
                                            <p>
                                                Lorem Ipsum need These cases are perfectly simple and easy to distinguish. In a free hour,
                                                when our power of choice.
                                            </p>
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

export default index;
