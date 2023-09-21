describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });

  it('sanity check to make sure tests work', () => {
    expect(1 + 2).to.equal(3);
  });

  const nameInput = () => cy.get('input[name=name]');

  it('name input should exist', () => {
    nameInput().should('exist');
  });

  it('name input can be typed in', () => {
    nameInput()
      .should('have.value', '')
      .type('Logan')
      .should('have.value', 'Logan');
  });

  const toppings = () => cy.get('input[type=checkbox]');

  it('toppings can be selected', () => {
    toppings().check();
  });

  const submitBtn = () => cy.get('button');

  it('submit button should exist', () => {
    submitBtn().should('exist');
  });

  it('form data can be submitted', () => {
    nameInput()
      .should('have.value', '')
      .type('Logan')
      .should('have.value', 'Logan');
    submitBtn().click();
  });
});
