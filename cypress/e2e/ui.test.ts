/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe(`UI elements tests`, () => {
  before(() => {
    cy.visit(`/`).get(`main`).injectAxe();
  });
  it(`Has logotype`, () => {
    cy.get(`h1`).contains(`Assembless`);
  });
  it(`Explore button changes background on hover`, () => {
    cy.get(`[data-test-id="explore-button"]`)
      .realHover()
      .wait(560)
      .should(`have.css`, `background-color`, `rgb(34, 34, 34)`);
  });
  it(`TypingCarousel is animating`, () => {
    cy.get(`[data-test-id="typingcarousel"]`)
      .wait(3000)
      .should(`contain`, `APPS`);
  });
});
