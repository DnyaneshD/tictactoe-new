/// <reference types="cypress" />

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });

  it("on selecting right boxes X player should be winner", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="box-0"]').click();
    cy.get('[data-testid="box-3"]').click();
    cy.get('[data-testid="box-1"]').click();
    cy.get('[data-testid="box-4"]').click();
    cy.get('[data-testid="box-2"]').click();

    cy.wait(200);

    cy.get('[data-testid="winner-player"]').contains("x");
  });
});
