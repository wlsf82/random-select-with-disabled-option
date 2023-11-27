Cypress.Commands.add('pickRandomFruit', () => {
  cy.get('select option').then(options => {
    const indexesOfEnabledOptions = []

    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        indexesOfEnabledOptions.push(i)
      }
    }

    cy.log(`Indexes of enabled fruits: ${indexesOfEnabledOptions}`)

    const randomEnabledFruit = indexesOfEnabledOptions[
      Cypress._.random(0, indexesOfEnabledOptions.length - 1)
    ]

    cy.log(`Random enabled fruit: ${randomEnabledFruit}`)

    cy.get('select').select(randomEnabledFruit)
  })
})
