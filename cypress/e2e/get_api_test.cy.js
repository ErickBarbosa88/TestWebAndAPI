/// <reference types="cypress"/>

describe('GET', () => {

    it('Teste para GET', () => {

        cy.request({
            method: 'GET',
            url:"https://gorest.co.in//public/v2/users/2139182",
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('id').to.eq(2139182);
        });
    });
    
})