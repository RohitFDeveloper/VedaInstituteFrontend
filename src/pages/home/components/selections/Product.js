/* eslint-disable no-unused-vars */
import React from 'react';
const vline = {
    borderLeft: '6px solid green',
    height: '500px',
    position: 'absolute',
    left: '50%',
    //   margineft: -'3px',
    top: '0'
};

export default function Product(props) {
    return (
        <div className="card">
            <div className="single-blog">
                <div className="blog-image">
                    <img src={props.url} width="370" height="200" alt="blog" style={{ objectFit: 'cover' }} />
                </div>
                <div className="blog-content">
                    <div className="blog-title">
                        <span style={{ fontSize: '20px' }}>{props.name}</span>
                    </div>
                    <div className="blog-title">
                        <span style={{ fontSize: '16px' }}>{props.description}</span>
                    </div>
                    <div className="blog-title">
                        <ul className="d-flex justify-content-around relative">
                            <li>
                                <span style={{ fontSize: '14px' }}>Rank : {props.rank}</span>
                            </li>
                            <div>|</div>
                            <li>
                                <span style={{ fontSize: '14px' }}>Marks : {props.marks}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
