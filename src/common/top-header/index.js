/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// third party
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Marquee from 'react-fast-marquee';
import axios from 'axios';

// project others
import envVariables from 'environment.js';

// const data
import vedaInfo from 'vedaInfo';
const advertiseMsg = [
    {
        title: 'Grow Faster, Higher and Stronger!!',
        is_highlighted: false
    },
    {
        msg: 'Hurry Up!! Join Us',
        is_highlighted: true
    }
];
const contactData = [
    {
        title: vedaInfo.contactInfo.contactNo1,
        icon: 'fas fa-phone',
        url: '/contact-us',
        blink: true
    },
    {
        title: vedaInfo.contactInfo.emailId1,
        icon: 'fas fa-globe-africa',
        url: '/contact-us',
        blink: false
    }
];

function Index() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [AdsMsg, setAdsMsg] = useState(advertiseMsg);
    const [ContactInfo, setContactInfo] = useState(contactData);
    async function fetchNotifications() {
        await axios
            .get(`${envVariables.baseURL}api/top-header-info-list`)
            .then((res) => {
                console.log(res.data.data);
                setAdsMsg(res.data.data);
            })
            .catch((error) => {
                toast.error('Something went wrong with notifications!', {
                    theme: 'colored',
                    style: {
                        color: '#fff',
                        background: 'var(--errorMain)'
                    }
                });
            });
    }
    useEffect(() => {
        fetchNotifications();
    }, []);
    return (
        <>
            <ToastContainer />
            <div className="header-top">
                <div className="container-fluid">
                    <div className="header-top-wrapper d-flex flex-wrap justify-content-sm-between">
                        <div className="header-top-left mt-10">
                            <ul className="header-meta" style={{ width: !isMobile ? '600px' : '100%', color: '#fff' }}>
                                <li>
                                    <Marquee>
                                        <div className="d-flex flex-row">
                                            {AdsMsg.length > 0
                                                ? AdsMsg.map((data, index) => {
                                                      return (
                                                          <>
                                                              <div
                                                                  className={data.is_highlighted == 1 ? 'px-2 blink' : 'px-2'}
                                                                  style={{ color: data.is_highlighted == 1 ? 'var(--ternaryLight)' : null }}
                                                                  key={index}
                                                              >
                                                                  {data.title}
                                                              </div>
                                                              <span className="px-4">|</span>
                                                          </>
                                                      );
                                                  })
                                                : null}
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
