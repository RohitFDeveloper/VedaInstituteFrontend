import React from 'react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
// project imports
import logo from 'assets/images/logo.png';
function Index({ ...props }) {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? (
        <img src={logo} width={props.width} height={props.height} alt="Logo" style={{ objectFit: 'cover' }} />
    ) : (
        <img src={logo} width={props.width} height={props.height} alt="Logo" style={{ objectFit: 'cover' }} />
    );
}

export default Index;
