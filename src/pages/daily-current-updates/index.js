// import './styles.scss';
// import data from './fruits.json';
import Tag from './Tag';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import currentUpdateBg from 'assets/images/page-banner.webp';

const years = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
const months = ['January', 'febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const updateDates = [
    '08-june-2023',
    '07-june-2023',
    '06-june-2023',
    '05-june-2023',
    '04-june-2023',
    '03-june-2023',
    '02-june-2023',
    '01-june-2023'
];
export default function Index() {
    let scrl = useRef(null);
    let scrl2 = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    const [scrollX1, setscrollX1] = useState(0);
    const [scrolEnd1, setscrolEnd1] = useState(false);
    // const [temKey, settemKey] = useState(0);
    // const [temKey2, settemKey2] = useState(0);
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        // Perform additional actions based on the clicked button
    };

    //Slide click 1
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };
    //Slide click 2
    const slide1 = (shift) => {
        scrl2.current.scrollLeft += shift;
        setscrollX1(scrollX1 + shift);

        if (Math.floor(scrl2.current.scrollWidth - scrl2.current.scrollLeft) <= scrl2.current.offsetWidth) {
            setscrolEnd1(true);
        } else {
            setscrolEnd1(false);
        }
    };

    const scrollCheck1 = () => {
        setscrollX1(scrl2.current.scrollLeft);
        if (Math.floor(scrl2.current.scrollWidth - scrl2.current.scrollLeft) <= scrl2.current.offsetWidth) {
            setscrolEnd1(true);
        } else {
            setscrolEnd1(false);
        }
    };

    return (
        <>
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${currentUpdateBg})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Daily Current Updates</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="current_affairs_page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-4">Daily Current Affairs</h2>
                        </div>
                    </div>
                    <div className="current_affairs_wr">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="sub_heading">current affairs</h3>
                            </div>
                        </div>
                        <div className="month_year_wr">
                            {/* <div className="row year_wr"> */}
                            <div className="App year_wr">
                                {scrollX !== 0 && (
                                    <button className="prev" onClick={() => slide(-100)}>
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                )}
                                <ul ref={scrl} onScroll={scrollCheck} className="ulhs">
                                    {years.map((d, index) => (
                                        <Tag
                                            key={index}
                                            data={d}
                                            // onClick={() => settemKey(i)}
                                            className={`${activeButton === index ? 'cfActiveTab' : ''}`}
                                            onClick={() => handleButtonClick(indexi)}
                                        />
                                    ))}
                                </ul>
                                {!scrolEnd && (
                                    <button className="next" onClick={() => slide(+100)}>
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                )}
                            </div>
                            <div className="App month_wr">
                                {scrollX1 !== 0 && (
                                    <button className="prev" onClick={() => slide1(-100)}>
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                )}
                                <ul ref={scrl2} onScroll={scrollCheck1} className="ulhs">
                                    {months.map((d, i) => (
                                        <Tag key={i} data={d} />
                                    ))}
                                </ul>
                                {!scrolEnd1 && (
                                    <button className="next" onClick={() => slide1(+100)}>
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="row date_wr">
                            {updateDates.map((index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                    <div className="box_wr">
                                        <Link to={index}>
                                            <span>{index}</span>
                                        </Link>
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
