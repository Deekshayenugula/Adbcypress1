Cypress.Commands.add('Login', () => {

        cy.visit("https://qa1.nonprod.tenna.com/assets?view=grid");
    
        cy.get("#email").type("Poweruserpreethika2@gmail.com");
    
        cy.get(".fe-core-fe-core61").click();
    
        cy.get("#password").type("Test@123");
    
        cy.get(".fe-core-fe-core61").click();
    
    });
    
    
    
    
    Cypress.on('uncaught:exception', (err, runnable) => {
    
        // returning false here prevents Cypress from
    
        // failing the test
    
        return false
    
    })
    
    
    
    
    require('cypress-downloadfile/lib/downloadFileCommand')
    
    require('@cypress/xpath')
    
    
    
    
    import { sqlQueryCommand } from 'cypress-multiple-db-sql-server';
    
    sqlQueryCommand();
    
    
    
    
    import "@cypress-audit/lighthouse/commands";
    
    
    
    
    
    Cypress.on('uncaught:exception', (err, runnable) => {
    
        return false
    
    })