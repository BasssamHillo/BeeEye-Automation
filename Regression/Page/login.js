const loginSelectors = require("../Selectors/loginSelectors");
const setup = require("../utils/setup");
const { assert } = require('chai').assert
const { expect } = require('chai')

exports.fillUserDetails = (browser) => {

  setup.lunchBrowser(browser, '/register');
  var login = browser.page.loginSelectors();
  login
    .getTitle(function (title) {
      console.log("Page title is: " + title);
      this.assert.ok(title.includes("Create account"));
    })
    .setValue('@email', 'email') // send values
    .setValue('@password', 'password') // send values
    .click('@signInBtn')
    .pause(1000);
}