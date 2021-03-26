# Advanced Web Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced web applications**. During this sprint, you studied **React testing, client-side auth, HTTP methods, and Vercel**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.**

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

_Sprint challenges open at Midnight PST on Thursday and close at 5pm PST on Friday. You will receive feedback on what you have finished and submitted by 5pm when the submissions will be closed. No retakes will be accepted._

## Introduction

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

## Instructions

### Task 1: Project Setup

* [ ] Fork and clone this repository.
* [ ] Create a new branch with the 
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
* [ ] **RUN** `npm install` to install your dependencies.
* [ ] **RUN** `npm start` to start your application.

### Task 2: CodeGrade Setup

* [ ] Open the assignment in Canvas and click on the "Set up git" option.
* [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key, making sure your deployment is set to your `<firstName-lastName>`.
* [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`
* [ ] Check to see that Codegrade has accepted your git submission.

### Task 3: Project Requirements

Your finished project must include all of the following requirements. **Unlike other projects, the local server used here can not be accessed through the browser. It is started automatically and without the need for starting a server.js file. Feel free to ignore any messages related to MSW or mock service workers. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.**

#### Authentication
> *Build a login form to authenticate your users along with all the components and utilities needed to support authentication.*

* [ ] In `Login.js`, build all UI and state functionality needed to capture a username and password.
* [ ] **Make sure that the input for your username and password includes the data-testid="username" and data-testid="password" attributes. These are needed for codegrade testing.**
* [ ] Build in functionality that would allow an error to be displayed in the provided p tag if either the username or password is incorrect.
* [ ] Construct an AXIOS request that retrieves an auth token from the server when the username `Lambda` and the password `i<3Lambd4` is passed into the request.
* [ ] Save the token to localStorage.
* [ ] Build a `axiosWithAuth` module to create an instance of axios with the authentication header.
* [ ] Build a `PrivateRoute` component and use it to protect the route that renders the `BubblesPage` component.
* [ ] In `App.js`, build the backend to the logout button. When pressed, the authentication token within localStorage should be removed.

#### Consuming the API
> *Add in the axios requests and state changes needed to connect our api to the web application. Consider the effect of authentication on your api requests.*

* [ ] When `BubblePages` mounts, make a GET request to fetch the color data for your bubbles.
* [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make API requests for to editing and delete data.
* [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

#### Testing
* [ ] Finish the test in `BubblePage.test.js` to test that your app is fetching the bubble data from the API

**Notes:**
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not change your `package.json` file except to install additional libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 4: Stretch Goals

**IMPORTANT:** Only work on stretch goals after completing your MVP!

When completing these goals, make sure to use a **new branch** to ensure your MVP code is not overwritten. You can branch off `<firstName-lastName>` by executing `git checkout -b stretch`. When you are fully sure your stretch code is ready for feedback, merge your stretch code with main using `git checkout <firstName-lastName>` and `git merge stretch.`

These goals may or may not be things you have learned in this module but they build on the material you just studied:

* [ ] Build out another form to add a new color to your color list
* [ ] Build a custom hook called `useApi` that you can use to make all of your API calls
* [ ] Add more tests to give you further confidence in the code you're shipping

### Reference Materials

#### API Documentation
* **[POST]** * to `http://localhost:5000/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
* **[GET]** to `http://localhost:5000/api/colors`: returns the list of colors and their hex codes. This endpoint can only be accessed by an autheticated user.
* **[POST]** to `http://localhost:5000/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`). This endpoint can only be accessed by an autheticated user.
* **[PUT]** to `http://localhost:5000/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`). This endpoint can only be accessed by an authenticated user.
* **[DELETE]** to `http://localhost:5000/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example). This endpoint can only be accessed by an autheticated user.

#### Hex Color Examples
**Note** You can use the sites like the following to get color hex codes:
* [Color-Hex](https://www.color-hex.com/)

## Submission format

* [ ] Submit via Codegrade by committing and pushing any new changes.
* [ ] Submit a pull-request to merge <firstName-lastName> branch into main. **Please don't merge your own pull request and make sure you are on your own repo**
* [ ] Check codegrade for automated feedback.
* [ ] Check codegrade on Monday following the Sprint Challenge for reviewer feedback.
* [ ] Any changes pushed to your <firstName-lastName> branch will resubmitted to codegrade if pushed before the sprint challenge deadline. Changes after the deadline will not be reviewed.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.
2. What steps can you take in your web apps to keep your data secure?
3. Describe how web servers work.
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.