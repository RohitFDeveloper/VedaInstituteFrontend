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
const AboutInstitute = lazy(() => import('pages/about/about-institute/index'));
const ExperTeam = lazy(() => import('pages/about/expert-team/index'));
// End About -> subpages

// Start Courses -> subpages
const Upsc = lazy(() => import('pages/courses/upsc/index'));
// End Courses -> subpages

const App = () => {
    return (
        <>
            <Suspense fallback={<div>Please wait...</div>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about/institute" element={<AboutInstitute />} />
                        <Route path="about/team" element={<ExperTeam />} />
                        <Route path="course/upsc" element={<Upsc />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
