describe('template spec', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3001/pizza/')
    })

    const userInput = () => cy.get('input[name=user]');
    const sizeSelect = () => cy.get("select[name=size]");
    const sauceInput = () => cy.get("input[name=choice]");
    const peperoniInput = () => cy.get("input[name=peperoni]");
    const buttonInput = () => cy.get("button[name=button]");
    const specialInput = () => cy.get("input[name=special]");
    const onionsInput = () => cy.get("input[name=onions]");
    
    
    
  
    it("it test works", () => {
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.equal(5);
      expect({}).not.equal({});
      expect({}).to.eql({});
    })

    it("Proper elements are showing", () => {
    
        peperoniInput().should("exist");
        sauceInput().should("exist");
        buttonInput().should("exist");
        userInput().should("exist");
        sizeSelect().should("exist");
        onionsInput().should("exist");
    
        cy.contains(/Add Order /i).should("exist");
        cy.contains(/peperoni/i).should("exist");
        cy.contains(/small/i).should("exist");
        cy.contains(/original red/i).should("exist");
        cy.contains(/onions/i).should("exist");
    })


    describe("Filling out inputs and cancelling", () => {
        it("can navigate", () => {
          cy.url().should("include", "localhost");
        })
        it("Submit button start out Disable", () => {
          buttonInput().should("have.attr", "disabled");
        })
        
        it("Find check and test", () => {
          peperoniInput().check();
        })

        it("Find check and test", () => {
            sauceInput().check();
          })

        it("Find check and test", () => {
            onionsInput().check();
          })

        
    
        it("can type input", () => {
          userInput()
          .should("have.value", "")
          .type("CSS rulez")
          .should("have.value", "CSS rulez");
        })
        
        it("can type input", () => {
          specialInput()
          .should("have.value", "")
          .type("CRHarding")
          .should("have.value", "CRHarding");
        })
    
       
    
        it("can select", () => {
          sizeSelect().select("Small")
        })


        it("the submit button enables when all inputs are filled out", () => {
            userInput().type("Alejandro");
            specialInput().type("Extra Chesee");
            peperoniInput().check();
            onionsInput().check();
            sauceInput().check();
            sizeSelect().select('Large');
            buttonInput().should("not.have.attr", "disabled");    






        })
        })
})