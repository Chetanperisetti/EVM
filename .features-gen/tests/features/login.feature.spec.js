// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login and Dashboard', () => {

  test('Successful login should take user to dashboard', { tag: ['@login'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await And('I enter the email "user.re@gmail.com" in the username field', null, { page }); 
    await And('I enter the password "Test@123" in the password field', null, { page }); 
    await When('I click on the Login with Password button', null, { page }); 
    await Then('I should be navigated to the dashboard page', null, { page }); 
    await And('I should see the flight details card', null, { page }); 
    await And('I should see 6 dashboard sections', null, { page }); 
    await And('I should see the company logo', null, { page }); 
    await And('I should see the "TRAVEL" section', null, { page }); 
    await And('I should see the "EXPENSES" section', null, { page }); 
    await And('I should see the user profile dropdown', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter the email \"user.re@gmail.com\" in the username field","stepMatchArguments":[{"group":{"start":18,"value":"\"user.re@gmail.com\"","children":[{"start":19,"value":"user.re@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter the password \"Test@123\" in the password field","stepMatchArguments":[{"group":{"start":21,"value":"\"Test@123\"","children":[{"start":22,"value":"Test@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on the Login with Password button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the dashboard page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I should see the flight details card","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I should see 6 dashboard sections","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And I should see the company logo","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I should see the \"TRAVEL\" section","stepMatchArguments":[{"group":{"start":17,"value":"\"TRAVEL\"","children":[{"start":18,"value":"TRAVEL","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And I should see the \"EXPENSES\" section","stepMatchArguments":[{"group":{"start":17,"value":"\"EXPENSES\"","children":[{"start":18,"value":"EXPENSES","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And I should see the user profile dropdown","stepMatchArguments":[]}]},
]; // bdd-data-end