import LoginPage from "../pageObjects/login.page.ts";
import HomePage from "../pageObjects/home.page.ts";
import UserHomePage from "../pageObjects/userHome.page.ts";
import allureReporter from "@wdio/allure-reporter";

describe("UI - My Login application Positive Test Cases (with Assertion)", () => {
  allureReporter.addFeature("Feature");

  before(async () => {
    await HomePage.open();
    await HomePage.dismissButton();
  });

  it("Signup with valid credentials", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.signUP("dd1234@gmail.com", "palash123", "palash123", "aa");
    await LoginPage.login("dd1234@gmail.com", "palash123");
    await browser.pause(3000);
    await LoginPage.sucseefulLoginPage();
    await UserHomePage.logout();
  });

  it("should login with valid credentials", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.login("pd25@gmail.com", "palash123");
    await browser.pause(3000);
    await LoginPage.sucseefulLoginPage();
    await UserHomePage.logout();
  });
});

describe("UI - My Login application Negative Test Cases (with Assertion)", () => {
  allureReporter.addFeature("Feature");

  it("should not be able to login with empty Email", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.login("", "xx");
    await LoginPage.invalidLoginErrorOnForm("Please provide an email address.");
  });

  it("should not be able to  login with empty password", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.login("xxx@gmail.com", "");
    await LoginPage.invalidLoginErrorOnForm("Please provide a password.");
  });

  it("should not be able to login with invalid credentials", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.login("xxx@gmail.com", "xx");
    await LoginPage.invalidLoginError("Invalid email or password.");
  });

  it("should not be able to signup with invalid email", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.signUP("pd44", "palash123", "palash123", "maidenName");
    await LoginPage.invalidUserSignupError("Email address is not valid.");
  });

  it("should not be able to signup with weak password", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.signUP("pd44@gmail.com", "123", "123", "maidenName");
    await LoginPage.invalidUserSignupError(
      "Password must be 5-40 characters long."
    );
  });

  it("should not be able to signup with unmatched password", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.signUP("pd44@gmail.com", "123", "1", "maidenName");
    await LoginPage.invalidUserSignupError("Passwords do not match");
  });
  it("should not be able to signup without entering maiden question", async () => {
    await HomePage.open();
    await HomePage.GoToLoginPage();
    await LoginPage.signUP("pd44@gmail.com", "palash123", "palash123", "");

    await LoginPage.invalidUserSignupError(
      "Please provide an answer to your security question."
    );
  });
});
