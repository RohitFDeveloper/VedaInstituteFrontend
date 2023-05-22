/* eslint-disable no-unused-vars */
import React from 'react';

export default function Product(props) {
    return (
        <div className="card">
            <div class="single-blog">
                <div class="blog-image">
                    <a href="#">
                        <img src={props.url} width="370" height="250" alt="blog" style={{ objectFit: 'cover' }} />
                    </a>
                </div>
                <div class="blog-content">
                    {/* <ul class="meta">
                        <li>
                            <a href="#">25 May, 2020</a>
                        </li>
                        <li>
                            <a href="#">By: Alex</a>
                        </li>
                        <li>
                            <a href="#">12 Comments</a>
                        </li>
                    </ul> */}
                    <h4 class="blog-title">
                        <a href="#" style={{ fontSize: '20px' }}>
                            {props.name}
                        </a>
                    </h4>
                    <h6 class="blog-title">
                        <a href="#" style={{ fontSize: '14px' }}>
                            {props.description}
                        </a>
                    </h6>
                </div>
            </div>
        </div>
    );
}
