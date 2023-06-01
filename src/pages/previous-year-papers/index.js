/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Row, Nav, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

// images
import jobportal from 'assets/images/page-banner.webp';
import ssccgl from 'assets/images/previous/ssccgl.png';
import ctet from 'assets/images/previous/ctet.png';
import cuet from 'assets/images/previous/cuet.png';
import ugcnet from 'assets/images/previous/ugc_net.png';
import upsc from 'assets/images/previous/upsc_all.png';
import ssc_all from 'assets/images/previous/ssc_All.png';
import banking_all from 'assets/images/previous/banking_All.png';
import railway_all from 'assets/images/previous/railways_All.png';

// project imports
import ExamPapers from './exam-papers';

// const data
const ExamsData = [
    {
        icon: ssccgl,
        title: 'SSC CHSL',
        url: 'ssc-chl/papers'
    },
    {
        icon: ssccgl,
        title: 'SSC CGL',
        url: 'ssc-cgl/papers'
    },
    {
        icon: upsc,
        title: 'UPSC Civil Services',
        url: 'upsc/papers'
    },
    {
        icon: ctet,
        title: 'CTET',
        url: 'ctet/papers'
    },
    {
        icon: cuet,
        title: 'CUET',
        url: 'cuet/papers'
    },
    {
        icon: ssccgl,
        title: 'SSC MTS',
        url: 'ssc-mts/papers'
    },
    {
        icon: ssccgl,
        title: 'SSC CPO',
        url: 'ssc-chl/papers'
    },
    {
        icon: ugcnet,
        title: 'UGC NET',
        url: 'ug-net/papers'
    }
];

const ExamNavItem = [
    {
        icon: ssc_all,
        title: 'SSC Exams'
    },
    {
        icon: banking_all,
        title: 'Bank Exams'
    },
    {
        icon: upsc,
        title: 'Civil Services Exams'
    },
    {
        icon: railway_all,
        title: 'Railway Exams'
    }
];

const navItemData = [
    [
        {
            icon: ssccgl,
            title: 'SSC CGL',
            papers: '250',
            url: 'ssc-cgl/papers'
        },
        {
            icon: ssccgl,
            title: 'SSC CHL',
            papers: '150',
            url: 'ssc-chl/papers'
        },
        {
            icon: ssccgl,
            title: 'SSC CGL',
            papers: '300',
            url: 'ssc-cgl/papers'
        },
        {
            icon: ssccgl,
            title: 'SSC CGL',
            papers: '250',
            url: 'ssc-cgl/papers'
        },
        {
            icon: ssccgl,
            title: 'SSC CHL',
            papers: '150',
            url: 'ssc-chl/papers'
        },
        {
            icon: ssccgl,
            title: 'SSC CGL',
            papers: '300',
            url: 'ssc-cgl/papers'
        }
    ],
    [
        {
            icon: banking_all,
            title: 'Bank PO',
            papers: '250',
            url: 'bank-po/papers'
        },
        {
            icon: banking_all,
            title: 'Bank Clerk',
            papers: '150',
            url: 'bank-clerk/papers'
        },
        {
            icon: banking_all,
            title: 'Bank Executive',
            papers: '300',
            url: 'bank-executive/papers'
        }
    ],
    [
        {
            icon: upsc,
            title: 'UPSC',
            papers: '250',
            url: 'upsc/papers'
        },
        {
            icon: upsc,
            title: 'MPPSC',
            papers: '150',
            url: 'mppsc/papers'
        },
        {
            icon: upsc,
            title: 'Patwari',
            papers: '300',
            url: 'patwari/papers'
        }
    ],
    [
        {
            icon: railway_all,
            title: 'RRB NTPC',
            papers: '250',
            url: 'rrb-ntpc/papers'
        },
        {
            icon: railway_all,
            title: 'RRB JE',
            papers: '150',
            url: 'rrb-je/papers'
        },
        {
            icon: railway_all,
            title: 'RPF SI',
            papers: '300',
            url: 'rpf-si/papers'
        }
    ]
];

function Index() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    // style
    const style = {
        navLink: {
            color: '#000',
            padding: '10px',
            backgroundColor: '#f2f2f2',
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },
        navItems: {
            display: 'flex',
            flexDirection: 'column'
        },
        examCard: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
        }
    };
    const [ExamList, setExamList] = useState(ExamsData);
    const [ExamNavs, setExamNavs] = useState(ExamNavItem);
    const [TabPane, setTabPane] = useState(0);
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${jobportal})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Previous Years Papers</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="previous_year_page_wr">
                <section className="popular_previous_papper">
                    <div className="container">
                        <div className="row">
                            <h3 className="text-center mb-5">Previous Year Papers for all Popular Govt. Exams</h3>
                        </div>
                        <div className="row">
                            {ExamList.map((data, index) => {
                                return (
                                    <div className="col-md-3 mb-4" key={index}>
                                        <Link to={data.url}>
                                            <div className="popular_gov_exam_wr">
                                                <div className="content">
                                                    <div className="icon">
                                                        <img className="img img-fluid" src={data.icon} alt={data.title} />
                                                    </div>
                                                    <div className="title">{data.title}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className="all_previous_year_wr">
                    <div className="container all_previous_year">
                        <div className="row">
                            <div className="section_title_wr">
                                <h3 className="text-center mb-5">Explore Previous Year Paper of all Exams</h3>
                                <p>Get exam-ready with concepts, questions and study notes as per the latest pattern</p>
                            </div>
                        </div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                            <Row className="exams_tabs_wr">
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        {ExamNavs.map((data, index) => {
                                            return (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={index} onClick={() => setTabPane(index)}>
                                                        <div style={style.navLink}>
                                                            <img
                                                                src={data.icon}
                                                                alt={data.title}
                                                                width="30"
                                                                height="30"
                                                                style={{ objectFit: 'cover', marginRight: '10px' }}
                                                            />
                                                            <div>{data.title}</div>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            );
                                        })}
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey={TabPane}>
                                            <article className="row exam_card_wr fade show">
                                                {navItemData[TabPane].map((data, index) => {
                                                    return (
                                                        <Link
                                                            to={data.url}
                                                            key={index}
                                                            className="col-xs-12 col-md-4 m-2 exam_card"
                                                            style={style.examCard}
                                                        >
                                                            {/* <div className="icon">
                                                                <img className="img img-fluid" src={data.icon} alt={data.title} />
                                                            </div> */}
                                                            <img
                                                                src={data.icon}
                                                                alt={data.title}
                                                                width="30"
                                                                height="30"
                                                                style={{ objectFit: 'cover' }}
                                                            />
                                                            <div style={style.navItems}>
                                                                <div style={{ textOverflow: 'ellipsis', color: '#000' }}>{data.title}</div>
                                                                <div style={{ color: '#86a1ae', fontSize: '.75rem' }}>
                                                                    {data.papers} Papers
                                                                </div>
                                                            </div>
                                                            <i
                                                                className="fas fa-chevron-right"
                                                                style={{ color: '#86a1ae', fontSize: '.75rem' }}
                                                            ></i>
                                                        </Link>
                                                    );
                                                })}
                                            </article>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Index;
