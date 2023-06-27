/* eslint-disable no-unused-vars */
import React from 'react';

export default function Product(props) {
    return (
        <div className="card">
            <div className="single-blog">
                <div className="blog-image">
                    <img src={props.url} width="370" height="250" alt="blog" style={{ objectFit: 'cover' }} />
                </div>
                <div className="blog-content">
                    <h4 className="blog-title p-3">
                        <span style={{ fontSize: '20px' }}>{props.name}</span>
                    </h4>
                </div>
            </div>
        </div>
    );
}
