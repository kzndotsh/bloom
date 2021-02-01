# Advanced Web Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced web applications**. During this sprint, you studied **React testing, client-side auth, HTTP methods, and Vercel**. 

In your challenge this week, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.**

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your instructors if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction
In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

**Commit your code regularly and meaningfully.** This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Instructions

 ### Task 1: Project Setup
 * [ ] Fork and clone this repository.
 * [ ] **RUN** npm install install your dependences
 * [ ] **RUN** npm start to fire up your React application.

 ### Task 2: CodeGrade Setup
 * [ ] Open assignment in canvas and click on the "Set up git" option.
 * [ ] Follow instructions to setup codegrade Webhook and deploy key.
 * [ ] Push your first commit by using:
 ```git commit --allow-empty -m "Create a CodeGrade submission" && git push```
 * [ ] Check to see that codegrade has accepted your git submssion.

 ### Task 3: Project Requirements
 Your finished project must include all of the following requirements.

  #### Authentication
  Build a login form to authenticate your users.

  * [ ] Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
  * [ ] Save the token to localStorage
  * [ ] Build a `axiosWithAuth` module to create an instance of axios with the authentication header
  * [ ] Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component

  #### Consuming the API
  * [ ] When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.
  * [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data
  * [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

  #### Testing
  - [ ] Finish the test in `BubblePage.test.js` to test that your app is fetching the bubble data from the API

  **Notes:**
  - You are welcome to create additional files but **do not move or rename existing files** or folders.
  - Do not alter your `package.json` file except to install extra libraries.
  - In your solution, it is essential that you follow best practices and produce clean and professional results.
  - Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
  - It is better to submit a challenge that meets MVP than one that attempts too much and does not.

 ### Task 4: Stretch Goals 
 **IMPORTANT:** Only work on stretch goals after completing your MVP! 

 When completing these goals, make sure to use a **new branch** to ensure your MVP code is not overwritten. You can branch off `main` by executing `git checkout -b stretch`. When you are fully sure your stretch code is ready for feedback, merge your stretch code with main using `git checkout main` and `git merge stretch.`

  After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

 * [ ] Build out another form to add a new color to your color list
 * [ ] Build a custom hook called `useApi` that you can use to make all of your API calls
 * [ ] Add more tests to give you further confidence in the code you're shipping

### Reference Materials
 #### API Documentation
   * **[POST]** * to `http://localhost:5000/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
   * **[GET]** to `http://localhost:5000/api/colors`: returns the list of colors and their hex codes.
   * **[POST]** to `http://localhost:5000/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`).
   * **[PUT]** to `http://localhost:5000/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
   * **[DELETE]** to `http://localhost:5000/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example).

 #### Hex Color Exmaples
 **Note** You can use the sites like the following to get color hex codes:
  * [Color-Hex](https://www.color-hex.com/)

## Submission format
 * [ ] Submit via Codegrade by commiting and pushing any new changes on main to github.
 * [ ] Check codegrade for automated feedback
 * [ ] Check codegrade on Monday following the Sprint Challenge for reviewer feedback.

## Interview Questions
 Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. 
 Add your answers to the questions within `interview_answers.md` file.

1. Explain what a token is used for.
2. What steps can you take in your web apps to keep your data secure?
3. Describe how web servers work.
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

