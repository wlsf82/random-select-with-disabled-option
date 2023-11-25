describe('Fruits', () => {
  Cypress._.times(10, () => {
    it('randomly selects an fruit not considering the disabled ones', () => {
      cy.visit('./src/index.html')
  
      cy.selectRandomFruit()
    })
  })
})
