// Generated from: tests\features\createTrip.feature
import { test } from "playwright-bdd";

test.describe('Create Travel Trip', () => {

  test('User creates a trip successfully', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await And('I enter the email "user.re@gmail.com" in the username field', null, { page }); 
    await And('I enter the password "Test@123" in the password field', null, { page }); 
    await When('I click on the Login with Password button', null, { page }); 
    await When('I navigate to Travel and create a trip', null, { page }); 
    await Then('the trip should be created successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\createTrip.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I enter the email \"user.re@gmail.com\" in the username field","stepMatchArguments":[{"group":{"start":18,"value":"\"user.re@gmail.com\"","children":[{"start":19,"value":"user.re@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter the password \"Test@123\" in the password field","stepMatchArguments":[{"group":{"start":21,"value":"\"Test@123\"","children":[{"start":22,"value":"Test@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the Login with Password button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I navigate to Travel and create a trip","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the trip should be created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end