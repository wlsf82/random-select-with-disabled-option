describe('Select with disabled option', () => {
  Cypress._.times(10, () => {
    it('randomly selects an option not considering the disabled one', () => {
      cy.visit('./src/index.html')
  
      cy.get('select option')
        .not('[disabled]')
        .its('length').then(n => {
          cy.get('select').select(Cypress._.random(1, n))
        })
    })
  })
})
