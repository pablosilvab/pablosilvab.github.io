import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div>
            <h5>404 - Not Found!</h5>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default NoPage;