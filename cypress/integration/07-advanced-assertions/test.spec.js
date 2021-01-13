/// <reference types="cypress" />

before( () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

});

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Checks text of todo item', () => {

  cy
    .get('.todo').then( items => {

    expect(items).to.contain.text('wash dishes');

  });

});

it('Should check texts of todo items', () => {

  cy
    .get('.todo')
    .then( items => {

      expect(items[0]).to.contain.text('wash dishes');
      expect(items[1]).to.contain.text('buy milk');

    });

});

it('Should have todo item with text "wash dishes" on first position (solution 1)', () => {

  cy
    .get('.todo', {timeout: 3000})
    .should('have.length', 2)
    .first()
    .contains('wash dishes');

});

it('Should have todo item with text "wash dishes" on first position (solution 2)', () => {

  cy
    .get('.todo', {timeout: 30000})
    .should( items => {

      expect(items[0]).to.contain.text('wash dishes');
      expect(items[1]).to.contain.text('buy milk');

    });

});

