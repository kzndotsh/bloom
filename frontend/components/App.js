import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos';

const getTodos = () => {
  console.log('getTodos function ran');
  return (

      .get(`${URL}`)
      .then((res) => res)
      // .then((res) => console.log(res))
      .catch((err) => console.log(err))
  );
};

export default class App extends React.Component {
  constructor() {
    console.log('constructor ran');
    super();
    this.state = {
      todos: [
        // { name: 'Organize Garage', id: 1528817077286, completed: false, }
      ],
    };
  }

  addTodo = (e, todo) => {
    console.log('addTodo function ran');
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false,
    };
    axios
      .post(`${URL}`, newTodo)
      .then((res) => {
        this.setState((prevState) => ({
          todos: [...prevState.todos, res.data.data],
        }));
      })
      .catch((err) => console.log(err));
  };

  toggleTodo = (todoId) => {
    console.log('todo completed');
    const todoToUpdate = this.state.todos.find((todo) => todo.id === todoId);
    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
    axios
      .patch(`${URL}/${todoId}`, updatedTodo)
      .then((res) => {
        this.setState((prevState) => ({
          todos: prevState.todos.map((todo) =>
            todo.id === todoId ? updatedTodo : todo
          ),
        }));
      })
      .catch((err) => console.log(err));
  };

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        if (!todo.completed) return todo;
      }),
    });
  };

  componentDidMount() {
    console.log('component mounted');
    getTodos().then((res) => {
      this.setState({ todos: res.data.data });
    });
  }

  render() {
    console.log('render ran for App');
    return (
      <div className='todo-app'>
        <h1>Todo App</h1>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form addTodo={this.addTodo} />
        <button onClick={this.clearCompleted} className='clear-btn'>
          Hide Completed
        </button>
      </div>
    );
  }
}
