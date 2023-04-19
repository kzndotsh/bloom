describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('sanity check to make sure tests work', () => {
    expect(1 + 2).to.equal(3);
  });

  // Get the Name input and type a name in it.
  // Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)

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

  // Get the Email input and type an email address in it

  const emailInput = () => cy.get('input[name=email]');

  it('email input should exist', () => {
    emailInput().should('exist');
  });

  it('email input can be typed in', () => {
    emailInput()
      .should('have.value', '')
      .type('test@email.com')
      .should('have.value', 'test@email.com');
  });

  // Get the password input and type a password in it

  const passwordInput = () => cy.get('input[name=password]');

  it('password input should exist', () => {
    passwordInput().should('exist');
  });

  it('password input can be typed in', () => {
    passwordInput()
      .should('have.value', '')
      .type('password')
      .should('have.value', 'password');
  });

  // Set up a test that will check to see if a user can check the terms of service box

  const termsInput = () => cy.get('input[name=terms]');

  it('terms of service should exist', () => {
    termsInput().should('exist');
  });

  it('terms of service can be checked', () => {
    termsInput().should('not.to.be.checked').check().should('be.checked');
  });

  // Check to see if a user can submit the form data

  const submitBtn = () => cy.get('button');

  it('submit button should exist', () => {
    submitBtn().should('exist');
  });

  it('form data can be submitted', () => {
    nameInput()
      .should('have.value', '')
      .type('Logan')
      .should('have.value', 'Logan');
    emailInput()
      .should('have.value', '')
      .type('test@email.com')
      .should('have.value', 'test@email.com');
    passwordInput()
      .should('have.value', '')
      .type('password')
      .should('have.value', 'password');
    termsInput().should('not.to.be.checked').check().should('be.checked');
    submitBtn().should('not.have.class', 'disabled');
    submitBtn().click();
  });

  // Check for form validation if an input is left empty

  it('error message should exist if an input is empty', () => {
    nameInput().type('test').clear();
    cy.contains(/name is a required field/i).should('exist');
  });
});
