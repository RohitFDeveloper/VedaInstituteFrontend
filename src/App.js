/* eslint-disable no-unused-vars */
import React from 'react';

// thrid party
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// componnets routing
const Layout = lazy(() => import('./layout/index.jsx'));

const App = () => {
    return (
        <>
            <Suspense fallback={<div>Please wait...</div>}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<div>This is homepage</div>} />
                        {/* <Route path="contact" element={<Contact />} /> */}
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
