/*
SQUARES Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/0aebd463-7c5e-4d0b-ad22-4da8f4b54e92_squares.gif

This component keeps track of a list of "square ids" on the one hand,
and the currently active id on the other. That's two slices of state!
One is used as the source of truth to render the squares, and the other
so that the component knows which square is currently active.

Only one square (or none) can be active at any given point.

Find comments below to help you along.
*/

import React, { useState } from 'react';

const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {
    const [squares, setSquares] = useState(listOfSquareIds);
    const [activeSquare, setActiveSquare] = useState(null);

    const getClassName = (id) => {
        return id === activeSquare ? 'active' : '';
    };

    const markActive = (id) => {
        if (id === activeSquare) {
            return setActiveSquare(null);
        } else {
            setActiveSquare(id);
        }
    };

    return (
        <div className='widget-squares container'>
            <h2>Squares</h2>
            <div className='squares'>
                {squares.map((id) => (
                    <div
                        id={id}
                        key={id}
                        className={`square ${getClassName(id)}`}
                        onClick={() => markActive(id)}></div>
                ))}
            </div>
        </div>
    );
}
