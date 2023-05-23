/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState, useEffect } from 'react';

function index() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const toggleVisibility = () => {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const totalScroll = documentHeight - windowHeight;
        const currentScrollPercentage = (scrolled / totalScroll) * 100;

        setScrollPercentage(currentScrollPercentage);

        if (scrolled > windowHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // const buttonStyle = {
    //     borderWidth: `${scrollPercentage}%`
    // };
    return (
        <div>
            {isVisible && (
                <button className="scroll-to-top-button" onClick={scrollToTop}>
                    <i className="fas fa-chevron-up" style={{ color: '#fff' }}></i>
                </button>
            )}
            {/* <div className="scroll-percentage-indicator" style={{ color: 'grren' }}>
                {Math.round(scrollPercentage)}%
            </div> */}
        </div>
    );
}

export default index;
