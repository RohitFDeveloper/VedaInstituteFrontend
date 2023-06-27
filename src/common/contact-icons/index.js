/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

// exta css
const style = {
    common: {
        zIndex: '1000',
        position: 'fixed',
        left: '10px',
        padding: '14px 18px',
        borderRadius: '50%',
        border: 'none',
        animation: 'bot-to-top 2s ease-out'
    },
    button2: {
        bottom: '70px',
        backgroundColor: '#25D366',
        color: 'white'
    },
    icon2: {
        color: '#fff',
        fontSize: '28px'
    },
    button3: {
        zIndex: '1000',
        position: 'fixed',
        left: '0px',
        padding: '10px 5px',
        borderRadius: '5px',
        border: 'none',
        top: '250px',
        backgroundColor: 'var(--errorMain)',
        color: 'white'
    },
    btnTitle: {
        color: '#fff',
        fontSize: '16px',
        writingMode: 'vertical-lr',
        transform: 'rotate(-180deg)'
        // textOrientation: 'upright'
    }
};

function index() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    // const callUs = () => {
    //     console.log('callUs');
    // };
    const whatsappUs = () => {
        console.log('whatsappUs');
    };
    const enquiryUs = () => {
        console.log('enquiryUs');
    };
    return (
        <>
            {/* <button style={{ ...style.common, ...style.button1 }} onClick={callUs}>
                <i className="fas fa-phone-alt" style={style.icon1}></i>
            </button> */}
            <button style={{ ...style.common, ...style.button2 }}>
                <a href="https://api.whatsapp.com/send?phone=3197010240285" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" style={style.icon2}></i>
                </a>
            </button>
            <button style={style.button3}>
                <Link to="contact-us" style={style.btnTitle}>
                    Enquiry Us
                </Link>
            </button>
        </>
    );
}

export default index;
