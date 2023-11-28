Cypress.Commands.add('pickRandomFruit', () => {
  cy.get('select option').then(options => {
    const indexesOfEnabledOptions = []

    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        indexesOfEnabledOptions.push(i)
      }
    }

    const randomEnabledFruit = indexesOfEnabledOptions[
      Cypress._.random(0, indexesOfEnabledOptions.length - 1)
    ]

    cy.log(`From the following indexes of enabled fruits: ${indexesOfEnabledOptions}, I'm picking: ${randomEnabledFruit}`)

    cy.get('select').select(randomEnabledFruit)
  })
})
