/* eslint-disable no-unused-vars */
import React from 'react';
// thrid party
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// componnets routing
// const Layout = lazy(() => import('layout/index.js'));
import Layout from 'layout/index';
const Home = lazy(() => import('pages/home/index'));
// Start About -> subpages
const AboutUs = lazy(() => import('pages/about/index'));
// const AboutInstitute = lazy(() => import('pages/about/about-institute/index'));
// const ExperTeam = lazy(() => import('pages/about/expert-team/index'));
// End About -> subpages

// Start Job Portal
const JobPortal = lazy(() => import('pages/job-portal/index'));
// End Job Portal

// Start Previous Years Papers
const PreviousYearPapers = lazy(() => import('pages/previous-year-papers/index'));
const ExamPapers = lazy(() => import('pages/previous-year-papers/exam-papers'));
// End Previous Years Papers

// Start Gallery -> subpages
const Gallery = lazy(() => import('pages/gallery/index'));
// End Gallery -> subpages

// Start Courses -> subpages
const Upsc = lazy(() => import('pages/courses/upsc/index'));
const Ssc = lazy(() => import('pages/courses/ssc/index'));
const Bankpo = lazy(() => import('pages/courses/bank-po/index'));
// End Courses -> subpages

// Start Login & Register
const Login = lazy(() => import('pages/auth/login/index'));
const Register = lazy(() => import('pages/auth/register/index'));
// End Login & Register

// Start ContactUs
const ContactUs = lazy(() => import('pages/contact-us/index'));
// End ContactUs

// Start Admission
const Admission = lazy(() => import('pages/online-admission/index'));
// End Admission

// Start AskQuestion
const AskQuestion = lazy(() => import('pages/ask-a-question/index'));
const Questions = lazy(() => import('pages/ask-a-question/question-page'));
// End AskQuestion

const App = () => {
    return (
        <>
            <Suspense fallback={<div>Please wait...</div>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about-us" element={<AboutUs />} />
                        {/* <Route path="about/institute" element={<AboutInstitute />} /> */}
                        {/* <Route path="about/team" element={<ExperTeam />} /> */}
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="job-portal" element={<JobPortal />} />
                        <Route path="previous-year-papers" element={<PreviousYearPapers />} />
                        <Route path="previous-year-papers/:id/papers" element={<ExamPapers />} />
                        <Route path="course/upsc" element={<Upsc />} />
                        <Route path="course/ssc" element={<Ssc />} />
                        <Route path="course/bank-po" element={<Bankpo />} />
                        <Route path="ask-question" element={<AskQuestion />} />
                        <Route path="ask-question/:id/:type" element={<Questions />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="contact-us" element={<ContactUs />} />
                        <Route path="admission" element={<Admission />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
