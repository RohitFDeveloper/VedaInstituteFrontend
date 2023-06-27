import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
// project imports
import logo from 'assets/images/logo.png';
function Index({ ...props }) {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? (
        <Link to="/">
            <img src={logo} width={props.width} height={props.height} alt="Logo" style={{ objectFit: 'cover' }} />
        </Link>
    ) : (
        <Link to="/">
            <img src={logo} width={props.width} height={props.height} alt="Logo" style={{ objectFit: 'cover' }} />
        </Link>
    );
}

export default Index;
