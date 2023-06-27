/* eslint-disable no-unused-vars */
import React from 'react';

export default function Product(props) {
    return (
        <div className="card">
            <div className="single-blog p-2">
                <div className="blog-image">
                    <img
                        src={props.url}
                        width="250"
                        height="250"
                        alt="blog"
                        style={{ objectFit: 'cover', borderRadius: '50%', width: '10rem', height: '10rem' }}
                    />
                </div>
                <div className="blog-content">
                    <ul className="meta p-2">
                        <li>18 May, 2023</li>
                        <li>Excellent</li>
                        <li>Rating 4/5</li>
                    </ul>
                    <h4 className="blog-title">
                        <span style={{ fontSize: '20px' }}>{props.name}</span>
                    </h4>
                    <div className="blog-title" style={{ textAlign: 'center' }}>
                        <p className="text-left p-2">{props.description.slice(0, 100)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
