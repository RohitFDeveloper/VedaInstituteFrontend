/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './data';
import './awards-achievement.css';

export default function AwardsAchievement() {
    const product = productData.map((item, index) => (
        <Product key={index} name={item.name} url={item.imageurl} price={item.price} description={item.description} />
    ));

    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
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
                    <div className="row">
                        <div className="section mt-40">
                            <Carousel showDots={true} responsive={responsive}>
                                {product}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
