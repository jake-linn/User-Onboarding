describe('Quotes App', () => {

    beforeEach(() => {
    cy.visit('http://localhost:3000')
    
    })
    
    it('testing', () => {
    
        // user assetions 
    
        expect(4).to.equal(4)
        expect(4 +4).to.equal(8)
    
        // using obj. and arrays
    
        expect({}).to.eql({})
    
    }) 
    
    // checking name, email, passwork, tos, and button
    
    
    
    const nameInput = () => cy.get("input[name='name']"),
     emailInput = () => cy.get("input[name = 'email']"),
    passwordInput = () => cy.get("input[name='password']"),
    tosInput = () => cy.get("input[name = 'tos']"),
    buttonInput = () => cy.get('button')
    
    it('the elements are here', () => {
    
    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    tosInput().should('exist')
    buttonInput().should('exist')
    
    })
    
    // describe('Typing in form, checkbox, and buttons', () => {
    
    
    // it('Submit button is disabled', () =>  {
    // buttonInput().should('be.disabled')
    // })
    
    // it('Can you type', () => {
    
    // nameInput()
    // .should('have.value', '')
    // .type('Tyler Durden')
    // .should('have.value', 'Tyler Durden')
    
    // emailInput()
    // .should('have.value', '')
    // .type('TylerD@PorjectMayhem.org')
    // .should('have.value', 'TylerD@ProjectMayhem.org')
    
    // passwordInput()
    // .should('have.value' , '')
    // .type('SoapIsCool')
    // .should('have.value', 'SoapIsCool')
    
    // })
    
    // it('Can use checkbox', () => {
    // tosInput().check().uncheck()
    
    
    // })
    
    it('Submits member after form is filled out', () => {
    nameInput().type('Tyler Durden')
    emailInput().type('TylerD@ProjectMayhem.org')
    tosInput().check()
    passwordInput().type('SoapIsCool')
    buttonInput().should('be.enabled')
    
    
    })
    
    describe('adding new data', () => {
    
    it('Can add new data', () => {
    nameInput().type('Tyler Durden')
    emailInput().type('TylerD@ProjectMayhem.org')
    tosInput().check()
    passwordInput().type('SoapIsCool')
    buttonInput().click()
        
    })
    
    
    })
    
    describe('check form Validation', () => {
    
        it('tos not checked', () => {
            
            nameInput().type('Tyler Durden')
            emailInput().type('TylerD@ProjectMayhem.org')
            tosInput().check().uncheck()
            passwordInput().type('SoapIsCool')
        })
        it('passowrd too short', () => {
            nameInput().type('Tyler Durden')
            emailInput().type('TylerD@ProjectMayhem.org')
            tosInput().check().uncheck()
            passwordInput().type('So')
        })
    
    })
    
    
    })
    