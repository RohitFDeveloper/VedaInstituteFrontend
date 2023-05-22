/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './data';
import './testimonials.css';

export default function Testimonials() {
    const product = productData.map((item) => (
        <Product name={item.name} url={item.imageurl} price={item.price} description={item.description} />
    ));

    return (
        <section class="about-area" style={{ paddingBottom: '110px' }}>
            <div className="container">
                <div className="row">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="section-title mt-40">
                                <h2 class="title">
                                    Our Parents <br /> Review
                                </h2>
                                <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
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
