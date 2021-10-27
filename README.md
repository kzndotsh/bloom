# Component Lifecycle Methods - React Github User Card

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored lifecycle methods in class components. In your project you will demonstrate proficiency of these concepts by recreating the Github User Card project, but as a React application this time.


## Objectives
- Build class components from scratch from a Storyboard
- Get comfortable creating multiple slices of state
- Use ComponentDidMount to make an API call
- Use ComponentDidUpdate to make an API call

## Introduction
In this project you will build an application that allows for github user and follower information to be retrieved and displayed within custom made DOM. You application should do the following:
- Hold both the current user, user and follower state within the App.js component.
- Load the current user state into the user state on mount.
- Load the current user's followers into state when the current user state is updated.
- Load the the user and follower information of the username typed into a form when submitted.

<!-- ![Project Example](project-goals.gif) -->

***Make sure to complete your tasks one at a time and complete test each task before proceding forward.***

## Instructions
### Task 1: Project Set Up
* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-lifecycle`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`

### Task 2: Project Requirements
#### Build your DOM
> *Creating the DOM for your application base on your template and data*
* [ ] Take a look at the [included mockup](./card_mockup.png).
* [ ] Use your browser to take a look at the data returned when using the following endpoints: https://api.github.com/users/<Your github name> and https://api.github.com/users/<Your github name>/followers
* [ ] Using these three pieces of information, build the DOM necessary to display all application information.
* [ ] Make use of the User.js (for holding all user information), FollowerList.js (for map through a followers list) and Follower.js (for displaying an individual follower) components to efficiently distribute your code. ***All components should be class based for this assignment.***
* [ ] Feel free to leave the search form within App.js.
* [ ] Lightly style as needed.
* [ ] Commit all changes before proceeding.

#### Add in your state
> *Now that we have all the DOM necessary to run our application, let's proceed to building in our state*
* [ ] In App.js, add in state. Include a slice for state for:
    - A string defining the user we are currently searching for
    - An object containing all user information
    - The array of all followers
* [ ] Using our two github endpoints as a base, add your github user name, as well as test data for the user object and followers array to insure it is connected correctly.
* [ ] Connect make sure that the test data within state correct displays within your User, FollowerList and Follower components.

#### Load in the user and follower on mount
> *We can now do our api calls to get our initial data*
* [ ] Make our user object and follower list state empty by default.
* [ ] Keep our searched user state your github username by default.
* [ ] Use componentDidMount to load initial user data for your github name into state.
* [ ] Use componentDidUpdate to load follower information ***only when the user slice of state changes value. Make be careful to avoid infinite loops while building this portion.***

#### Build search capabilities within your APP
> *Now let's allow users to search for new github usernames*
* [ ] Connect your form in App.js so that typing into a input updated your current user state.
* [ ] When your form is submitted, make an api call on current user. Set the returned user data to state.
* [ ] Ensure that followers is correctly updated.

### Task 3: Stretch goals
- [ ] We are making several api calls of the same type in our code. How can we make this portion more dry?
- [ ] Add in functionality so that when a follower is clicked, they will become the searched user. Have the UI update approprately.
- [ ] Push your styling! Have fun!