context("Application", () => {
  describe("Post list", () => {
    beforeEach(() => {
      cy.intercept({
        pathname: "/posts*"
      }).as('api')

      cy.visit("/posts");
    });

    it("should access the post list", () => {
      cy.contains("POST LIST");
      cy.wait('@api')
        .then((interception) => {
          expect(interception.response.statusCode).to.eq(200)
          cy.get('li').should('have.length', 5)
        })
    });
  });


  describe("Post list 2", () => {
    beforeEach(() => {
      cy.intercept("/posts*", (req) => {
        req.query._limit = "15"
        req.query._start = "0"
      }).as('api')

      cy.visit("/posts");
    });

    it("should access the post list", () => {
      cy.wait('@api')
        .then((interception) => {
          expect(interception.response.statusCode).to.eq(200)
          cy.get('li').should('have.length', 15)
        })
    });
  });
});
