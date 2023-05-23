/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState, useEffect } from 'react';

// exta css
const style = {
    common: {
        zIndex: '1000',
        position: 'fixed',
        left: '10px',
        padding: '14px 18px',
        borderRadius: '50%',
        border: 'none'
    },
    button1: {
        bottom: '70px',
        backgroundColor: 'var(--primaryMain)',
        color: 'white'
    },
    button2: {
        bottom: '150px',
        backgroundColor: '#25D366',
        color: 'white'
    },
    icon1: {
        color: '#fff',
        fontSize: '24px'
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
    const callUs = () => {
        console.log('callUs');
    };
    const whatsappUs = () => {
        console.log('whatsappUs');
    };
    const enquiryUs = () => {
        console.log('enquiryUs');
    };
    return (
        <div>
            <button style={{ ...style.common, ...style.button1 }} onClick={callUs}>
                <i className="fas fa-phone-alt" style={style.icon1}></i>
            </button>
            <button style={{ ...style.common, ...style.button2 }} onClick={whatsappUs}>
                <i className="fab fa-whatsapp" style={style.icon2}></i>
            </button>
            <button style={style.button3} onClick={enquiryUs}>
                <div style={style.btnTitle}>Enquiry Us</div>
            </button>
        </div>
    );
}

export default index;
