describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preeenche os campos obrigatórios e envia o formulário', () => {

    // Usa Cypress._ (Lodash) e .repeat() para gerar uma string repetida 10 vezes
    const longText = Cypress._.repeat('Tibério Neto', 10)

    cy.get('#firstName').type('Tibério')
    cy.get('#lastName').type('Neto')
    cy.get('#email').type('tiberironeto@gmail.com')
    cy.get('#open-text-area').type(longText)
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Tibério')
    cy.get('#lastName').type('Neto')
    cy.get('#email').type('tiberironeto@gmail,com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })
  it.only('campo telefone continua vazio quando preenchido com um valor não-numérico', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })
})