import React from 'react';
// Start Gallery -> subpages
import GalleryPhoto from 'pages/gallery/photo-gallery/index';
import GalleryVideo from 'pages/gallery/video-gallery/index';
import galleyContainer from 'assets/images/page-banner.webp';

const Index = () => {
    return (
        <>
            <section className="page-banner" style={{ paddingTop: '0px' }}>
                <div className="page-banner-bg bg_cover" style={{ backgroundImage: `url(${galleyContainer})` }}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title">Gallery</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery-container" style={{ paddingBottom: '55px' }}>
                <div className="container">
                    <div className="row" style={{ paddingTop: '55px' }}>
                        <div
                            className="col-md-6 py-4 mr-2"
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', backgroundColor: '#f1f1f1' }}
                        >
                            <GalleryPhoto />
                        </div>
                        <div className="col-md-6 py-4 ml-2">
                            <GalleryVideo />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
