class LoginPage {

    get pricing() {
    // <a href="https://cypress-api.vivifyscrum-stage.com/pricing" class="">Pricing</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/pricing"]').eq(0);
    }
    
    get insights() {
    // <a href="https://cypress-api.vivifyscrum-stage.com/insights" class="">Insights</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/insights"]');
    }
    
    get features() {
    // <a href="https://cypress-api.vivifyscrum-stage.com/features" class="">Features</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/features"]');
    }
    
    get howItWorks() {
    // <a href="https://cypress-api.vivifyscrum-stage.com/how-it-works" class="vsp-c-btn--nowrap ">How it Works</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/how-it-works"]');
    }
    
    get about() {
    // <a href="https://cypress-api.vivifyscrum-stage.com/about" class="">About</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/about"]');
    }
    
    get contact() {
    // <a href="https://cypress-api.vivifyscrum-stage.com/contact-us" class="">Contact</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/contact-us"]');
    }

    get downloadApp() {
    // <a class="vsp-u-text-uppercase vsp-c-btn--nowrap " href="https://cypress-api.vivifyscrum-stage.com/scrum-app-download"><strong>Download App</strong></a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/scrum-app-download"]');
    }
    
    get loginMenu() {
    // <a class="vsp-u-text-uppercase" href="https://cypress.vivifyscrum-stage.com/login"><strong>Login</strong></a>
        return cy.get('a[href="https://cypress.vivifyscrum-stage.com/login"]');
    }

    get register() {
    // <a class="vsp-c-btn vsp-c-btn--primary vsp-c-btn--nowrap" href="https://cypress-api.vivifyscrum-stage.com/pricing">Start your free trial</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com/pricing"]').eq(1);
    }
    
    get demo() {
    // <a id="tryDemoHeaderButton" class="vsp-c-btn vsp-c-btn--primary-dark vsp-c-btn--nowrap">Try demo</a>
        return cy.get('#tryDemoHeaderButton');
    }

    get header() {
    // <h1 class="vs-c-auth-modal-body__heading">Log in with your existing account</h1><h1 class="vs-c-auth-modal-body__heading">Log in with your existing account</h1>
        return cy.get('h1[class="vs-c-auth-modal-body__heading"]');
    }

    get emailInput() {
        // <input type="email" data-vv-as="email" data-vv-rules="required|email" name="email" placeholder="Your Email Address" class="el-input__inner" aria-required="true" aria-invalid="false">
        return cy.get('.el-input__inner').eq(0);
    }

    get passwordInput() {
        // <input type="password" data-vv-as="password" data-vv-rules="required|min:5" name="password" placeholder="Your Password" class="el-input__inner" aria-required="true" aria-invalid="false">
        return cy.get('.el-input__inner').eq(1);
        
    }

    get forgottPassword() {
        // <a href="/forgot-password" class="vs-c-auth-modal__body-text vs-c-auth-modal__body-text--small" data-cy="login-forgot-password-link">Forgot Password?</a>
        return cy.ger('a[href="/forgot-password"]');
    }   

    get loginBtn() {
        // <button type="submit" class="vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap vs-c-btn--lg"><!----> <span class="vs-c-loading-spinner vs-c-submit-button-loading"></span>Log In</button>
        return cy.get('button[type="submit"]').eq(0);
    }   

    get homeBtn() {
        // <a data-cy="login-homepage-link" href="https://cypress-api.vivifyscrum-stage.com" class="vs-u-font-bold vs-u-text--uppercase vs-c-auth-modal__body-text">Back to home</a>
        return cy.get('a[href="https://cypress-api.vivifyscrum-stage.com"]');
    }

    get googleBtn() {
        // <button data-cy="login-google-button" class="vs-c-btn vs-c-btn--social-auth vs-c-btn--gp"><svg class="vs-c-icon vs-c-icon--md"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sign-google-plus"></use></svg></button>
        return cy.get('button[data-cy="login-google-button"]');
    }

    get facebookBtn() {
        // <button data-cy="login-facebook-button" class="vs-c-btn vs-c-btn--social-auth vs-c-btn--fb"><svg class="vs-c-icon vs-c-icon--md"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sign-facebook"></use></svg></button>
        return cy.get('button[data-cy="login-facebook-button"]');
    }

    get twitterBtn() {
        // <button data-cy="login-twitter-button" class="vs-c-btn vs-c-btn--social-auth vs-c-btn--tw"><svg class="vs-c-icon vs-c-icon--md"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sign-twitter"></use></svg></button>
        return cy.get('button[data-cy="login-twitter-button"]');
    }

    get regzenBtn() {
        // <button data-cy="login-regzen-button" class="vs-c-btn vs-c-btn--social-auth vs-c-btn--regzen"><svg class="vs-c-icon vs-c-icon--md"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#regzen"></use></svg></button>
        return cy.get('button[data-cy="login-regzen-button"]');

    }

    login(email, password) {
  
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginBtn.click();

    }
    


}

export const loginPage = new LoginPage()