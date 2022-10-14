/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    interceptSSR2: (...args: any) => Chainable<null>
  }
}

/*
Cypress.Commands.add("commandName", (opts) => {
  //do stuff
});
*/

Cypress.Commands.add("interceptSSR2", ({ method, path, statusCode, body }) => {
  cy.task('interceptSSR', { method, path, statusCode, body })
})
