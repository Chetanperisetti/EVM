// Generated from: tests\features\createTrip.feature
import { test } from "playwright-bdd";

test.describe('Travel - Trip Creation', () => {

  test.beforeEach('Background', async ({ Given, When, Then, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the login page', null, { page }); 
    await And('I enter the email "user.re@gmail.com" in the username field', null, { page }); 
    await And('I enter the password "Test@123" in the password field', null, { page }); 
    await When('I click on the Login with Password button', null, { page }); 
    await Then('I should be navigated to the dashboard page', null, { page }); 
  });
  
  test('User creates a new trip and books a ticket', { tag: ['@trip'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the dashboard', null, { page }); 
    await And('I click on the TRAVEL link'); 
    await Then('I should be navigated to the trip creation page'); 
    await When('I enter a random trip name'); 
    await And('I select a travel mode'); 
    await And('I select the trip start and end dates'); 
    await And('I select a random reason'); 
    await And('I choose a booking type'); 
    await And('I select a project name if required'); 
    await And('I fill the passenger details if required'); 
    await And('I submit the trip'); 
    await And('I book a ticket'); 
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
  {"pwTestLine":14,"pickleLine":11,"tags":["@trip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I enter the email \"user.re@gmail.com\" in the username field","isBg":true,"stepMatchArguments":[{"group":{"start":18,"value":"\"user.re@gmail.com\"","children":[{"start":19,"value":"user.re@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter the password \"Test@123\" in the password field","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"Test@123\"","children":[{"start":22,"value":"Test@123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the Login with Password button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the dashboard","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And I click on the TRAVEL link","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the trip creation page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I enter a random trip name","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I select a travel mode","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I select the trip start and end dates","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And I select a random reason","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And I choose a booking type","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I select a project name if required","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And I fill the passenger details if required","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And I submit the trip","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I book a ticket","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then the trip should be created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end