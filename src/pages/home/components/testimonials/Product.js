/* eslint-disable no-unused-vars */
import React from 'react';

export default function Product(props) {
    return (
        <div className="card">
            <div class="single-blog">
                <div class="blog-image">
                    <a href="#">
                        <img
                            src={props.url}
                            width="250"
                            height="250"
                            alt="blog"
                            style={{ objectFit: 'cover', borderRadius: '50%', padding: '40px 80px' }}
                        />
                    </a>
                </div>
                <div class="blog-content">
                    <ul class="meta">
                        <li>
                            <a href="#">18 May, 2023</a>
                        </li>
                        <li>
                            <a href="#">Excellent</a>
                        </li>
                        <li>
                            <a href="#">Rating 4/5</a>
                        </li>
                    </ul>
                    <h4 class="blog-title">
                        <a href="#" style={{ fontSize: '20px' }}>
                            {props.name}
                        </a>
                    </h4>
                    <h6 class="blog-title">
                        <a href="#" style={{ fontSize: '14px', textAlign: 'justify', padding: '0 20px' }}>
                            {props.description}
                        </a>
                    </h6>
                </div>
            </div>
        </div>
    );
}
