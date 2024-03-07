/// <reference types="cypress"/>
import home_page from "../support/pages/home_page"


describe('Adicionar novo item no carrinho', () => {
    it('Login', () => {
      home_page.accessRegisterPage()
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('.shopping_cart_link').click()
      cy.get('#item_4_title_link > .inventory_item_name').then((element) => {
        expect(element).to.be.visible
      })
      cy.get('#item_0_title_link > .inventory_item_name').then((element) => {
        expect(element).to.be.visible
      })

      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type("Erick")
      cy.get('[data-test="lastName"]').type("Barbosa")
      cy.get('[data-test="postalCode"]').type("50731270")
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      cy.get('.complete-header').should('have.text', 'Thank you for your order!')
      });
    })

  