const { server } = require('./mocks/server')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')

beforeAll(() => {
  server.listen()
  document.body.innerHTML = `
    <div class="header">
      <img class="menu-button" src="http://localhost:9000/img/menu.png" />
      <h1>BloomTech Newsfeed</h1>
    </div>
    <div class="articles"></div>
  `
  require('./src/index')
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})

describe('just a sanity test', () => {
  test('[1] Newsfeed heading is in the DOM', () => {
    expect(screen.findByText(/BloomTech Newsfeed/i, { selector: 'h1' }))
  })
})
