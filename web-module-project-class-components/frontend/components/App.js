import React from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  toggleTodo = (todoId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        if (!todo.completed) return todo;
      }),
    });
  };

  render() {
    return (
      <div className='app'>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form addTodo={this.addTodo} />
        <button onClick={this.clearCompleted} className='clear-btn'>
          Hide Completed
        </button>
      </div>
    );
  }
}
