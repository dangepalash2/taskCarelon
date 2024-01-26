import { $ } from "@wdio/globals";

class UserHomePage {
  public get accountBtn() {
    return $("#navbarAccount");
  }

  public get homePageloginBtn() {
    return $("#navbarLogoutButton");
  }
  public async logout() {
    await this.accountBtn.click();
    await this.homePageloginBtn.click();
  }
}

export default new UserHomePage();
