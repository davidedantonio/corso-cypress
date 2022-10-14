context("Application", () => {
  before(() => {
    cy.interceptSSR2({
      method: 'GET',
      path: '/users',
      statusCode: 200,
      body: [
        {
          "id": 1,
          "name": "xadrg",
          "email": "xadrg@webeeetle.com",
          "username": "xadrg",
          "address": {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874"
          }
        }
      ]
    })
  });

  describe("User list", () => {
    it("[Insert persona here] can access the user list", () => {  
      cy.visit("/users"); 
    });
  });
});
