import React from 'react';

// project imports
import Logo from 'common/logo/index';

const Loader = ({ isLoading }) => {
    if (!isLoading) return null;
    return (
        <div id="loader" className="d-flex justify-content-center align-items-center flex-column">
            <Logo />
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
