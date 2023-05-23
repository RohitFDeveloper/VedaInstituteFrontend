/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// others
import Marquee from 'react-fast-marquee';

// const data
import vedaInfo from 'vedaInfo';
const advertiseMsg = [
    {
        msg: 'Grow Faster, Higher and Stronger!!',
        blink: false
    },
    {
        msg: 'Hurry Up!! Join Us',
        blink: true
    }
];
const contactData = [
    {
        title: vedaInfo.contactInfo.contactNo1,
        icon: 'fas fa-phone',
        url: '/contact',
        blink: true
    },
    {
        title: vedaInfo.contactInfo.emailId1,
        icon: 'fas fa-globe-africa',
        url: '/email',
        blink: false
    }
];

function Index() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [AdsMsg, setAdsMsg] = useState(advertiseMsg);
    const [ContactInfo, setContactInfo] = useState(contactData);
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrapper d-flex flex-wrap justify-content-sm-between">
                        <div className="header-top-left mt-10">
                            <ul className="header-meta" style={{ width: !isMobile ? '600px' : '100%', color: '#fff' }}>
                                <li>
                                    <Marquee>
                                        <div className="d-flex flex-row">
                                            {AdsMsg.map((data, index) => {
                                                return (
                                                    <>
                                                        <div
                                                            className={data.blink ? 'px-2 blink' : 'px-2'}
                                                            style={{ color: data.blink ? 'var(--ternaryLight)' : null }}
                                                            key={index}
                                                        >
                                                            {data.msg}
                                                        </div>
                                                        <span className="px-4">|</span>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </Marquee>
                                </li>
                            </ul>
                        </div>
                        {!isMobile ? (
                            <div className="header-top-right mt-10">
                                <div className="header-link">
                                    {ContactInfo.map((data, index) => {
                                        return (
                                            <>
                                                <Link className="notice" to={data.url} key={index}>
                                                    <span>
                                                        <i
                                                            className={data.icon}
                                                            style={{ color: '#fff', transform: 'rotate(104deg)', margin: '0 5px' }}
                                                        ></i>
                                                    </span>
                                                    {data.title}
                                                </Link>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
