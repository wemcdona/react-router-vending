import React from 'react';
import { Link } from 'react-router-dom';

const Snack1 = () => {
    return (
        <div>
            <h2>Chips</h2>
            <p>Crunchy and salty!</p>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Snack1;