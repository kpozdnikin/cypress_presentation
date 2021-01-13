/// <reference types="cypress" />

beforeEach( () => {

  cy
    .intercept('GET', '/todos').as('todosList')
    .intercept('POST', '/todos').as('todoCreate');

  cy
    .visit('localhost:3000');

});

it('has no elements', () => {

  cy
    .wait('@todosList');

  cy
    .get('.todo')
    .should('have.length', 0);

});

it('adds an item to the list', () => {

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .wait('@todoCreate').then(({ response }) => {

      console.log('response', response);

    expect(response.statusCode).to.eq(201);
    expect(response.body.title).to.eq('wash dishes');
    expect(response.body.completed).to.be.false;
  })
});
