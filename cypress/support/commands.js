import '@4tw/cypress-drag-drop';

Cypress.Commands.add('addTodo', title => {

  cy
    .get('.new-todo')
    .type(title + '{enter}');

});
