import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

export function Wheel(props) {
    const {
        activeCogIndex,
        cogCharacters,
        moveClockwise,
        moveCounterClockwise,
    } = props;

    return (
        <div id='wrapper'>
            <div id='wheel'>
                {cogCharacters.map((character, index) => (
                    <div
                        key={index}
                        className={`cog ${
                            index === activeCogIndex ? 'active' : ''
                        }`}
                        style={{ '--i': index }}>
                        {character}
                    </div>
                ))}
            </div>
            <div id='keypad'>
                <button
                    id='counterClockwiseBtn'
                    onClick={moveCounterClockwise}>
                    Counter clockwise
                </button>
                <button
                    id='clockwiseBtn'
                    onClick={moveClockwise}>
                    Clockwise
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        activeCogIndex: state.wheel.activeCogIndex,
        cogCharacters: state.wheel.cogCharacters,
    };
};

export default connect(mapStateToProps, {
    moveClockwise,
    moveCounterClockwise,
})(Wheel);
