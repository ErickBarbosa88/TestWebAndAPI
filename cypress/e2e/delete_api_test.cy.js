describe('DELETE', () => {
it('Teste para DELETE', () => {
    cy.request({
        method: 'DELETE',
        url: "https://gorest.co.in/public/v2/users/6761927", 
        headers: {
            Authorization: 'Bearer 6edbaee6e0843edba880055da73962236f00bb98f8f6e941b7a2c5c37c379649' 
        },
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.eq(204);

        
        expect(response.body).to.be.empty;
    });
});
})
