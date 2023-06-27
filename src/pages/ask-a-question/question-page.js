/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// bootstrap
import { Button, Collapse } from 'react-bootstrap';

// images
import askquestion from 'assets/images/page-banner.webp';

const questionsList = [
    {
        id: 1,
        question: 'How many states and Union Territories does India have at present?',
        type: 'social-science',
        options: [
            {
                id: 'a',
                value: '28 states 7 Union Territories'
            },
            {
                id: 'b',
                value: '27 states 9 Union Territories'
            },
            {
                id: 'c',
                value: '28 states 8 Union Territories'
            },
            {
                id: 'd',
                value: '27 states 8 Union Territories'
            }
        ],
        answer: 'c',
        reson: 'The correct option is C 28 states 8 Union Territories 28 states 8 Union Territories'
    },
    {
        id: 2,
        question: 'Humidity is the content of in the air.',
        type: 'science',
        options: [
            {
                id: 'a',
                value: 'oxygen'
            },
            {
                id: 'b',
                value: 'carbon dioxide'
            },
            {
                id: 'c',
                value: 'water vapour'
            },
            {
                id: 'd',
                value: 'nitrogen'
            }
        ],
        answer: 'c',
        reson: 'The correct option is C water vapour Humidity represents the amount of water vapour present in the air. Higher humidity refers to high water vapour content in the air, and vice-versa. For example, when it is just about to rain, there is a lot of water vapour in the air. And we say, the humidity level is high.'
    },
    {
        id: 3,
        question: 'What does a barometer measure?',
        type: 'science',
        options: [
            {
                id: 'a',
                value: 'liquid pressure'
            },
            {
                id: 'b',
                value: 'atmospheric pressure'
            },
            {
                id: 'c',
                value: 'earthquake'
            },
            {
                id: 'd',
                value: 'none'
            }
        ],
        answer: 'b',
        reson: 'Barometer is a device used to measure atmospheric pressure. As it varies with distance either above or below sea level'
    },
    {
        id: 4,
        question: 'Life on Earth started from a single cell.',
        type: 'science',
        options: [
            {
                id: 'a',
                value: 'true'
            },
            {
                id: 'b',
                value: 'false'
            }
        ],
        answer: 'a',
        reson: 'There are various theories explaining the origin of life on Earth. However, most of the theories agree with the fact that life on Earth started from a single cell.'
    },
    {
        id: 5,
        question: 'There are five physics and ten maths books, then in how many ways one can select-',
        type: 'maths',
        options: [
            {
                id: 'a',
                value: '(5 + 10)'
            },
            {
                id: 'b',
                value: '5(5 x 10)'
            },
            {
                id: 'c',
                value: '(5 x 10)'
            },
            {
                id: 'd',
                value: '5(5 + 10)'
            }
        ],
        answer: 'c',
        reson: 'The correct option is C (5×10) When we have to select both, a physics book and a maths book, then total no. of ways it can be selected would follow multiplication rule and hence, Total no. of ways = 5 × 10 When we have to select either a maths book or a physics book, then the no. of ways of selecting any one of the two books would follow addition rule and hence, Total no. of ways = 5 + 10'
    },
    {
        id: 6,
        question:
            '84 Maths books, 90 physics books and  120 Chemistry books have to be stacked topic-wise. How many books will be there is each stack so that stack will have the same height too?',
        type: 'maths',
        options: [
            {
                id: 'a',
                value: '6'
            },
            {
                id: 'b',
                value: '21'
            },
            {
                id: 'c',
                value: '12'
            },
            {
                id: 'd',
                value: '18'
            }
        ],
        answer: 'c',
        reson: 'The correct option is B 6 Required books in each stack =HCF of each type of book = HCF of 84, 90 and  120 = 6'
    },
    {
        id: 7,
        question: 'Choose Differences Between English Core And English Elective.',
        type: 'english',
        options: [
            {
                id: 'a',
                value: 'in US ph is f, Ex - Sulphur, Sulfur'
            },
            {
                id: 'b',
                value: 'in UK ph is f, Ex - Sulphur, Sulfur'
            }
        ],
        answer: 'a',
        reson: 'The difference between US English and UK English is mostly in terms of spellings. For instance, the ph in UK English is written as f in US English, sulphur, sulfur. In pronunciation, the US English does away with silent consonants, so often would be pronounced as of-en in UK but as of-ten in US.'
    },
    {
        id: 8,
        question: 'is natural science is called bylogical science',
        type: 'science',
        options: [
            {
                id: 'a',
                value: 'Yes'
            },
            {
                id: 'b',
                value: 'No'
            }
        ],
        answer: 'b',
        reson: 'No, there are five branches of natural science: Physics, chemistry, Biology the Earth sciences and Astronomy.'
    },
    {
        id: 9,
        question: 'Greedy meaning in hindi',
        type: 'english',
        options: [
            {
                id: 'a',
                value: 'दयालु'
            },
            {
                id: 'b',
                value: 'लालची'
            }
        ],
        answer: 'b',
        reson: 'Dear student, the meaning of greedy in hindi is लालची.'
    },
    {
        id: 10,
        question: 'How is management a social science?',
        type: 'social-science',
        options: [
            {
                id: 'a',
                value: 'true'
            },
            {
                id: 'b',
                value: 'false'
            }
        ],
        answer: 'a',
        reson: 'Management is considered as a social science as: 1. Management has a systematic body of knowledge as in science. 2. Management principles are based on repeated experiments as in science. 3. Scientific principles are derived on the basis of logical and scientific observation which is not present in management. 4. Scientific principles have universal validity and application whereas management principles have personalized application. So, two of the features of science is present in management and two of them are not present in management. Therefore, management is considered as an inexact science or social science.'
    }
];

function QuestionPage() {
    const [ShowResult, setShowResult] = useState(false);
    const [FilteredQuestions, setFilteredQuestions] = useState(questionsList);
    const [TempFilteredQuestions, setTempFilteredQuestions] = useState(FilteredQuestions);
    const [AtIndex, setatIndex] = useState(null);
    const location = useLocation();
    const path = location.pathname;
    const regex = /\/([^/]+)\/[^/]+$/;
    const regex2 = /\/([^/]+)$/;
    const matches = path.match(regex);
    const matches2 = path.match(regex2);

    useEffect(() => {
        setFilteredQuestions(
            matches2[1] == 'subject'
                ? FilteredQuestions.filter((item) => {
                      return item.type == matches[1];
                  })
                : matches2[1] == 'question'
                ? FilteredQuestions.filter((item) => {
                      return item.id == matches[1];
                  })
                : []
        );
        setTempFilteredQuestions(
            matches2[1] == 'subject'
                ? FilteredQuestions.filter((item) => {
                      return item.type == matches[1];
                  })
                : matches2[1] == 'question'
                ? FilteredQuestions.filter((item) => {
                      return item.id == matches[1];
                  })
                : []
        );
    }, []);

    const handleToggle = (index) => {
        setatIndex(index);
    };

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
            setTempFilteredQuestions(
                TempFilteredQuestions.filter((item) => {
                    return item.question.toLowerCase().includes(e.target.value.toLowerCase());
                })
            );
        } else {
            setShowResult(false);
            setTempFilteredQuestions(FilteredQuestions);
        }
    };
    const resetForm = () => {
        formik.resetForm();
        setShowResult(false);
        setTempFilteredQuestions(FilteredQuestions);
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
                        {matches2[1] == 'subject' ? (
                            <>
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
                                {/* {ShowResult ? (
                                    <div className="serach_main">
                                        <div className="searchSuggestions_suggestionHolder__348Qs">
                                            {FilteredQuestions.length > 0 ? (
                                                FilteredQuestions.map((data, index) => {
                                                    return (
                                                        <Link to={`${data.id}/question`} key={index} className="w-100">
                                                            <div className="searchSuggestions_historyBox__Aah_s">
                                                                <div>{data.question}</div>
                                                                <div style={{ color: 'var(--grey600)' }}>
                                                                    <i className="fas fa-external-link-square-alt"></i>
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
                                ) : null} */}
                            </>
                        ) : null}
                        <div className="question_detail">
                            {TempFilteredQuestions.length > 0 ? (
                                TempFilteredQuestions.map((data, index) => {
                                    return (
                                        <div className="question_main_list">
                                            <h5>Question</h5>
                                            <p className="question_list">{data.question}</p>
                                            <div className="question_option">
                                                <ul>
                                                    {data.options.map((option, index) => {
                                                        return (
                                                            <li key={index} className={data.answer == option.id ? 'active' : null}>
                                                                <span>{option.id}</span> {option.value}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="question_ans">
                                                <div className="card">
                                                    <div id="headingTwo">
                                                        <a type="button" className="detail_show" onClick={() => handleToggle(index)}>
                                                            View Solution
                                                        </a>
                                                    </div>
                                                    <Collapse in={AtIndex == index ? true : false}>
                                                        <div className="card-body all_ans">
                                                            <span className="answer">Solution</span>
                                                            <p>{data.reson}</p>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="searchSuggestions_historyBox__Aah_s justify-content-center">
                                    <div>Opps!! No result found</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default QuestionPage;
