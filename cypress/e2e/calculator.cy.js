describe('Calculator E2E Tests', () => {
  beforeEach(() => {
    // Assurez-vous que l'application tourne sur le port 3000
    cy.visit('http://localhost:3000');
  });

  it('should perform addition correctly', () => {
    cy.get('[data-testid=num-1]').click();
    cy.get('[data-testid=add]').click();
    cy.get('[data-testid=num-1]').click();
    cy.get('[data-testid=equals]').click();
    cy.get('input').should('have.value', '2');
  });

  it('should perform subtraction correctly', () => {
    cy.get('[data-testid=num-2]').click();
    cy.get('[data-testid=subtract]').click();
    cy.get('[data-testid=num-1]').click();
    cy.get('[data-testid=equals]').click();
    cy.get('input').should('have.value', '1');
  });

  it('should perform multiplication correctly', () => {
    cy.get('[data-testid=num-2]').click();
    cy.get('[data-testid=multiply]').click();
    cy.get('[data-testid=num-3]').click();
    cy.get('[data-testid=equals]').click();
    cy.get('input').should('have.value', '6');
  });

  it('should perform division correctly', () => {
    cy.get('[data-testid=num-6]').click();
    cy.get('[data-testid=divide]').click();
    cy.get('[data-testid=num-2]').click();
    cy.get('[data-testid=equals]').click();
    cy.get('input').should('have.value', '3');
  });

  it('should clear the result', () => {
    cy.get('[data-testid=num-1]').click();
    cy.get('[data-testid=add]').click();
    cy.get('[data-testid=num-1]').click();
    cy.get('[data-testid=equals]').click();
    cy.get('[data-testid=clear]').click();
    cy.get('input').should('have.value', '');
  });

  it('should handle backspace correctly', () => {
    cy.get('[data-testid=num-1]').click();
    cy.get('[data-testid=num-2]').click();
    cy.get('[data-testid=num-3]').click();
    cy.get('[data-testid=backspace]').click();
    cy.get('input').should('have.value', '12');
  });

  it('should show error for invalid calculation (2++2)', () => {
    cy.get('[data-testid=num-2]').click();
    cy.get('[data-testid=add]').click();
    cy.get('[data-testid=add]').click();
    cy.get('[data-testid=num-2]').click();
    cy.get('[data-testid=equals]').click();
    cy.get('input').should('have.value', 'Error');
  });
});

