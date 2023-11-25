Cypress.Commands.add('selectRandomFruit', () => {
  cy.get('select option').then(options => {
    let indexesOfEnabledOptions = []

    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        indexesOfEnabledOptions.push(i)
      }
    }

    const randomEnabledFruit = indexesOfEnabledOptions[Cypress._.random(0, indexesOfEnabledOptions.length - 1)] 

    cy.get('select').select(randomEnabledFruit)
  })
})
