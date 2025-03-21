describe('Post App - E2E Tests', () => {
    beforeEach(() => {
        cy.visit('/dashboard'); // Visit the home page before each test
    });

    it('should open dialog on button click and validate content', () => {
        // Click the button to open the dialog
        cy.get('#add-post').click();

        // Verify that the dialog is open
        cy.get('.mat-mdc-dialog-container').should('be.visible');

        // Check if the dialog contains the expected text
        cy.get('[data-cy="dialog-title"]').should('contain', 'on your Mind');

        // Close the dialog
        cy.get('button').contains('Cancel').click();

        // Ensure dialog is closed
        cy.get('.mat-mdc-dialog-container').should('not.exist');
    });
});
