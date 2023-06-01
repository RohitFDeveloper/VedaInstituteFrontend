/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './data';
import './testimonials.css';

export default function Testimonials() {
    const product = productData.map((item, index) => (
        <Product key={index} name={item.name} url={item.imageurl} price={item.price} description={item.description} />
    ));

    return (
        <section className="about-area" style={{ paddingBottom: '110px' }}>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mt-40">
                                <h2 className="title">
                                    Our Parents <br /> Review
                                </h2>
                                <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
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
