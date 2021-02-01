# Advanced Web Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced web applications**. During this sprint, you studied **React testing, client-side auth, HTTP methods, and Vercel**. 

In your challenge this week, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

**Note** You can use the sites like the following to get color hex codes:

* [Color-Hex](https://www.color-hex.com/)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`
 - [ ] **LOOK** at the files in your root directory and notice it' is just a plain ol' React App that we've built using create-react-app.
 - [ ] **RUN** npm install install your dependences
 - [ ] **RUN** npm start to fire up your React application.

### Task 2: Setting up the CodeGrade webhook**
- [ ] Go [here](./CodeGrade-webhook.md) to setup the CodeGrade webhook before you begin.


### Task 3: Project Requirements
Your finished project must include all of the following requirements.

#### Stage 1 - Authentication
Build a login form to authenticate your users.

- [ ] Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
- [ ] Save the token to localStorage
- [ ] Build a `axiosWithAuth` module to create an instance of axios with the authentication header
- [ ] Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component

#### Stage 2 - Consuming the API

- [ ] When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.
- [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data
- [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

#### API Documentation

  * **[POST]** * to `http://localhost:5000/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `http://localhost:5000/api/colors`: returns the list of colors and their hex codes.
  * **[POST]** to `http://localhost:5000/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `http://localhost:5000/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `http://localhost:5000/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example).

#### Stage 3 Testing
- [ ] Finish the test in `BubblePage.test.js` to test that your app is fetching the bubble data from the API

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build out another form to add a new color to your color list
* [ ] Build a custom hook called `useApi` that you can use to make all of your API calls
* [ ] Add more tests to give you further confidence in the code you're shipping

## Submission format

Follow these steps for completing your project.

- [ ] Ensure that your projects are complete on your <firstName-lastName> branch.
- [ ] Merge your <firstName-lastName> branch into your main branch.
- [ ] Push your main branch to github and check that it is registers within codegrade.
- [ ] Check your personal feedback the following Monday. For more information check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-Student-facing-c5147cee220c4044a25de28bcb6bb54a)
