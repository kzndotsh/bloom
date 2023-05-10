import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, todo: e.target.value });
  };

  submitForm = (e) => {
    console.log('form submitted');
    e.preventDefault();
    this.props.addTodo(e, this.state.todo);
    this.setState({ todo: '' });
  };

  render() {
    return (
      <div className='todo-form-container'>
        <h2>Submit a new todo item:</h2>
        <form className='todo-form' onSubmit={this.submitForm}>
          <input
            type='text'
            name='todo'
            value={this.state.todo}
            onChange={this.handleChanges}
          />
          <button className='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
