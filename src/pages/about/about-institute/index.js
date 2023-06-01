import React from 'react';
import aboutBg1 from 'assets/images/page-banner.webp';
import aboutCampus from 'assets/images/campus-1.webp';
import aboutTech1 from 'assets/images/teachers/teacher-1.webp';
const Index = () => {
    return (
        <>
            {/* <!--====== Page Banner Start ======--> */}

            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${aboutBg1})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h3 className="title">About Institute</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Page Banner Ends ======--> */}

            {/* <!--====== Message page Start ======--> */}

            <section className="mesage-banner">
                <div className="container">
                    <div className="message-content text-center " style={{ padding: '60px 0 0 ' }}>
                        <h1 className="">Message</h1>
                        <br />
                        <h5 className="text-justify lh-base">
                            <i className="fas fa-quote-right " style={{ transform: 'rotate(180deg)', padding: '5px 0 0 10px' }}></i>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rem porro consequuntur sint incidunt
                            blanditiis quasi tenetur qui, ad inventore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
                            rem porro consequuntur sint incidunt blanditiis quasi tenetur qui, ad inventore.
                            <i className="fas fa-quote-right" style={{ padding: '5px 0 0 10px' }}></i>
                        </h5>
                    </div>
                </div>
            </section>
            {/* <!--====== Message page Ends ======--> */}

            {/* <!--====== Campus Visit Start ======--> */}

            <section class="campus-visit-area-3" style={{ padding: '110px 0px ' }}>
                <div class="container">
                    <div class="campus-visit-wrapper">
                        <div class="campus-content-col">
                            <div class="campus-content">
                                <h2 class="campus-title">Visit our Campus with image gallery</h2>
                                <span class="line"></span>
                                <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
                                <h3 class="video-title">or watch video</h3>
                                <a class="play video-popup" href="https://www.youtube.com/watch?v=0qHWub21h5c">
                                    <i class="fas fa-play"></i> <span>Play now</span>
                                </a>
                            </div>
                        </div>
                        <div class="campus-image-col">
                            <div class="campus-image">
                                <div class="single-campus">
                                    <img src={aboutCampus} width="585" height="392" alt="Campus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--====== Campus Visit Ends ======--> */}
        </>
    );
};

export default Index;
