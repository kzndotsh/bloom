import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMessage = 'Coordinates (2, 2)';
const initialEmail = '';
const initialSteps = 0;
const initialIndex = 4;
const initialResponse = '';

export default function AppFunctional(props) {
  const [index, setIndex] = useState(initialIndex);
  const [steps, setSteps] = useState(initialSteps);
  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);
  const [response, setResponse] = useState(initialResponse);

  const getXY = (index) => {
    const x = (index % 3) + 1;
    const y = Math.floor(index / 3) + 1;
    const coordinates = { x: x, y: y };
    return coordinates;
  };

  const getMessage = (index) => {
    const coordinates = getXY(index);
    const message = `Coordinates (${coordinates.x}, ${coordinates.y})`;
    setMessage(message);
  };

  const reset = () => {
    setIndex(initialIndex);
    setSteps(initialSteps);
    setEmail(initialEmail);
    setResponse(initialResponse);
    getMessage(initialIndex);
  };

  const getNextDirection = (direction) => {
    const coordinates = getXY(index);

    let nextX = coordinates.x;
    let nextY = coordinates.y;

    if (direction === 'left') {
      nextX -= 1;
    } else if (direction === 'up') {
      nextY -= 1;
    } else if (direction === 'right') {
      nextX += 1;
    } else if (direction === 'down') {
      nextY += 1;
    }

    if (nextX < 1 || nextX > 3 || nextY < 1 || nextY > 3) {
      setResponse(`You can't go ${direction}`);
      return index;
    }

    const nextIndex = (nextY - 1) * 3 + (nextX - 1);
    setResponse('');
    return nextIndex;
  };

  const move = (direction) => {
    const nextIndex = getNextDirection(direction);

    if (nextIndex === index) {
      return;
    }

    setIndex(nextIndex);
    setSteps(steps + 1);
    getMessage(nextIndex);
  };

  const onChange = (evt) => {
    const { value } = evt.target;
    setEmail(value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const x = getXY(index).x;
    const y = getXY(index).y;
    axios
      .post('http://localhost:9000/api/result', {
        x: x,
        y: y,
        steps: steps,
        email: email,
      })
      .then((res) => {
        setResponse(res.data.message);
        // console.log(res);
        setEmail('');
      })
      .catch((err) => {
        // console.log(err);
        setResponse(err.response.data.message);
      });
  };

  useEffect(() => {
    getMessage(index);
  }, [index]);

  return (
    <div id='wrapper' className={props.className}>
      <div className='info'>
        <h3 id='coordinates'>{message}</h3>
        {/* if steps = 1, use "time", if more than 1, use "times" */}
        {/* You moved 1 time */}
        <h3 id='steps'>
          You moved {steps} time{steps === 1 ? '' : 's'}
        </h3>
      </div>
      <div id='grid'>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
            {idx === index ? 'B' : null}
          </div>
        ))}
      </div>
      <div className='info'>
        <h3 id='message'>{response}</h3>
      </div>
      <div id='keypad'>
        <button id='left' onClick={() => move('left')}>
          LEFT
        </button>
        <button id='up' onClick={() => move('up')}>
          UP
        </button>
        <button id='right' onClick={() => move('right')}>
          RIGHT
        </button>
        <button id='down' onClick={() => move('down')}>
          DOWN
        </button>
        <button id='reset' onClick={() => reset()}>
          reset
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input
          id='email'
          type='email'
          name='email'
          label='email'
          placeholder='type email'
          value={email}
          onChange={onChange}
        />
        <input id='submit' label='submit' type='submit' alt='submit' />
      </form>
    </div>
  );
}
