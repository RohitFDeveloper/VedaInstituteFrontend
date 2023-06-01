import React from 'react';
import gallery1 from 'assets/images/gallery/gallery-01.webp';
import gallery2 from 'assets/images/gallery/gallery-02.webp';
import gallery3 from 'assets/images/gallery/gallery-03.webp';
import gallery4 from 'assets/images/gallery/gallery-04.webp';
import gallery5 from 'assets/images/gallery/gallery-05.webp';
import gallery6 from 'assets/images/gallery/gallery-06.webp';
import gallery7 from 'assets/images/gallery/gallery-07.webp';
import gallery8 from 'assets/images/gallery/gallery-08.webp';
import gallery9 from 'assets/images/gallery/gallery-09.webp';
import galleyContainer from 'assets/images/page-banner.webp';
// const folderPath = '/assets/images/gallery';
// const imageUrls = getImagesFromFolder(folderPath);

const gallery = [
    { img: gallery1, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery2, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery3, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery4, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery5, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery6, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery7, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery8, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' },
    { img: gallery9, videoUrl: 'https://youtu.be/WLrhfuIbW0Y' }
];

// extra css
const style = {
    galleryCont: { padding: '30px 0' },
    playBtn: { justifyContent: 'center', textAlign: 'center', display: 'flex', marginTop: '15px', fontSize: '20px', alignItem: 'center' },
    videoTittle: { paddingTop: '80px' },
    line: {
        width: '150px',
        background: '0 0',
        border: '1px solid var(--primaryMain)',
        marginTop: '25px'
    }
};

const Index = () => {
    return (
        <>
            <section className="">
                <div className="container">
                    <div className="text-start" style={style.videoTittle}>
                        <h2 className="section-title">Video Gallery</h2>
                        <span className="line" style={style.line}></span>
                    </div>
                </div>
            </section>

            {/* <!--====== Gallery Start ======--> */}

            <div className="gallery-page" style={style.galleryCont}>
                <div className="container">
                    <div className="tab-content event-tab-items wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="tab-pane fade show active" id="jee">
                            <div className="row">
                                {gallery.map((item, index) => (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <div className="single-gallery mt-30">
                                            <a className="play video-popup" href={item.videoUrl}>
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                                <div style={style.playBtn}>
                                                    <i className="fas fa-play"></i>
                                                    <span style={{ paddingLeft: '15px' }}>Play now</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade " id="neet">
                            <div className="row">
                                {gallery.map((item, index) => (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <div className="single-gallery mt-30">
                                            <a className="play video-popup" href={item.videoUrl}>
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                                <div style={style.playBtn}>
                                                    <i className="fas fa-play"></i>
                                                    <span style={{ paddingLeft: '15px' }}>Play now</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade " id="pat">
                            <div className="row">
                                {gallery.map((item, index) => (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <div className="single-gallery mt-30">
                                            <a className="play video-popup" href={item.videoUrl}>
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                                <div style={style.playBtn}>
                                                    <i className="fas fa-play"></i>
                                                    <span style={{ paddingLeft: '15px' }}>Play now</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade " id="cpat">
                            <div className="row">
                                {gallery.map((item, index) => (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <div className="single-gallery mt-30">
                                            <a className="play video-popup" href={item.videoUrl}>
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                                <div style={style.playBtn}>
                                                    <i className="fas fa-play"></i>
                                                    <span style={{ paddingLeft: '15px' }}>Play now</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade " id="bhu">
                            <div className="row">
                                {gallery.map((item, index) => (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <div className="single-gallery mt-30">
                                            <a className="play video-popup" href={item.videoUrl}>
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                                <div style={style.playBtn}>
                                                    <i className="fas fa-play"></i>
                                                    <span style={{ paddingLeft: '15px' }}>Play now</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
