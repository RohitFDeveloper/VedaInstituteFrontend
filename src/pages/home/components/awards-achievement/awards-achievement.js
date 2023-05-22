/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './data';
import './awards-achievement.css';

export default function AwardsAchievement() {
    const product = productData.map((item) => (
        <Product name={item.name} url={item.imageurl} price={item.price} description={item.description} />
    ));

    return (
        <section class="about-area">
            <div className="container">
                <div className="row">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-9">
                            <div class="section-title-2 text-center">
                                <h2 class="title">Awards & Achievements</h2>
                                <span class="line"></span>
                                <p style={{ color: '#010101' }}>
                                    Even slightly believable. If you are going use a passage of Lorem Ipsum need some
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="section mt-40">
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
