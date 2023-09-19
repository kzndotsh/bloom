import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { setupServer, getHandlers } from './backend/mock-server'
import App, { resetStore } from './frontend/components/App'

jest.setTimeout(750) // default 5000 too long for Codegrade
const waitForOptions = { timeout: 150 }
const queryOptions = { exact: false }

const renderApp = ui => {
  resetStore()
  window.history.pushState({}, 'Test page', '/')
  return render(ui)
}
let server
beforeAll(() => {
  server = setupServer(...getHandlers())
  server.listen()
})
afterAll(() => {
  server.close()
})
beforeEach(() => {
  renderApp(<App />)
})
afterEach(() => {
  server.resetHandlers(...getHandlers())
})

// links
const wheelLink = () => document.querySelector('#wheelLink')
const quizLink = () => document.querySelector('#quizLink')
const formLink = () => document.querySelector('#formLink')
// wheel screen
const cogs = () => document.querySelectorAll('#wheel .cog')
const clockwiseBtn = () => document.querySelector('#clockwiseBtn')
const counterClockwiseBtn = () => document.querySelector('#counterClockwiseBtn')
// quiz screen
const submitAnswerBtn = () => document.querySelector('#submitAnswerBtn')
// form screen
const submitNewQuizBtn = () => document.querySelector('#submitNewQuizBtn')
const newQuestionInput = () => document.querySelector('#newQuestion')
const newTrueAnswerInput = () => document.querySelector('#newTrueAnswer')
const newFalseAnswerInput = () => document.querySelector('#newFalseAnswer')
// wheel test helper
const testCogs = activeIdx => {
  expect(cogs()).toHaveLength(6)
  cogs().forEach((cog, idx) => {
    if (idx === activeIdx) {
      expect(cog.textContent).toBe('B')
      expect(cog.className).toMatch(/active/)
    } else {
      expect(cog.textContent).toBeFalsy()
      expect(cog.className).not.toMatch(/active/)
    }
  })
}
// text contents
const WhatIsClosure = 'What is a closure'
const AFunction = 'A function plus its bindings'
const AnElephant = 'Clearly some kind of elephant'
const WhatIsPromise = 'What is a promise'
const AValue = 'A value representing a future result'
const WhatIsModule = 'An ES6 module is a'
const AFile = 'JS file'
const ThatIsCorrect = 'That was the correct answer'
const ThatIsAShame = 'That was the incorrect answer'

describe('Advanced State Sprint Challenge Submission', () => {
  describe('[WHEEL SCREEN], Review how to write actions and action creators to describe state changes and how to write reducers to respond to actions and update state. Also review how to connect components to redux.', () => {
    test(`[1] Clicking on the clockwise button:
        - the next cog to have the text content capital "B"
        - the next cog to have the class name "active"
        - the next cog after the sixth to be the first
  `, async () => {
      testCogs(0)
      fireEvent.click(clockwiseBtn())
      testCogs(1)
      fireEvent.click(clockwiseBtn())
      testCogs(2)
      fireEvent.click(clockwiseBtn())
      testCogs(3)
      fireEvent.click(clockwiseBtn())
      testCogs(4)
      fireEvent.click(clockwiseBtn())
      testCogs(5)
      fireEvent.click(clockwiseBtn())
      testCogs(0)
    })
    test(`[2] Clicking on the COUNTER clockwise button:
        - the previous cog to have the text content capital "B"
        - the previous cog to have the class name "active"
        - the previous cog before the first to be the sixth
  `, async () => {
      fireEvent.click(counterClockwiseBtn())
      testCogs(5)
      fireEvent.click(counterClockwiseBtn())
      testCogs(4)
      fireEvent.click(counterClockwiseBtn())
      testCogs(3)
      fireEvent.click(counterClockwiseBtn())
      testCogs(2)
      fireEvent.click(counterClockwiseBtn())
      testCogs(1)
      fireEvent.click(counterClockwiseBtn())
      testCogs(0)
      fireEvent.click(counterClockwiseBtn())
      testCogs(5)
    })
  })
  describe('[QUIZ SCREEN], Review how to write actions and action creators to describe state changes and how to write reducers to respond to actions and update state. Also review how to connect components to redux.', () => {
    beforeEach(() => {
      fireEvent.click(quizLink())
    })
    test(`[3] Navigating to the Quiz screen:
        - Loads the first question & answers , Review how to write asynchronous action creators to consume data from external API's
        `, async () => {
      let question = await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerA = screen.queryByText(AFunction, queryOptions)
      let answerB = screen.queryByText(AnElephant, queryOptions)
      expect(question).toBeInTheDocument()
      expect(answerA).toBeInTheDocument()
      expect(answerB).toBeInTheDocument()
    })
    test(`[4] Navigating to the Quiz screen:
        - The "Submit answer" button should be , Review how to conditionally disable a button element.`, async () => {
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      expect(submitAnswerBtn()).toBeDisabled()
    })
    test(`[5] Selecting an answer adds the correct class name:
        - Adds the "selected" class name to the selected answer
        - Removes the "selected" class name from the other answer, Review setting class names and using data from state.`, async () => {
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerA = screen.queryByText(AFunction, queryOptions)
      let answerB = screen.queryByText(AnElephant, queryOptions)
      fireEvent.click(answerA.querySelector('button'))
      expect(answerA.className).toMatch(/selected/)
      expect(answerB.className).not.toMatch(/selected/)
      fireEvent.click(answerB.querySelector('button'))
      expect(answerA.className).not.toMatch(/selected/)
      expect(answerB.className).toMatch(/selected/)
    })
    test(`[6] Selecting an answer adds the correct text to its button:
        - Changes the label of the button from "Select" to "SELECTED"
        - Turns the label of the unselected from "SELECTED" to "Select", Review accessing and using data from state.`, async () => {
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerA = screen.queryByText(AFunction, queryOptions)
      let answerB = screen.queryByText(AnElephant, queryOptions)
      fireEvent.click(answerA.querySelector('button'))
      expect(answerA.textContent).toMatch(/SELECTED/)
      expect(answerB.textContent).not.toMatch(/SELECTED/)
      fireEvent.click(answerB.querySelector('button'))
      expect(answerA.textContent).not.toMatch(/SELECTED/)
      expect(answerB.textContent).toMatch(/SELECTED/)
    })
    test(`[7] Selecting and submitting an answer:
        - Loads the next quiz from the API, Review accessing and using data from state.`, async () => {
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerA = screen.queryByText(AFunction, queryOptions)
      fireEvent.click(answerA.querySelector('button'))
      fireEvent.click(submitAnswerBtn())
      await screen.findByText(WhatIsPromise, queryOptions, waitForOptions)
    })
    test(`[8] Selecting and submitting a correct answer:
        - Puts the proper success message at the top of the page, Review how to make axios requests and dispatch appropriate actions.
        `, async () => {
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerA = screen.queryByText(AFunction, queryOptions)
      fireEvent.click(answerA.querySelector('button'))
      fireEvent.click(submitAnswerBtn())
      await screen.findByText(ThatIsCorrect, queryOptions)
    })
    test(`[9] Selecting and submitting an incorrect answer:
        - Submitting puts the proper failure message at the top of the page,  Review how to connect components to redux, how to store and retrieve data from state, and dispatch the correct actions.`, async () => {
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerB = screen.queryByText(AnElephant, queryOptions)
      fireEvent.click(answerB.querySelector('button'))
      fireEvent.click(submitAnswerBtn())
      await screen.findByText(ThatIsAShame, queryOptions)
    })
  })
  describe('[FORM SCREEN]', () => {
    beforeEach(() => {
      fireEvent.click(formLink())
    })
    test('[10] Typing in inputs changes their , Review handling user input - onChange.', () => {
      fireEvent.change(newQuestionInput(), { target: { value: 'foo' } })
      expect(newQuestionInput()).toHaveValue('foo')
      fireEvent.change(newTrueAnswerInput(), { target: { value: 'bar' } })
      expect(newTrueAnswerInput()).toHaveValue('bar')
      fireEvent.change(newFalseAnswerInput(), { target: { value: 'baz' } })
      expect(newFalseAnswerInput()).toHaveValue('baz')
    })
    test(`[11] The submit button is disabled until all inputs have values more than one character
        in length after trimming leading and trailing whitespace, Review how to conditionally disable a button element.
    `, () => {
      expect(submitNewQuizBtn()).toBeDisabled()
      fireEvent.change(newQuestionInput(), { target: { value: 'question' } })
      expect(submitNewQuizBtn()).toBeDisabled()
      fireEvent.change(newTrueAnswerInput(), { target: { value: 'true' } })
      expect(submitNewQuizBtn()).toBeDisabled()
      fireEvent.change(newFalseAnswerInput(), { target: { value: 'false' } })
      expect(submitNewQuizBtn()).toBeEnabled()
      fireEvent.change(newQuestionInput(), { target: { value: '   ' } })
      expect(submitNewQuizBtn()).toBeDisabled()
      fireEvent.change(newQuestionInput(), { target: { value: '  question  ' } })
      expect(submitNewQuizBtn()).toBeEnabled()
      fireEvent.change(newTrueAnswerInput(), { target: { value: '   ' } })
      expect(submitNewQuizBtn()).toBeDisabled()
      fireEvent.change(newTrueAnswerInput(), { target: { value: '  true  ' } })
      expect(submitNewQuizBtn()).toBeEnabled()
    })
    test(`[12] Successful submit of new quiz
        - Displays the correct success message at the top of the screen
        - Empties out the form, Review using data from state and how to reset state.
    `, async () => {
      fireEvent.change(newQuestionInput(), { target: { value: 'foobarbaz?' } })
      fireEvent.change(newTrueAnswerInput(), { target: { value: 'bar' } })
      fireEvent.change(newFalseAnswerInput(), { target: { value: 'baz' } })
      fireEvent.click(submitNewQuizBtn())
      await screen.findByText('Congrats: "foobarbaz?" is a great question!', queryOptions, waitForOptions)
      expect(newQuestionInput()).toHaveValue('')
      expect(newTrueAnswerInput()).toHaveValue('')
      expect(newFalseAnswerInput()).toHaveValue('')
    })
    test(`[13] Successful submit of new quiz
        - Adds the quiz to the roster of quizzes,  Review how to use axios to make POST requests.
    `, async () => {
      fireEvent.change(newQuestionInput(), { target: { value: 'foobarbaz?' } })
      fireEvent.change(newTrueAnswerInput(), { target: { value: 'bar' } })
      fireEvent.change(newFalseAnswerInput(), { target: { value: 'baz' } })
      fireEvent.click(submitNewQuizBtn())
      await screen.findByText('Congrats: "foobarbaz?" is a great question!', queryOptions, waitForOptions)
      fireEvent.click(quizLink())
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerA = screen.queryByText(AFunction, queryOptions)
      fireEvent.click(answerA.querySelector('button'))
      fireEvent.click(submitAnswerBtn())
      await screen.findByText(WhatIsPromise, queryOptions, waitForOptions)
      screen.getByText(ThatIsCorrect, queryOptions)
      answerA = screen.queryByText(AValue, queryOptions)
      fireEvent.click(answerA.querySelector('button'))
      fireEvent.click(submitAnswerBtn())
      await screen.findByText(WhatIsModule, queryOptions, waitForOptions)
      screen.getByText(ThatIsCorrect, queryOptions)
      answerA = screen.queryByText(AFile, queryOptions)
      fireEvent.click(answerA.querySelector('button'))
      fireEvent.click(submitAnswerBtn())
      await screen.findByText('foobarbaz?', queryOptions, waitForOptions)
    })
  })
  describe('[APP STATE]', () => {
    test(`[14] The state of the wheel survives route changes:
        - Moving the wheel, navigating away and back, should keep the position of the "B", Review how to persist state using global state with redux.
    `, async () => {
      testCogs(0)
      fireEvent.click(clockwiseBtn())
      testCogs(1)
      fireEvent.click(formLink())
      fireEvent.click(wheelLink())
      testCogs(1)
    })
    test(`[15] The state of the quiz survives route changes:
        - Selecting an answer, navigating away and back, should keep the selected answer
        - Navigating away and back shouldn't cause a new quiz to be fetched from the API, Review how to persist state using global state with redux.
    `, async () => {
      fireEvent.click(quizLink())
      await screen.findByText(WhatIsClosure, queryOptions, waitForOptions)
      let answerB = screen.queryByText(AnElephant, queryOptions)
      fireEvent.click(answerB.querySelector('button'))
      expect(answerB.textContent).toMatch(/SELECTED/)
      fireEvent.click(formLink())
      fireEvent.click(quizLink())
      answerB = screen.queryByText(AnElephant, queryOptions)
      fireEvent.click(answerB.querySelector('button'))
      expect(answerB.textContent).toMatch(/SELECTED/)
    })
    test(`[16] The state of the form survives route changes
        - Filling out the form, navigating away and back, the entered data should ,  Review how to persist state using global state with redux.
    `, async () => {
      fireEvent.click(formLink())
      fireEvent.change(newQuestionInput(), { target: { value: 'foo' } })
      fireEvent.change(newTrueAnswerInput(), { target: { value: 'bar' } })
      fireEvent.change(newFalseAnswerInput(), { target: { value: 'baz' } })
      fireEvent.click(wheelLink())
      fireEvent.click(formLink())
      expect(newQuestionInput()).toHaveValue('foo')
      expect(newTrueAnswerInput()).toHaveValue('bar')
      expect(newFalseAnswerInput()).toHaveValue('baz')
    })
  })
})
