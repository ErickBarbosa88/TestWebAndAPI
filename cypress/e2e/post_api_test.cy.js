/// <reference types="cypress"/>

describe('POST', () => {
    it('Teste para POST', () => {
        cy.request({
            method: 'POST',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: 'Bearer 6edbaee6e0843edba880055da73962236f00bb98f8f6e941b7a2c5c37c379649',
            },
            body: {
                "name": "Novo",
                "gender": "male",
                "email": "dsdsdsd333567887@15ce.com",
                "status": "active"
            },
            failOnStatusCode: false
        }).then(response => {
            console.log(response)
            expect(response.status).to.eq(201);

            expect(response.body).to.have.property('name').to.eq('Novo');
            expect(response.body).to.have.property('email').to.eq('dsdsdsd333567887@15ce.com');
            expect(response.body).to.have.property('gender').to.eq('male');
            expect(response.body).to.have.property('status').to.eq('active');
        });
    });
});
