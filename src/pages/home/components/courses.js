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
            <section class="top-courses-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="section-title mt-40">
                                <h2 class="title">
                                    Here is our <br /> Top Courses
                                </h2>
                                <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
                            </div>
                        </div>
                    </div>
                    <div class="courses-wrapper">
                        <div class="row">
                            {subjectData.map((item, index) => (
                                <div class="col-lg-3 col-sm-6 courses-col" key={index}>
                                    <div
                                        class="single-courses mt-30 wow fadeInUpBig"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                        style={style.border}
                                    >
                                        <a href="#" class="category">
                                            {item.category}
                                        </a>
                                        <h4 class="courses-title">
                                            <a href="#">{item.subName}</a>
                                        </h4>
                                        <div class="duration-fee">
                                            <p class="duration">
                                                Duration: <span> {item.Duration}</span>
                                            </p>
                                            <p class="fee">
                                                Fee: <span> {item.Fees}</span>
                                            </p>
                                        </div>
                                        <div class="rating">
                                            <span>Rating: </span>
                                            <ul class="star">
                                                {['1', '2', '3,', '4', '5'].map((item, index) => (
                                                    <li key={index}>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div class="courses-link">
                                            <a class="apply" href="#">
                                                Online Apply
                                            </a>
                                            <a class="more" href="#">
                                                Read more <i class="fas fa-chevron-right"></i>
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
