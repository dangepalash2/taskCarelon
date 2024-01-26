import { $ } from "@wdio/globals";
import Page from "./page.js";
import { expect as expectChai } from "chai";

class LoginPage extends Page {
  public get loginForm() {
    return $("#login-form");
  }

  public get inputEmail() {
    return $("#emailControl");
  }
  public get inputUsername() {
    return $("#email");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  public get loginPageBtn() {
    return $('button[type="submit"]');
  }

  public get notYetACustomer() {
    return $("#newCustomerLink");
  }

  public get inputSignUpPassword() {
    return $("#passwordControl");
  }

  public get inputRepeatPassword() {
    return $("#repeatPasswordControl");
  }

  public get securityQuestion() {
    return $('[name="securityQuestion"]');
  }

  public get selectMaidenName() {
    return $(":nth-child(2) [class='mat-option-text']");
  }

  public get EnterMaidenName() {
    return $("#securityAnswerControl");
  }

  public get registerButton() {
    return $("#registerButton");
  }

  public get errorLabel() {
    return $(".error");
  }

  public get headerLabel() {
    return $("[class='ng-star-inserted']");
  }

  public async sucseefulLoginPage() {
    await this.headerLabel.getText().then(async (headerLblText) => {
      await expectChai(headerLblText).to.contain("All Products");
    });
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginPageBtn.click();
  }

  public get registrationSucssessText() {
    return $("[class='mat-simple-snack-bar-content']");
  }

  public get regFormLabel() {
    return $("#registration-form");
  }

  public async successRegText() {
    await this.registrationSucssessText
      .getText()
      .then(async function (sucssessText) {
        await expectChai(sucssessText).to.contain(
          "Registration completed successfully. You can now log in."
        );
      });
    await browser.pause(1000);
  }

  public async invalidLoginErrorOnForm(errorMessage: string) {
    await browser.pause(3000);

    await this.loginForm.getText().then(async (fetchText) => {
      await expectChai(fetchText).to.contain(errorMessage);
    });
  }

  public async invalidLoginError(errorMessage: string) {
    await browser.pause(3000);

    await this.errorLabel.getText().then(async (fetchText) => {
      await expectChai(fetchText).to.contain(errorMessage);
    });
  }

  public async invalidUserSignupError(errorMessage: string) {
    await browser.pause(3000);

    await this.regFormLabel.getText().then(async (fetchText) => {
      await expectChai(fetchText).to.contain(errorMessage);
    });
    await expectChai(await this.registerButton.isEnabled()).to.be.false;
  }

  public async signUP(
    emailID: string,
    password: string,
    repeatPassword: string,
    maidenName: string
  ) {
    await this.notYetACustomer.click();
    await this.inputEmail.setValue(emailID);
    await this.inputSignUpPassword.setValue(password);
    await this.inputRepeatPassword.setValue(repeatPassword);
    await this.securityQuestion.click();
    await this.selectMaidenName.click();
    await this.EnterMaidenName.setValue(maidenName);
    await this.registerButton.click();
  }

  public open() {
    return super.open("login");
  }
}

export default new LoginPage();
