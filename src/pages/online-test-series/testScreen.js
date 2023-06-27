/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState } from 'react';
import parse from 'html-react-parser';
import { MathComponent } from 'mathjax-react';

// react bootstrap
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap';

// project imports
import Logo from 'common/logo/index';
import User from 'assets/images/icon/user.png';
import questionsList from './questionsList.json';

const style = {
    topHeader: {
        color: '#fff',
        col: {
            backgroundColor: 'var(--primaryMain)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#fff',
            padding: '5px 10px'
        }
    },
    subHeader: {
        area: {
            backgroundColor: 'var(--grey300)',
            height: '88px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 30px'
        },
        button: {
            color: 'var(--paper)',
            padding: '5px 10px',
            borderRadius: '0',
            margin: '5px 10px',
            border: 'none'
        },
        active: {
            backgroundColor: 'var(--secondaryMain)'
        },
        normal: {
            backgroundColor: 'var(--primaryMain)'
        }
    },
    qHeader: {
        main: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        subMain: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px'
        }
    },
    studentInfo: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    controleBtns: {
        borderStyle: 'solid',
        borderWidth: '1px',
        cursor: 'pointer',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        backgroundColor: '#ff4081',
        borderColor: '#ff4081',
        color: '#fff',
        padding: '0 0.9375rem',
        lineHeight: '2.1875rem',
        outline: 'none'
    },
    legendRowMain: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '10px 0'
    },
    legendRow: {
        display: 'flex',
        gap: '10px',
        margin: '5px 0'
    },
    legendBox: {
        padding: '10px',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        color: '#fff',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    legendTitle: {
        fontWeight: '500',
        color: 'var(--primaryMain)'
    },
    questionNo: {
        padding: '4px',
        textAlign: 'center',
        borderRadius: '8px',
        /* border: solid 1px #008000; */
        width: '40px',
        height: '27px',
        boxShadow: '1px 1px 3px 0px rgb(22 94 9 / 70%)',
        cursor: 'pointer'
    },
    mathPreview: {
        content: {
            fontSize: '16px'
        }
    }
};

const tabsData = [
    {
        id: 'section1',
        title: 'General Intelligence and Reasoning',
        questions: [
            {
                _id: '6432ea53980aeeef167e2b19',
                question:
                    '<p><span style="color: rgb(0,0,0);"><strong>Indentify Subject :</strong></span></p>\n<p><span style="color: rgb(0,0,0);">This is a duster.</span></p>\n',
                options: [
                    {
                        optionId: 1,
                        value: 'This',
                        selected: false,
                        optionType: 'normal',
                        _id: '6433a102980aeeef167e2d32'
                    },
                    {
                        optionId: 2,
                        value: 'is',
                        selected: false,
                        optionType: 'normal',
                        _id: '6433a102980aeeef167e2d33'
                    },
                    {
                        optionId: 3,
                        value: 'a',
                        selected: false,
                        optionType: 'normal',
                        _id: '6433a102980aeeef167e2d34'
                    },
                    {
                        optionId: 4,
                        value: 'duster',
                        selected: false,
                        optionType: 'normal',
                        _id: '6433a102980aeeef167e2d35'
                    }
                ],
                answer: 1,
                classId: '6319bc6d3f517db4ffcbe9ac',
                subjectId: '630cb6b20852d3d3220d2fc4',
                chapterId: '6432e914980aeeef167e2b0a',
                topicId: '6432e92d980aeeef167e2b12',
                createdAt: '2023-04-09T16:39:47.107Z',
                updatedAt: '2023-04-10T05:39:14.720Z',
                __v: 0
            },
            {
                _id: '6432eb13980aeeef167e2b20',
                question:
                    '<p style="text-align:start;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, sans-serif;"><strong>Convert the below sentence into introgative sentence</strong></span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, sans-serif;">Indore is a beautiful place.</span></p>\n',
                options: [
                    {
                        optionId: 1,
                        value: 'Indore is not a beautiful city.',
                        selected: false,
                        optionType: 'normal',
                        _id: '6432eb13980aeeef167e2b21'
                    },
                    {
                        optionId: 2,
                        value: 'Is Indore a beautiful city?',
                        selected: false,
                        optionType: 'normal',
                        _id: '6432eb13980aeeef167e2b22'
                    },
                    {
                        optionId: 3,
                        value: 'Is the beautiful city Indore?',
                        selected: false,
                        optionType: 'normal',
                        _id: '6432eb13980aeeef167e2b23'
                    }
                ],
                answer: 2,
                classId: '6319bc6d3f517db4ffcbe9ac',
                subjectId: '630cb6b20852d3d3220d2fc4',
                chapterId: '6432e914980aeeef167e2b0a',
                topicId: '6432e92d980aeeef167e2b12',
                createdAt: '2023-04-09T16:42:59.616Z',
                updatedAt: '2023-04-09T16:42:59.616Z',
                __v: 0
            },
            {
                _id: '6432ec3f980aeeef167e2b26',
                question:
                    '<p style="text-align:start;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, sans-serif;"><strong>Translate the below sentence into English:</strong></span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, sans-serif;"><strong>मेरा नाम अंकित वर्मा हैं ।</strong></span>&nbsp;</p>\n',
                options: [
                    {
                        optionId: 1,
                        value: 'My name is Ankit.',
                        selected: false,
                        optionType: 'normal',
                        _id: '6432ec3f980aeeef167e2b27'
                    },
                    {
                        optionId: 2,
                        value: 'My name is Ankit Verma.',
                        selected: false,
                        optionType: 'normal',
                        _id: '6432ec3f980aeeef167e2b28'
                    }
                ],
                answer: 2,
                classId: '6319bc6d3f517db4ffcbe9ac',
                subjectId: '630cb6b20852d3d3220d2fc4',
                chapterId: '6432e914980aeeef167e2b0a',
                topicId: '6432e92d980aeeef167e2b12',
                createdAt: '2023-04-09T16:47:59.656Z',
                updatedAt: '2023-04-09T16:47:59.656Z',
                __v: 0
            }
        ]
    }
];

const testScreen = () => {
    const [selectOption, setSelectoption] = useState('');
    const [tabKey, setTabKey] = useState(0);
    const [tabs, setTabs] = useState(tabsData);
    const [question, setQuestion] = useState(tabsData);
    const [value, setValue] = useState('');
    const [sidebar, setSidebar] = useState(true);
    const [showSections, setSection] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const showSection = (sectionIndex) => {
        setSection(sectionIndex);
        setQuestionNumber(0);
    };
    const handleOption = (event, questionDetails) => {
        // console.log(questionDetails);
        setValue(event.target.value);
        // console.log(event.target.value);
        let newQuestions = question;
        // console.log(newQuestions[showSections].questions[questionNumber]);
        for (let i = 0; i < questionDetails.options.length; i++) {
            if (questionDetails.options[i].optionId == event.target.value) {
                questionDetails.options[i].selected = true;
            } else {
                questionDetails.options[i].selected = false;
            }
        }
        newQuestions[showSections].questions[questionNumber] = questionDetails;
        setQuestion(newQuestions);
        // console.log(questionDetails);
    };
    const handleClearResponse = (questionDetails) => {
        debugger;
        let newQuestions = question;
        for (let i = 0; i < questionDetails.options.length; i++) {
            questionDetails.options[i].selected = false;
        }
        newQuestions[showSections].questions[questionNumber] = questionDetails;
        setQuestion(newQuestions);
    };
    const handleAnswer = (questionID, ans, question2) => {
        console.log('ans');
        console.log(ans);
        if (showSections == question.length - 1 && questionNumber == question[showSections].questions.length - 1) {
            alert('can not go next question');
        } else {
            if (questionNumber == question[showSections].questions.length - 1) {
                setSection(showSections + 1);
                setQuestionNumber(0);
            } else {
                setQuestionNumber(questionNumber + 1);
            }
        }
    };
    const handleDrawerClose = () => {
        setSidebar(false);
    };
    return (
        <>
            <div className="container-fluid text-center" style={{ position: 'relative' }}>
                <div className="row">
                    <div className="col" style={style.topHeader.col}>
                        <div style={{ backgroundColor: '#fff' }}>
                            <Logo width="150" height="60" />
                        </div>
                        <h5 style={style.topHeader}>Question Paper Title</h5>
                        <h5 style={style.topHeader}>Timmer</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9" style={style.subHeader.area}>
                        <div>
                            {tabs.map((section, index) => {
                                return (
                                    <button
                                        type="button"
                                        // className={showSections == index ? 'coursesTabActive' : 'coursesTabNormal'}
                                        style={
                                            showSections == index
                                                ? { ...style.subHeader.button, ...style.subHeader.active }
                                                : { ...style.subHeader.button, ...style.subHeader.normal }
                                        }
                                        key={index}
                                        onClick={() => showSection(index)}
                                    >
                                        {section.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-lg-3 px-0">
                        <div className="card p-2" style={{ borderRadius: '0' }}>
                            <div className="card-body p-0">
                                <div style={style.studentInfo}>
                                    <div className="mx-2">
                                        <img src={User} alt="Student" style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
                                    </div>
                                    <h5 style={{ marginLeft: '10px' }}>Student Name</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row p-2" style={{ backgroundColor: '#fff' }}>
                            <div
                                className="card p-2"
                                style={{ borderRadius: '0', height: '500px', minHeight: '500px', maxHeight: '500px' }}
                            >
                                <div className="card-body p-2">
                                    <div style={style.qHeader.main}>
                                        <h5>Question No. {questionNumber + 1}</h5>
                                        <div style={style.qHeader.subMain}>
                                            <OverlayTrigger overlay={<Tooltip id="correctMarks">Correct Answer Marks</Tooltip>}>
                                                <h6 style={{ color: 'var(--secondaryLight)' }}>+2</h6>
                                            </OverlayTrigger>
                                            <div>|</div>
                                            <OverlayTrigger overlay={<Tooltip id="incorrectMarks">Incorrect Answer Marks</Tooltip>}>
                                                <h6 style={{ color: 'var(--errorMain)' }}>-0.5</h6>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* {question[showSections].questions[questionNumber].question} */}
                                    <div className="mb-4" style={{ maxHeight: '200px', overflowY: 'auto', textAlign: 'left' }}>
                                        {question[showSections].questions[questionNumber].options[0].optionType != 'mathematical' ? (
                                            // parse(tabs[showSections].questions[questionNumber].question)
                                            parse(question[showSections].questions[questionNumber].question)
                                        ) : (
                                            <div sx={style.mathPreview.content}>
                                                <MathComponent
                                                    tex={question[showSections].questions[questionNumber].question.replace(/<[^>]+>/g, '')}
                                                    display={false}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="row">
                                        <Form>
                                            <div className="mb-3">
                                                {question[showSections].questions[questionNumber].options.map((option, index) => {
                                                    return (
                                                        <Form.Check
                                                            className="my-2"
                                                            style={{ textAlign: 'left' }}
                                                            key={index}
                                                            label={
                                                                option.optionType == 'mathematical' ? (
                                                                    <div sx={style.mathPreview.content}>
                                                                        <MathComponent tex={option.value} display={false} />
                                                                    </div>
                                                                ) : (
                                                                    option.value
                                                                )
                                                            }
                                                            name="optionRadio"
                                                            type="radio"
                                                            id={`radio-${index}`}
                                                            checked={option.selected}
                                                            value={option.optionId}
                                                            onChange={() =>
                                                                handleOption(event, question[showSections].questions[questionNumber])
                                                            }
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {sidebar == true ? (
                        <div className="col-lg-3">
                            <div className="row py-2">
                                <div
                                    className="card p-2"
                                    style={{ borderRadius: '0', height: '220px', minHeight: '220px', maxHeight: '220px' }}
                                >
                                    <div className="card-body p-2">
                                        <div style={style.legendRow}>
                                            <div style={{ ...style.legendRowMain, margin: '0' }}>
                                                <div style={{ ...style.legendBox, backgroundColor: 'var(--secondaryLight)' }}>100</div>
                                                <div style={style.legendTitle}>Answered</div>
                                            </div>
                                            <div style={{ ...style.legendRowMain, margin: '0' }}>
                                                <div style={{ ...style.legendBox, backgroundColor: 'var(--grey300)' }}>100</div>
                                                <div style={style.legendTitle}>Not Visited</div>
                                            </div>
                                        </div>
                                        <div style={style.legendRowMain}>
                                            <div style={{ ...style.legendBox, backgroundColor: '#ff4081' }}>100</div>
                                            <div style={style.legendTitle}>Not Answered</div>
                                        </div>
                                        <div style={style.legendRowMain}>
                                            <div style={{ ...style.legendBox, backgroundColor: 'var(--primaryMain)' }}>100</div>
                                            <div style={style.legendTitle}>Marked For Review</div>
                                        </div>
                                        <div style={style.legendRowMain}>
                                            <div style={{ ...style.legendBox, backgroundColor: 'var(--secondaryMain)' }}>100</div>
                                            <div style={style.legendTitle}>Answered and Marked for Review</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row py-2" style={{ height: '44px', textAlign: 'left', alignItems: 'center', fontSize: '24px' }}>
                                <div>
                                    <button onClick={() => setSidebar(false)}>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="row py-2">
                                <div
                                    className="card p-2"
                                    style={{
                                        borderRadius: '0',
                                        overflowY: 'auto',
                                        height: '220px',
                                        minHeight: '220px',
                                        maxHeight: '220px'
                                    }}
                                >
                                    <div className="card-title" style={{ textAlign: 'left', fontWeight: '500' }}>
                                        Choose a Question
                                    </div>
                                    <div className="card-body p-0">
                                        <div
                                            style={{
                                                width: '275px',
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(6, 1fr)',
                                                gap: '8px'
                                            }}
                                        >
                                            {tabs[showSections].questions.map((Question, index) => (
                                                <div
                                                    key={index}
                                                    style={{ ...style.legendBox, backgroundColor: 'var(--secondaryLight)' }}
                                                    onClick={() => setQuestionNumber(index)}
                                                >
                                                    {index + 1}
                                                </div>
                                                // <div
                                                //     sx={style.questionNo}
                                                //     style={
                                                //         Question.answerStatus == 'Not Answered'
                                                //             ? { backgroundColor: color.paper }
                                                //             : Question.answerStatus == 'Answered'
                                                //             ? { backgroundColor: color.successDark }
                                                //             : Question.answerStatus == 'Review'
                                                //             ? { backgroundColor: color.warningDark }
                                                //             : Question.answerStatus == 'Current'
                                                //             ? { backgroundColor: color.darkPrimaryMain }
                                                //             : null
                                                //     }
                                                //     key={index}
                                                //     onClick={() => setQuestionNumber(index)}
                                                //     onClick={() => handleQuestionPlateAnswer(question[lastSelectedQuesIndex], index)}
                                                // >
                                                //     {index + 1}
                                                // </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-1">
                            <div className="row py-2" style={{ height: '44px', textAlign: 'left', alignItems: 'center', fontSize: '24px' }}>
                                <div>
                                    <button onClick={() => setSidebar(true)}>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="row py-2" style={{ border: '1px solid #0000002d' }}>
                    <div className="col-lg-9 my-1" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <button
                            type="button"
                            style={style.controleBtns}
                            onClick={() => handleClearResponse(question[showSections].questions[questionNumber])}
                        >
                            Clear Response
                        </button>
                        <button type="button" style={style.controleBtns}>
                            Mark for review and next
                        </button>
                        <button
                            type="button"
                            style={style.controleBtns}
                            onClick={() =>
                                handleAnswer(
                                    question[showSections].questions[questionNumber]._id,
                                    value,
                                    question[showSections].questions[questionNumber]
                                )
                            }
                        >
                            {showSections == tabs.length - 1 && questionNumber == tabs[showSections].questions.length - 1
                                ? 'Save'
                                : 'Save and Next'}
                        </button>
                    </div>
                    <div className="col-lg-3 my-1">
                        <div className="d-grid">
                            <button type="button" style={style.controleBtns}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default testScreen;
