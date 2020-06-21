describe("Happy path", () => {
  it("Happy path", () => {
    cy.visit("/");
    cy.get(".card").should("have.length", 10);

    cy.get("button").click();
    cy.get(".card").should("have.length", 20);
  });
});
