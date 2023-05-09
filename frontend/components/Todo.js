import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <div
        className={`todo${this.props.todo.completed ? ' completed' : ''}`}
        onClick={() => this.props.toggleTodo(this.props.todo.id)}>
        <p>{this.props.todo.name}</p>
      </div>
    );
  }
}
