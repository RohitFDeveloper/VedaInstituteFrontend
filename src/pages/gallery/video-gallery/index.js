/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
// bootstrap
import { Button, Modal, Container } from 'react-bootstrap';

import gallery1 from 'assets/images/gallery/gallery-01.webp';
import gallery2 from 'assets/images/gallery/gallery-02.webp';
import gallery3 from 'assets/images/gallery/gallery-03.webp';
import gallery4 from 'assets/images/gallery/gallery-04.webp';
import gallery5 from 'assets/images/gallery/gallery-05.webp';
import gallery6 from 'assets/images/gallery/gallery-06.webp';
import gallery7 from 'assets/images/gallery/gallery-07.webp';
import gallery8 from 'assets/images/gallery/gallery-08.webp';
import gallery9 from 'assets/images/gallery/gallery-08.webp';
import gallery10 from 'assets/images/gallery/gallery-09.webp';
// import galleyContainer from 'assets/images/page-banner.webp';
// const folderPath = '/assets/images/gallery';
// const imageUrls = getImagesFromFolder(folderPath);

const gallery = [
    { img: gallery1, videoUrl: 'https://www.youtube.com/embed/V5he1JXiQbg' },
    { img: gallery2, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery3, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery4, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery5, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery6, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery7, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery8, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery9, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' },
    { img: gallery10, videoUrl: 'https://www.youtube.com/embed/X1WDn3RTRsk' }
];

// extra css
const style = {
    line: {
        width: '150px',
        background: '0 0',
        border: '1px solid var(--primaryMain)',
        marginTop: '25px'
    },
    playBtn: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)',
        color: '#f1f1f1',
        fontSize: '25px',
        whiteSpace: ' nowrap'
    }
};

const Index = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [modalShow, setModalShow] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    // const [show, setShow] = useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal fullscreen {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton style={{ maxHeight: '20px' }}>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <h5>Video Tittle</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0" closeButton>
                    <Container className="p-0" fluid style={{ display: 'flex', justifyContent: 'center' }}>
                        <iframe
                            className="embed-responsive-item"
                            src={imageUrl}
                            // allowfullscreen
                            style={{ width: '100%', height: '90vh' }}
                        ></iframe>
                        {/* </div> */}
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
    const openModal = (url) => {
        setImageUrl(url);
        setModalShow(true);
    };
    return (
        <>
            <section className="">
                <div className="container">
                    <div className="text-start">
                        <h2 className="title">Video Gallery</h2>
                        <span style={style.line} />
                    </div>
                </div>
            </section>

            {/* <!--====== Gallery Start ======--> */}

            <div className="gallery-page p-0">
                <div className="container">
                    <PerfectScrollbar options={{ suppressScrollX: true }}>
                        <div className="row" style={{ maxHeight: '60rem' }}>
                            {gallery.map((item, index) => (
                                <div className="col-lg-6 col-sm-6 " key={index}>
                                    <div className="video-container d-flex justify-content-center" onClick={() => openModal(item.videoUrl)}>
                                        <div className="single-gallery mt-30 position-relative video-fade-container">
                                            <img src={item.img} width="250" height="230" alt="gallery" />
                                            <div style={style.playBtn}>
                                                <i className="fas fa-play"></i>
                                                <span style={{ paddingLeft: '15px' }}>Play now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PerfectScrollbar>
                </div>
            </div>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

export default Index;
