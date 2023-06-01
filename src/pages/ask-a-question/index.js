/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//images
import askquestion from 'assets/images/page-banner.webp';
// import textImage from 'assets/images/my_img/textbook.svg';
// import textImage1 from 'assets/images/my_img/book.png';
import textImage1 from 'assets/images/my_img/maths.png';
import textImage2 from 'assets/images/my_img/science.png';
// import textImage3 from 'assets/images/my_img/history.png';
import textImage3 from 'assets/images/my_img/history-book (1).png';
import textImage4 from 'assets/images/my_img/economic-book.png';
import textImage5 from 'assets/images/my_img/psychology.png';
import textImage6 from 'assets/images/my_img/geo.png';
import textImage7 from 'assets/images/my_img/civil.png';
import textImage8 from 'assets/images/my_img/gk.png';

const askQues = [
    {
        id: 'maths',
        textImg: textImage1,
        subjTittle: 'Mathematics'
    },
    {
        id: 'science',
        textImg: textImage2,
        subjTittle: 'Science'
    },
    {
        id: 'gk',
        textImg: textImage8,
        subjTittle: 'G.K.'
    },
    {
        id: 'social-science',
        textImg: textImage3,
        subjTittle: 'History'
    },
    {
        id: 'social-science',
        textImg: textImage6,
        subjTittle: 'Geography'
    },
    {
        id: 'english',
        textImg: textImage7,
        subjTittle: 'English'
    },
    {
        id: 'maths',
        textImg: textImage5,
        subjTittle: 'Aptitute'
    },
    {
        id: 'social-science',
        textImg: textImage4,
        subjTittle: 'Economics'
    }
];

const questionsList = [
    {
        id: 1,
        question: 'How many states and Union Territories does India have at present?'
    },
    {
        id: 2,
        question: 'Humidity is the content of in the air.'
    },
    {
        id: 3,
        question: 'What does a barometer measure?'
    },
    {
        id: 4,
        question: 'Life on Earth started from a single cell.'
    },
    {
        id: 5,
        question: 'There are five physics and ten maths books, then in how many ways one can select-'
    },
    {
        id: 6,
        question:
            '84 Maths books, 90 physics books and  120 Chemistry books have to be stacked topic-wise. How many books will be there is each stack so that stack will have the same height too?'
    },
    {
        id: 7,
        question: 'Write Two Differences Between English Core And English Elective.'
    },
    {
        id: 8,
        question: 'is natural science is called bylogical science'
    },
    {
        id: 9,
        question: 'Greedy meaning in hindi'
    },
    {
        id: 10,
        question: 'How is management a social science?'
    }
];

function Index() {
    const [ShowResult, setShowResult] = useState(false);
    const [FilteredQuestions, setFilteredQuestions] = useState([]);
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required('Required!')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(formik.values.search);
            // resetForm();
        }
    });
    const handleChange = (e) => {
        formik.handleChange(e);
        // Perform some custom logic
        if (e.target.value != '') {
            setShowResult(true);
            setFilteredQuestions(
                questionsList.filter((item) => {
                    return item.question.toLowerCase().includes(e.target.value.toLowerCase());
                })
            );
        } else {
            setShowResult(false);
            setFilteredQuestions([]);
        }
    };
    const resetForm = () => {
        formik.resetForm();
        setShowResult(false);
        setFilteredQuestions([]);
    };
    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${askquestion})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Ask a question</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <h2 className="title">Ask a question. Get a verified answer.</h2>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="ask_serch">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="serach_main">
                                <input
                                    type="text"
                                    name="search"
                                    className="form-control"
                                    style={{ color: 'var(--blackMain)', borderRadius: !ShowResult ? '100px' : '28px 28px 0 0' }}
                                    placeholder="Find solutions"
                                    onBlur={formik.handleBlur}
                                    onChange={handleChange}
                                    value={formik.values.search}
                                    helperText={formik.touched.search && formik.errors.search}
                                    error={Boolean(formik.touched.search && formik.errors.search)}
                                />
                                <div className="input-group-append search_btn">
                                    <button
                                        type="reset"
                                        className="btn mx-1"
                                        style={{ backgroundColor: 'var(--paper)', color: 'var(--grey600)' }}
                                        onClick={resetForm}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                    <button className="btn btn-secondary" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {ShowResult ? (
                            <div className="serach_main">
                                <div className="searchSuggestions_suggestionHolder__348Qs">
                                    {FilteredQuestions.length > 0 ? (
                                        FilteredQuestions.map((data, index) => {
                                            return (
                                                <Link to={`${data.id}/question`} key={index} className="w-100">
                                                    <div className="searchSuggestions_historyBox__Aah_s">
                                                        <div>{data.question}</div>
                                                        <div style={{ color: 'var(--grey600)' }}>
                                                            <i class="fas fa-external-link-square-alt"></i>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })
                                    ) : (
                                        <div className="searchSuggestions_historyBox__Aah_s">
                                            <div>Opps!! No result found</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : null}
                        <div className="course_list">
                            <div className="row">
                                {askQues.map((item, index) => (
                                    <div className="col-lg-3" key={index}>
                                        <Link to={`${item.id}/subject`} className="course_box">
                                            <div className="course_img">
                                                <img src={item.textImg} alt="subject" width="100px" height="124px" />
                                                <p>{item.subjTittle}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
