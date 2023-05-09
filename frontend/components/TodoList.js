import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div className='list'>
        <h2>Todos:</h2>
        {this.props.todos.map((todo) => {
          return (
            <Todo
              toggleTodo={this.props.toggleTodo}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </div>
    );
  }
}
