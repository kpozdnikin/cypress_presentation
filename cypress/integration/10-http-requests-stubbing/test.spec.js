/// <reference types="cypress" />

beforeEach( () => {

  cy
    .intercept('GET', '/todos', { fixture: 'three-items.json' })
    .as('todosList');

  cy
    .intercept('POST', '/todos', {
      method: 'POST',
      url: '/todos',
      response: [],
      statusCode: 500
    })
    .as('todoCreate');

  cy
    .visit('localhost:3000');

});

it('has zero items in list', () => {

  cy
    .wait('@todosList');

  cy
    .get('.todo')
    .should('have.length', 3);

});

it('has stubbed items in todo list', () => {

  cy
    .wait('@todosList');

});

it('shows error when adding new item', () => {

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .wait('@todoCreate');

  cy
    .get('#errorMessage')
    .should('contain.text', 'Sorry. There was an error creating todo item.')
    .should('be.visible');

});
