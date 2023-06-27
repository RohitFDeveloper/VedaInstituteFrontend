/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// bootstrap
import { Button, Modal, Container } from 'react-bootstrap';

// project imports
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
    {
        original: gallery1,
        thumbnail: gallery1
    },
    {
        original: gallery2,
        thumbnail: gallery2
    },
    {
        original: gallery3,
        thumbnail: gallery3
    },
    {
        original: gallery4,
        thumbnail: gallery4
    },
    {
        original: gallery5,
        thumbnail: gallery5
    },
    {
        original: gallery6,
        thumbnail: gallery6
    }
];

// extra css
const style = {
    line: {
        width: '150px',
        background: '0 0',
        border: '1px solid var(--primaryMain)',
        marginTop: '25px'
    }
};

const Index = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [modalShow, setModalShow] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className="p-0">
                    <ImageGallery items={gallery} />
                    {/* <Container className="p-0" fluid style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={imageUrl} alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                    </Container> */}
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
            <section>
                <div className="container mb-2">
                    <div className="text-start">
                        <h2 className="title">Photos Gallery</h2>
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
                                <div className="col-lg-6 col-sm-6" key={index}>
                                    <div className="single-gallery mt-30">
                                        <div
                                            className="image-container d-flex justify-content-center"
                                            onClick={() => openModal(item.original)}
                                        >
                                            <img src={item.original} width="250" height="230" alt="gallery" />
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
