/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
// media query
import { useMediaQuery } from 'react-responsive';

// icons
import Icon1 from 'assets/images/icon/icon-1.webp';
import Icon2 from 'assets/images/icon/icon-2.webp';
import Icon3 from 'assets/images/icon/icon-3.webp';
import { queryByDisplayValue } from '@testing-library/react';

// const data
const courseData = [
    {
        courseName: 'JEE',
        courseContent: 'Lets Learn',
        icon: Icon1,
        url: 'courses/jee'
    },
    {
        courseName: 'NEET',
        courseContent: 'Lets Learn',
        icon: Icon2,
        url: 'courses/neet'
    },
    {
        courseName: 'PAT',
        courseContent: 'Lets Learn',
        icon: Icon3,
        url: 'courses/pat'
    },
    {
        courseName: 'CPAT',
        courseContent: 'Lets Learn',
        icon: Icon1,
        url: 'courses/cpat'
    },
    {
        courseName: 'BHU',
        courseContent: 'Lets Learn',
        icon: Icon2,
        url: 'courses/bhu'
    },
    {
        courseName: 'MANY MORE..',
        courseContent: 'Lets Learn',
        icon: Icon2,
        url: 'courses/etc'
    }
];

function OurExperties() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    // extra css
    const style = {
        mainContainer: { backgroundColor: '#f0f8ff', marginTop: '55px' },
        cardContainer: {
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(1,1fr)' : 'repeat(3,1fr)',
            gap: '10px',
            paddingTop: '55px'
        },
        border: {
            borderRadius: '6px'
        }
    };
    return (
        <>
            <div className="specialty-area" style={style.mainContainer}>
                <div className="container">
                    <div className="row">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title-2 text-center ">
                                    <h2 className="title">Our Experties</h2>
                                    <span className="line"></span>
                                    <p style={{ color: '#010101' }}>
                                        Even slightly believable. If you are going use a passage of Lorem Ipsum need some
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={style.cardContainer}>
                    {courseData.map((item, index) => (
                        <Link to={item.url} key={index}>
                            <div className="single-specialty active mt-30">
                                <div className="specialty-box" style={style.border}>
                                    <div className="box-icon">
                                        <img src={item.icon} width="70" height="70" alt="icon" />
                                    </div>
                                    <div className="box-content">
                                        <p>
                                            {item.courseName} <br /> {item.courseContent}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default OurExperties;
