describe('Tile', () => {
    it('Should disappear when clicked', () => {
        cy.visit('/')

        cy.get('[data-testid=tile]')
            .should('be.visible')
            .click()

        cy.get('[data-testid=tile]').should('not.be.visible')
    })
})
