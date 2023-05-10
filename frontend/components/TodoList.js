import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='todo-list'>
        <h2>Todo List</h2>
        {this.props.todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
            />
          );
        })}
      </div>
    );
  }
}
