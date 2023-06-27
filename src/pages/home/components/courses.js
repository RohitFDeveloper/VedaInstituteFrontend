import React from 'react';
import { Link } from 'react-router-dom';
import coursebgimg from 'assets/images/courses/Upse_img.jpg';
const subjectData = [
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550',
        url: 'courses/ssc'
    }
];

// extra css
const style = {
    border: {
        borderRadius: '6px',
        backgroundImage: ` url(${coursebgimg})`,
        position: 'relative',
        zIndex: '0',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
};

function Courses() {
    return (
        <>
            <section className="top-courses-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mt-40">
                                <h2 className="title">
                                    Here is our <br /> Top Courses
                                </h2>
                                <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
                            </div>
                        </div>
                    </div>
                    <div className="courses-wrapper">
                        <div className="row">
                            {subjectData.map((item, index) => (
                                <div className="col-lg-3 col-sm-6 courses-col" key={index}>
                                    <div
                                        className="single-courses mt-30 wow fadeInUpBig card-courses"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                        style={style.border}
                                    >
                                        <div className="category">{item.category}</div>
                                        <h4 className="courses-title">
                                            <a href="#">{item.subName}</a>
                                        </h4>
                                        <div className="duration-fee">
                                            <p className="duration">
                                                Duration: <span> {item.Duration}</span>
                                            </p>
                                            <p className="fee">
                                                Fee: <span> {item.Fees}</span>
                                            </p>
                                        </div>
                                        <div className="courses-link">
                                            <Link className="apply" to={item.url}>
                                                Online Apply
                                            </Link>
                                            <Link className="more" to={item.url}>
                                                Read more <i className="fas fa-chevron-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Courses;
