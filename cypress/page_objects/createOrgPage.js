class CreateOrgPage {

    get myOrgBtn() {
       return cy.get('.vs-u-text--uppercase').eq(0);
    }
    
    get searchBtn() {
        return cy.get('button[class="vs-c-btn"]').eq(0);
    }
    
    get notificationBtn() {
        return cy.get('button[class="vs-c-btn"]').eq(1);
    }
    
    get helpBtn() {
        return cy.get('button[class="vs-c-btn"]').eq(2);
    }
    
    get addBtn() {
        return cy.get('div[class="vs-c-my-organization__header--add-new"]').last();
    }
        
    get nextBtn() {
        return cy.get('button[name="next_btn"]');
    }
    
    get addAvatar() {
        return cy.get('.vs-c-modal__body .vs-c-btn--rounded');
    }
    
    get previousBtn() {
        return cy.get('button[name="prev_btn"]');
    }
    
    get createBtn() {
        return cy.get('.vs-c-modal__body .el-button--success').eq(1);
    }
    
    get headerNew() {
        return cy.get('h2[class="vs-c-modal__title]');
    }
    
    get orgNameInput() {
        return cy.get('input[name="name"]');
    }
    
    get popupOKBtn() {
        return cy.contains('button', 'OK');
    }
    
    get orgNameIcon() {
        return cy.contains('div[class="return cy.contains"]');
    
    }
    
    
    createOrganization(name) {
        this.addBtn.click();
        this.orgNameInput.type(name);
        this.nextBtn.click().then(() => {
            this.nextBtn.click();
            this.popupOKBtn.click();
        })
    
    }
    
}

export const createOrgPage = new CreateOrgPage()