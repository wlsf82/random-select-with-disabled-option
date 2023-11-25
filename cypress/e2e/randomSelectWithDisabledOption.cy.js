describe('Select with disabled option', () => {
  Cypress._.times(10, () => {
    it('randomly selects an option not considering the disabled one', () => {
      cy.visit('./src/index.html')
  
      cy.selectRandomFruit()
    })
  })
})
