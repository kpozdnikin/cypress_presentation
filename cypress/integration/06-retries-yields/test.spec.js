/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Should have todo item with text "create a list of todos"', () => {

  cy
    .get('.new-todo')
    .type('create a list of todos{enter}');
  // https://docs.cypress.io/api/commands/type.html#Arguments

  cy
    .get('.todo')
    .last()
    .contains('create a list of todos'); // parent command

});

it('Should have todo item with text "buy milk"', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .get('.todo-list') // yields ul element
    .find('li') // yields 2 li elements
    .eq(1) // yields li element 2
    .should('contain.text', 'buy milk'); // makes assertion on element 2

});

it('Should have one todo item', () => {

  cy
    .get('.todo', { timeout: 3000 }) // retries until .todo element is found
    .should('have.length', 1); // retries until number of yielded elements is 1
});
