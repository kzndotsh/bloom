import React from 'react';
import axios from 'axios';

const initialMessage = 'Coordinates (2, 2)';
const initialEmail = '';
const initialSteps = 0;
const initialIndex = 4;

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: initialMessage,
      email: initialEmail,
      index: initialIndex,
      steps: initialSteps,
      response: '',
    };
  }

  getXY = (index) => {
    const x = (index % 3) + 1;
    const y = Math.floor(index / 3) + 1;
    const coordinates = { x: x, y: y };
    return coordinates;
  };

  getXYMessage = (index) => {
    const coordinates = this.getXY(index);
    const newMessage = `Coordinates (${coordinates.x}, ${coordinates.y})`;
    this.setState({ message: newMessage });
  };

  reset = () => {
    this.setState({
      index: initialIndex,
      steps: initialSteps,
      email: initialEmail,
      response: '',
    });
    this.getXYMessage(initialIndex);
  };

  getNextIndex = (direction) => {
    const coordinates = this.getXY(this.state.index);

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
      this.setState({ response: `You can't go ${direction}` });
      return this.state.index;
    }

    const nextIndex = (nextY - 1) * 3 + (nextX - 1);
    this.setState({ response: '' });
    return nextIndex;
  };

  move = (direction) => {
    const nextIndex = this.getNextIndex(direction);

    if (nextIndex === this.state.index) {
      return;
    }

    this.setState({ index: nextIndex });
    this.setState({ steps: this.state.steps + 1 });
    this.getXYMessage(nextIndex);
  };

  onChange = (evt) => {
    const { value } = evt.target;
    this.setState({ email: value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const x = this.getXY(this.state.index).x;
    const y = this.getXY(this.state.index).y;
    axios
      .post('http://localhost:9000/api/result', {
        x: x,
        y: y,
        steps: this.state.steps,
        email: this.state.email,
      })
      .then((res) => {
        this.setState({ response: res.data.message });
        this.setState({ email: '' });
        console.log(res);
      })
      .catch((err) => {
        this.setState({ response: err.response.data.message });
      });
  };

  render() {
    const { className } = this.props;
    return (
      <div id='wrapper' className={className}>
        <div className='info'>
          <h3 id='coordinates'>{this.state.message}</h3>
          {/* if steps = 1, use "time", if more than 1, use "times" */}
          {/* You moved 1 time */}
          <h3 id='steps'>
            You moved {this.state.steps} time{this.state.steps === 1 ? '' : 's'}
          </h3>
        </div>
        <div id='grid'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <div
              key={idx}
              className={`square${idx === this.state.index ? ' active' : ''}`}>
              {idx === this.state.index ? 'B' : null}
            </div>
          ))}
        </div>
        <div className='info'>
          <h3 id='message'>{this.state.response}</h3>
        </div>
        <div id='keypad'>
          <button id='left' onClick={() => this.move('left')}>
            LEFT
          </button>
          <button id='up' onClick={() => this.move('up')}>
            UP
          </button>
          <button id='right' onClick={() => this.move('right')}>
            RIGHT
          </button>
          <button id='down' onClick={() => this.move('down')}>
            DOWN
          </button>
          <button id='reset' onClick={() => this.reset()}>
            reset
          </button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            id='email'
            type='email'
            placeholder='type email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <input id='submit' type='submit'></input>
        </form>
      </div>
    );
  }
}
