describe("Happy path", () => {
  it("Happy path", () => {
    cy.visit("/");
    cy.get(".card").should("have.length", 10);

    cy.get("button").click();
    cy.get(".card").should("have.length", 20);

    cy.get(".title")
      .first()
      .click();
    cy.location("pathname").should("include", "/font/");

    cy.get(".variant").should("exist");

    cy.get(".button--back").click();
    cy.location("pathname").should("equal", "/");

    cy.get(".card").should("have.length", 20);
  });
});
