import { loginPage } from '../page_objects/loginPage.js';
import { createOrgPage } from '../page_objects/createOrgPage.js';
import { organizationPage } from '../page_objects/organizationPage.js';
const faker= require('@faker-js/faker');

describe('Visit the Scrum homepage and login', () => {
  var validEmail = 'teos@gmail.com';
  var validPassword = 'Teos12345';
  let organizationId;
 // let organizationName;
  let boardId;


  before('Set viewpoint', () => {
    cy.viewport(1280, 720),
    cy.visit('https://cypress-api.vivifyscrum-stage.com/'),
    cy.expect('include.text', 'Agile Project Management Software')
  })

  // it('Visit HomePage', () => {
  //   cy.visit('https://cypress-api.vivifyscrum-stage.com/'),
  //   cy.expect('include.text', 'Agile Project Management Software')
  // })

  it('Go to login form', () => {
    loginPage.loginMenu.click(),
    loginPage.header.should('include.text', 'Log in with your existing account')

  })

  it('Login', () => {
      cy.intercept({
        method: 'POST',
        url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
      }).as('successfulLogin')

    cy.url().should('include', '/login');
    loginPage.login(validEmail, validPassword);
    cy.wait('@successfulLogin').then(interception => {
        expect(interception.response.statusCode).to.exist
        expect(interception.response.statusCode).eq(200)
    })

    //cy.url().should('not.include', '/login');
  })

  it('Create organization', () => {
    let orgData = {
      validName: faker.name.findName(),
      //image: faker.image.avatar()
    }
    
    cy.intercept({
      method: 'POST',
      url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations'
    }).as('createOrganization')

    createOrgPage.createOrganization(orgData.validName)
    cy.wait('@createOrganization').then(interception => {
      organizationId = interception.response.body.id
      //organizationName = interception.response.body.name
      expect(interception.response.statusCode).to.exist
      expect(interception.response.statusCode).eq(201)
      cy.url().should('contain', organizationId)
    })
  })


  it('Add a new board to the organization', () => {
    let validBoardName = faker.name.findName();
    //cy.visit('https://cypress.vivifyscrum-stage.com/organizations/' + organizationId + '/boards'),

    cy.intercept({
      method: 'POST',
      url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
    }).as('createBoard')

   organizationPage.addNewBoard(validBoardName)
    cy.wait('@createBoard').then(interception => {
      boardId = interception.response.body.id
      expect(interception.response.statusCode).to.exist
      expect(interception.response.statusCode).eq(201)
      cy.url().should('contain', boardId)
    })
  })


  it('Delete a board from the organization', () => {
      cy.intercept({
      method: 'DELETE',
      url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/' + boardId
    }).as('deleteBoard')

    organizationPage.deleteBoard()
    cy.wait('@deleteBoard').then(interception => {
      expect(interception.response.statusCode).to.exist
      expect(interception.response.statusCode).eq(200)
  
    })


  })


})






