import React from 'react';
// Start Gallery -> subpages
import GalleryPhoto from 'pages/gallery/photo-gallery/index';
import GalleryVideo from 'pages/gallery/video-gallery/index';
import galleyContainer from 'assets/images/page-banner.webp';

const Index = () => {
    return (
        <>
            <section class="page-banner" style={{ paddingTop: '0px' }}>
                <div class="page-banner-bg bg_cover" style={{ backgroundImage: `url(${galleyContainer})` }}>
                    <div class="container">
                        <div class="banner-content text-center">
                            <h2 class="title">Gallery</h2>
                        </div>
                    </div>
                </div>
            </section>
            <GalleryPhoto />
            <GalleryVideo />
        </>
    );
};

export default Index;
