import { $ } from "@wdio/globals";
import Page from "./page.js";
import { expect } from "chai";

class HomePage extends Page {
  public get clickDismissButton() {
    return $("button[aria-label='Close Welcome Banner']");
  }

  public get accountBtn() {
    return $("#navbarAccount");
  }

  public get homePageloginBtn() {
    return $("#navbarLoginButton");
  }

  public get getLoginFormLabel() {
    return $("#login-form");
  }

  public async dismissButton() {
    await this.clickDismissButton.click();
  }
  public async GoToLoginPage() {
    await this.accountBtn.click();
    await this.homePageloginBtn.click();
    await expect(this.getLoginFormLabel).to.exist;
  }

  public open() {
    return super.open("login");
  }
}

export default new HomePage();
