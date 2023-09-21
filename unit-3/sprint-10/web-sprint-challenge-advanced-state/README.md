# Sprint Challenge: Advanced State Management

In this challenge, you will write the logic for [THIS APP](https://advanced-state-wheel.herokuapp.com/).

## Tools

- Node 16.x
- NPM 8.x (update NPM executing `npm i -g npm`)
- Unix-like shell (Gitbash/bash/zsh)
- Chrome >= 98.x

❗ Other configurations might work but haven't been tested.

## Project Setup

- Fork, clone, and `npm install`. You won't need to add any extra libraries.
- Launch the project in a development server executing `npm run dev`.
- Visit your app by navigating Chrome to `http://localhost:3000`.
- Run tests locally executing `npm test`. The local test file is `codegrade_mvp.test.js`.

## Studying the prototype

Open the live prototype linked above and study its functionality using the following **Chrome Dev Tools**:

- **Elements tab** shows the exact DOM rendered as we interact with the UI. Look at texts but also at class names.
- **Network tab** shows the HTTP messages. "Payload" shows the request payload from the client (if any) and "Preview" shows the response payload from the server.
- **Redux Extension tab** shows application state, as well as the actions that fire on user interaction. These actions commonly carry payloads but not always.

### Important notes from "Product"

- The routes **don't lose their state** by navigating the links back and forth:
  - Current position of the "B" in the wheel is maintained.
  - Current quiz question stays loaded.
  - Values inside the form are kept.
- The endpoint to fetch the next quiz is rather slow, and a "Loading next quiz" shows instead of the quiz **while it arrives**.
- A next quiz is only requested if there is **no quiz already in app state**, or by submitting an answer.
- The "Submit answer" button in the quiz stays disabled until **an answer is selected**.
- Once an answer is selected, the only way to unselect it is by **selecting the other answer**.
- The "Submit new quiz" button in the form stays disabled until **all** inputs have values such that `value.trim().length > 0`.
- Submitting a new quiz successfully **adds it to the roster** of questions that cycle through the quiz screen.
- The structure of the HTML (hierarchy, ids, class names, texts on buttons etc) must match those of the prototype exactly.

## Studying the API

The endpoints needed for this project are the following:

- `[GET] http://localhost:9000/api/quiz/next`
  - The response to a proper request includes `200 OK` and the next quiz object
- `[POST] http://localhost:9000/api/quiz/new`
  - Expects a payload with the following properties: `question_text`, `true_answer_text`, `false_answer_text`
  - Example of payload: `{ "question_text": "Love JS?", "true_answer_text": "yes", "false_answer_text": "nah" }`
  - The response to a proper request includes `201 Created` and the newly created quiz object
  - A malformed client payload will result in a `422 Unprocessable Entity` response with a reason
- `[POST] http://localhost:9000/api/quiz/answer`
  - Expects a payload with the following properties: `quiz_id`, `answer_id`
  - Example of payload: `{ "quiz_id": "LVqUh", "answer_id": "0VEv0" }`
  - A response to a proper request includes `200 OK` and feedback on the answer

❗ Test drive all these endpoints with [Postman](https://www.postman.com/downloads/) before starting with the project.

## MVP

In order to complete this project, you must fix the following modules:

- [reducer.js](frontend/state/reducer.js)
- [action-creators.js](frontend/state/action-creators.js)
- [Message.js](frontend/components/Message.js)
- [Wheel.js](frontend/components/Wheel.js)
- [Quiz.js](frontend/components/Quiz.js)
- [Form.js](frontend/components/Form.js)

### Notes

- The Form is already connected to the Redux store, you'll have to connect the rest of components.
- The action types, action creators and reducers provided are sufficient to achieve MVP without adding new ones.
- You are welcome to build your own reducers, action types and creators from scratch, as long as all tests pass.
- The async action creators are marked as such.
- Don't install new npm dependencies or upgrade existing ones.

## MVP Short Explanation

❗ ALL TESTS MUST PASS

## Stretch Goals

- Without breaking any tests, see to randomizing the order in which answers appear.
