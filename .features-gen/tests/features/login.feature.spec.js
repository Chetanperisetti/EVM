// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login and Dashboard', () => {

  test('Successful login should take user to dashboard', { tag: ['@login'] }, async ({ Given, When, Then, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I login with email "user.re@gmail.com" and password "Test@123"', null, { page }); 
    await Then('I should see the dashboard page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I login with email \"user.re@gmail.com\" and password \"Test@123\"","stepMatchArguments":[{"group":{"start":19,"value":"\"user.re@gmail.com\"","children":[{"start":20,"value":"user.re@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"Test@123\"","children":[{"start":53,"value":"Test@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard page","stepMatchArguments":[]}]},
]; // bdd-data-end