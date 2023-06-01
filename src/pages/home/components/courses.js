import React from 'react';

const subjectData = [
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    },
    {
        category: '#science',
        subName: 'Computer Science & Engineering',
        Duration: '4year',
        Fees: '$550'
    }
];

// extra css
const style = {
    border: {
        borderRadius: '6px'
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
                                        className="single-courses mt-30 wow fadeInUpBig"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                        style={style.border}
                                    >
                                        <a href="#" className="category">
                                            {item.category}
                                        </a>
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
                                        <div className="rating">
                                            <span>Rating: </span>
                                            <ul className="star">
                                                {['1', '2', '3,', '4', '5'].map((item, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="courses-link">
                                            <a className="apply" href="#">
                                                Online Apply
                                            </a>
                                            <a className="more" href="#">
                                                Read more <i className="fas fa-chevron-right"></i>
                                            </a>
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
