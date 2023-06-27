/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

// third party
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// project others
import envVariables from 'environment.js';

// bootstrap
import Carousel from 'react-bootstrap/Carousel';

// images
import Image1 from 'assets/images/slider-1.webp';
import Image2 from 'assets/images/slider-2.webp';

// datas
const sliderData = [
    {
        imageUrl: Image1,
        title: 'Education is the most powerful Weapon msg 1',
        url: '/'
    },
    {
        imageUrl: Image1,
        title: 'Education is the most powerful Weapon msg 2',
        url: '/'
    },
    {
        imageUrl: Image1,
        title: 'Education is the most powerful Weapon msg 3',
        url: '/'
    }
];

const Slider = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [Slider, setSlider] = useState([]);
    async function fetchSlides() {
        await axios
            .get(`${envVariables.baseURL}api/home-page-slider-list`)
            .then((res) => {
                // console.log(res.data.data);
                setSlider(res.data.data);
            })
            .catch((error) => {
                toast.error('Something went wrong with slider!', {
                    theme: 'colored',
                    style: {
                        color: '#fff',
                        background: 'var(--errorMain)'
                    }
                });
            });
    }
    useEffect(() => {
        fetchSlides();
    }, []);
    return (
        <>
            <section className="slider-area slider-active px-0">
                <Carousel fade>
                    {Slider.length > 0
                        ? Slider.map((data, index) => {
                              return (
                                  <Carousel.Item interval={1000} key={index}>
                                      <img className="d-block w-100" src={data.image_url} alt={`slide ${index}`} />
                                      {!isMobile ? (
                                          <Carousel.Caption style={{ top: '30%', bottom: 'auto', left: '10%', right: 'auto' }}>
                                              <div className="slider-content">
                                                  <h2 className="title">{data.title}</h2>
                                                  <ul className="slider-btn">
                                                      <li>
                                                          <a className="main-btn main-btn-2" href="https://www.youtube.com/">
                                                              Subscribe Us
                                                          </a>
                                                      </li>
                                                      {data.link != null ? (
                                                          <li>
                                                              <Link className="main-btn main-btn-2" target="_blank" to={data.link}>
                                                                  Custom
                                                              </Link>
                                                          </li>
                                                      ) : null}
                                                  </ul>
                                              </div>
                                          </Carousel.Caption>
                                      ) : (
                                          <Carousel.Caption>
                                              <ul className="slider-btn">
                                                  {data.link != null ? (
                                                      <li>
                                                          <Link className="main-btn main-btn-2" target="_blank" to={data.link}>
                                                              Custom
                                                          </Link>
                                                      </li>
                                                  ) : null}
                                              </ul>
                                          </Carousel.Caption>
                                      )}
                                  </Carousel.Item>
                              );
                          })
                        : null}
                </Carousel>
            </section>
        </>
    );
};

export default Slider;
