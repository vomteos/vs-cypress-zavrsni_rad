class OrganizationPage {

    get configurationBtn() {
        return cy.get('a[class="vs-c-site-logo"]').last(0);
    }

    get addBoardBtn() {
        return cy.get('div[class="vs-c-media"]').last(0);
    }

    get boardName() {
        return cy.get('input[name="name"]');
    }

    get scrumBoardType() {
        return cy.get('span[name="type_scrum"]');
    }

    get kanbanBoardType() { 
        return cy.get('span[name="type_kanban"]');
    }

    get forwardBoardBtn() {
        return cy.get('button[name="next_btn"]');
    }

    get nextBtn() {
        return cy.get('button[name="save-btn"]');
    }
    get yesBtn() {
        return cy.contains('button', 'Yes');
    }

    get cancelBtn() {
        return cy.get('button[name="cancel-btn"]'); 
    }

    get deleteBoardBtn() {
        return cy.contains('span', 'Delete').eq(20);
    }


    addNewBoard(name) {
        this.addBoardBtn.click(),
        this.boardName.type(name),
        this.forwardBoardBtn.click(),
        this.scrumBoardType.click(),
        this.forwardBoardBtn.click(),
        this.forwardBoardBtn.click(),
        this.forwardBoardBtn.click(),
        this.forwardBoardBtn.click()
    }

    deleteBoard() {
        this.configurationBtn.click(),
        this.deleteBoardBtn.scrollIntoView(),
        this.deleteBoardBtn.click(),
        this.yesBtn.click()

    }

}
export const organizationPage = new OrganizationPage()