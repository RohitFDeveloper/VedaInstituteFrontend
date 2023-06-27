import React from 'react';
import countImg from 'assets/images/counter-bg.webp';

const Ourfact = () => {
    return (
        <>
            <section className="counter-area my-4 py-4">
                <div className="container">
                    <div className="counter-wrapper bg_cover" style={{ backgroundImage: `url(${countImg})` }}>
                        <div className="row">
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <span className="counter-count">
                                        <span className="count" data-count="3652">
                                            1000
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <span className="counter-count">
                                        <span className="count" data-count="105">
                                            99
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Faculties</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <span className="counter-count">
                                        <span className="count" data-count="120">
                                            24
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Branches</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6 counter-col">
                                <div className="single-counter mt-30 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.8s">
                                    <span className="counter-count">
                                        <span className="count" data-count="30">
                                            50
                                        </span>{' '}
                                        +
                                    </span>
                                    <p>Awards win</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ourfact;
