import React from 'react';

import Icon1 from 'assets/images/icon/icon-1.webp';
import Icon2 from 'assets/images/icon/icon-2.webp';
import Icon3 from 'assets/images/icon/icon-3.webp';

function OurExperties() {
    return (
        <>
            <div class="specialty-area">
                <div class="container">
                    <div class="row no-gutters wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="col-sm-4">
                            <div class="single-specialty active mt-30">
                                <div class="specialty-box">
                                    <div class="box-icon">
                                        <img src={Icon1} width="70" height="70" alt="icon" />
                                    </div>
                                    <div class="box-content">
                                        <p>
                                            UPSC <br /> Let's learn
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="single-specialty active mt-30">
                                <div class="specialty-box">
                                    <div class="box-icon">
                                        <img src={Icon2} width="70" height="70" alt="icon" />
                                    </div>
                                    <div class="box-content">
                                        <p>
                                            JEE <br /> Let's learn
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="single-specialty active mt-30">
                                <div class="specialty-box">
                                    <div class="box-icon">
                                        <img src={Icon3} width="70" height="70" alt="icon" />
                                    </div>
                                    <div class="box-content">
                                        <p>
                                            NEET <br /> Let's learn
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurExperties;
