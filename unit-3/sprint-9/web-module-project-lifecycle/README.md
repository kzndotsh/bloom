# Component Lifecycle - React Todo Full-Stack

This module explored lifecycle methods in class components. In your project you will demonstrate proficiency of these concepts by building a todo app that can interact with an API to read, create and edit todos.

## Skills You Will Practice

- Building class components from scratch
- Using `ComponentDidMount` to trigger a request to the server after the first render
- Using a submit event handler to create (`POST`) a new resource to the server
- Using a click handler to edit (`PATCH`) an existing resource on the server
- Updating the frontend to keep it in sync with the state of the server
- Filtering out of view the completed todos

## Introduction

In this project you will build an application that allows for todos to be added, completed and removed from view. This application should:

- Use [this gif](./todo.gif) as inspiration for building the DOM
- Try out [this prototype](https://advanced-react-todos-ajax.herokuapp.com/)
- Hold all todos in state within the `App.js` component
- Allow for a todo's `completed` status to be toggled back and forth when clicking on a todo
- Allow for a todo to be added when submitting the new todo form
- Allow for completed todos to be filtered out of view when clicking the clear completed button

## Tools

- Node 16.x
- NPM 8.x (update NPM executing `npm i -g npm`)
- Postman (download the desktop version [here](https://www.postman.com/downloads/))
- Chrome >= 96.x

Other browser/Node/NPM configurations might work but haven't been tested.

## Project Set Up

- Fork, clone, and `npm install`.
- Launch the project on a development server executing `npm run dev`.
- Visit your app by navigating to `http://localhost:3000` with Chrome.

## Project Instructions

### API Endpoints

The following endpoints exist in this project and should be explored with Postman prior to coding:

- `GET http://localhost:9000/api/todos`
  1. Expects no payload
  2. Makes no changes on the server
  3. responds with `200 OK` and a payload with all the todos
- `POST http://localhost:9000/api/todos`
  1. Expects a payload with `name` (string) and optional `completed` (boolean)
  2. Creates a new todo on the server
  3. responds with `201 Created` and a payload with the new todo
- `PATCH http://localhost:9000/api/todos/:id`
  1. Expects no payload
  2. Flips the `completed` property on the todo with the id provided in the URL
  3. Responds with `200 OK` and the updated todo

The API will make other responses if the requests are defective:

- `422 Unprocessable Entity` when a required payload is missing or incorrect
- `404 Not Found` when the requested todo does not exist, or when the URL is incorrect

### React Components

Build all components as class components. Find them inside `frontend/components`. Don't focus on styling. We want you to worry about function over form today. Your React application must consume the endpoints above to achieve the following functionality:

- Your app should display a list of todos, an input field, a submit button, and a button to filter out completed todos
- `<App />` will hold all of the state machinery:
  - Application state, held in component state
  - State-changing methods, event handlers
- `<TodoList />` receives your todos array and iterates over the list generating a new `<Todo />` for each element in the array
- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen
- `<Form />` will hold your input field and your `Add Todo` and `Clear Completed` buttons
  - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list
  - Once a todo is submitted, the Todo List should re-render and show the added todo

## Submission Format

- Only work on main.
- Avoid committing broken code, but commit as often as possible
- Refer to Canvas for additional submission instructions
