/// <reference types="cypress"/>

describe('POST', () => {
it('Teste para POST', () => {
    cy.request({
        method: 'POST',
        url: "https://gorest.co.in/public/v2/users",
        headers: {
            Authorization: 'Bearer 6edbaee6e0843edba880055da73962236f00bb98f8f6e941b7a2c5c37c379649'
        },
        body: {
            id: 123,
            name: "teste",
            email: "teste@bednar.example",
            gender: "female",
            status: "active"
        },
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.eq(201);

        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('name').to.eq('teste');
        expect(response.body.data).to.have.property('email').to.eq('teste@bednar.example');
        expect(response.body.data).to.have.property('gender').to.eq('female');
        expect(response.body.data).to.have.property('status').to.eq('active');
        // Adicione mais verificações conforme necessário
    });
});
})