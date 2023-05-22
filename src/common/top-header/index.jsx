import React from 'react';
// others
import Marquee from 'react-fast-marquee';

function Index() {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrapper d-flex flex-wrap justify-content-sm-between">
                        <div className="header-top-left mt-10">
                            <ul className="header-meta" style={{ width: '600px', color: '#fff' }}>
                                <li>
                                    <Marquee>Grow Faster, Higher and Stronger!!</Marquee>
                                </li>
                            </ul>
                        </div>
                        <div className="header-top-right mt-10">
                            <div className="header-link">
                                <a className="notice" href="#">
                                    +91 1234567890
                                </a>
                                <a className="notice" href="#">
                                    infoedumate@example.com
                                </a>
                                <a className="login" href="#">
                                    Login
                                </a>
                                <a className="register" href="#">
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
