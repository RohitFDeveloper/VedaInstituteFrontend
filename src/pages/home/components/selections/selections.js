/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, responsive } from './data';
import './selections.css';
// third party
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// project others
import envVariables from 'environment.js';

export default function Selections() {
    const [topStudentList, settopStudentList] = useState([]);
    async function fetchtopStudentList() {
        await axios
            .get(`${envVariables.baseURL}api/top-students`)
            .then((res) => {
                console.log(res.data.data);
                settopStudentList(res.data.data);
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
        fetchtopStudentList();
    }, []);
    return (
        <>
            <section className="about-area" style={{ backgroundColor: '#d7d8d787' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-title mt-40">
                                    <h2 className="title">
                                        Here is our <br /> Toppers
                                    </h2>
                                    <p style={{ color: '#010101' }}>
                                        Even slightly believable. If you are going use a passage of Lorem Ipsum need
                                    </p>
                                </div>
                            </div>
                        </div>
                        {topStudentList.length > 0 ? (
                            <div className="row">
                                <div className="section mt-40">
                                    <Carousel showDots={false} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                                        {topStudentList.map((item, index) => {
                                            return (
                                                <Product
                                                    key={index}
                                                    name={item.student_name}
                                                    url={item.image_url}
                                                    // price={item.price}
                                                    description={item.exam_name}
                                                    rank={item.rank}
                                                    // marks={item.marks}
                                                />
                                            );
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
