context("Application", () => {
  describe("Invoice", () => {
    beforeEach(() => {
      cy.intercept("/api/billing/invoices/", (req) => {
        req.continue((res) => {
          res.statusCode = 201;
          res.send()
        })
      }).as('api')

      cy.visit("/invoices/create");

      cy.get('#user').as('userInput')
      cy.get('#date').as('dateInput')
      cy.get('#due_date').as('dueDateInput')
      cy.get('#quantity').as('quantityInput')
      cy.get('#description').as('descriptionInput')
      cy.get("#price").as('priceInput')
    })

    it('should be able to get the form inputs', () => {
      cy.get('@userInput').should('have.attr', 'required')
      cy.get('@userInput').select("xadrg - xadrg@acme.io")
      cy.get('@userInput').should('have.value', '1')

      cy.get('@dateInput').should('have.attr', 'required')
      cy.get('@dateInput').type('2021-01-01')
      cy.get('@dateInput').should('have.value', '2021-01-01')

      cy.get('@dueDateInput').should('have.attr', 'required')
      cy.get('@dueDateInput').type('2021-01-01')
      cy.get('@dueDateInput').should('have.value', '2021-01-01')

      cy.get('@quantityInput').should('have.attr', 'required')
      cy.get('@quantityInput').type('N')
      cy.get('@quantityInput').should('have.value', '')
      cy.get('@quantityInput').type('1')
      cy.get('@quantityInput').should('have.value', '1')

      cy.get('@descriptionInput').should('have.attr', 'required')
      cy.get('@descriptionInput').type('Test')
      cy.get('@descriptionInput').should('have.value', 'Test')

      cy.get('@priceInput').should('have.attr', 'required')
      cy.get('@priceInput').type('N')
      cy.get('@priceInput').should('have.value', '')
      cy.get('@priceInput').type('10.2')
      cy.get('@priceInput').should('have.value', '10.2')
      cy.get('[data-test="send-mail"]').should('be.disabled')
    })

  it ('it should create a new invoice', () => {
    cy.get('@userInput').select("xadrg - xadrg@acme.io")
    cy.get('@dateInput').type('2021-01-01')
    cy.get('@dueDateInput').type('2021-01-01')
    cy.get('@quantityInput').type('1')
    cy.get('@descriptionInput').type('Test')
    cy.get('@priceInput').type('10.2')
    cy.get('[type="submit"]').click()
    cy.wait('@api')
      .then((interception) => {
        expect(interception.response.statusCode).to.eq(201)
        cy.get('[data-test="send-mail"]').should('not.be.disabled')
      })
  })

    it.skip("[Insert persona here] can create a new invoice", () => {
      /**
       * Your turn here ... we need to:
       * 1. test all the form fields
       * 2. intercept the XHR call
       * 3. assert on the request body
       * 4. test and write logic to enable the "Send email" button as soon as the first call is done
       */
      // Your assertions here
    });
  });
});
