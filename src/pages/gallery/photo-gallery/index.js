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
// import galleyContainer from 'assets/images/page-banner.webp';
// const folderPath = '/assets/images/gallery';
// const imageUrls = getImagesFromFolder(folderPath);

const gallery = [
    { img: gallery1 },
    { img: gallery2 },
    { img: gallery3 },
    { img: gallery4 },
    { img: gallery5 },
    { img: gallery6 },
    { img: gallery7 },
    { img: gallery8 },
    { img: gallery9 }
];

// extra css
const style = {
    galleryCont: { padding: '30px 0' },
    galleryTittle: { paddingTop: '100px' },
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
                    <div className="text-start" style={style.galleryTittle}>
                        <h2 className="title">Photos Gallery</h2>
                        <span style={style.line} />
                    </div>
                </div>
            </section>

            {/* <!--====== Gallery Start ======--> */}

            <div class="gallery-page" style={style.galleryCont}>
                <div class="container">
                    <div class="tab-content event-tab-items wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div class="tab-pane fade show active" id="jee">
                            <div class="row">
                                {gallery.map((item, index) => (
                                    <div class="col-lg-4 col-sm-6" key={index}>
                                        <div class="single-gallery mt-30">
                                            <a class="image-popup" href="assets/images/gallery/gallery-01.webp">
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="tab-pane fade " id="neet">
                            <div class="row">
                                {gallery.map((item, index) => (
                                    <div class="col-lg-4 col-sm-6" key={index}>
                                        <div class="single-gallery mt-30">
                                            <a class="image-popup" href="assets/images/gallery/gallery-01.webp">
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="tab-pane fade " id="pat">
                            <div class="row">
                                {gallery.map((item, index) => (
                                    <div class="col-lg-4 col-sm-6" key={index}>
                                        <div class="single-gallery mt-30">
                                            <a class="image-popup" href="assets/images/gallery/gallery-01.webp">
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="tab-pane fade " id="cpat">
                            <div class="row">
                                {gallery.map((item, index) => (
                                    <div class="col-lg-4 col-sm-6" key={index}>
                                        <div class="single-gallery mt-30">
                                            <a class="image-popup" href="assets/images/gallery/gallery-01.webp">
                                                <img src={item.img} width="371" height="257" alt="gallery" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="tab-pane fade " id="bhu">
                            <div class="row">
                                {gallery.map((item, index) => (
                                    <div class="col-lg-4 col-sm-6" key={index}>
                                        <div class="single-gallery mt-30">
                                            <a class="image-popup" href="assets/images/gallery/gallery-01.webp">
                                                <img src={item.img} width="371" height="257" alt="gallery" />
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
