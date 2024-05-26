import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div>
            <h1>Welcome to the SnickySnax Vending Machine</h1>
            <ul>
                <li>
                    <Link to="/snack1">Chips</Link>
                </li>
                <li>
                    <Link to="snack2">Soda</Link>
                </li>
                <li>
                    <Link to="snack3">Candy</Link>
                </li>
            </ul>
        </div>
    );
};

export default VendingMachine;