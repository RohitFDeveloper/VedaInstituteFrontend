/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './data';
import './awards-achievement.css';
// third party
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// project others
import envVariables from 'environment.js';

export default function AwardsAchievement() {
    const [awardsList, setAwardsList] = useState(productData);
    async function fetchAwardslist() {
        await axios
            .get(`${envVariables.baseURL}api/award-list`)
            .then((res) => {
                // console.log(res.data.data.data);
                setAwardsList(res.data.data.data);
                // console.log(res);
            })
            .catch((error) => {
                toast.error('Something went wrong with award list !', {
                    theme: 'colored',
                    style: {
                        color: '#fff',
                        background: 'var(--errorMain)'
                    }
                });
            });
    }
    useEffect(() => {
        fetchAwardslist();
    }, []);
    return (
        <>
            <section className="about-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-9">
                                <div className="section-title-2 text-center">
                                    <h2 className="title">Awards & Achievements</h2>
                                    <span className="line"></span>
                                    <p style={{ color: '#010101' }}>
                                        Even slightly believable. If you are going use a passage of Lorem Ipsum need some
                                    </p>
                                </div>
                            </div>
                        </div>
                        {awardsList.length > 0 ? (
                            <div className="row">
                                <div className="section mt-40">
                                    <Carousel showDots={false} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                                        {awardsList.map((item, index) => {
                                            return <Product key={index} name={item.title} url={item.image_url} />;
                                        })}
                                    </Carousel>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
}
