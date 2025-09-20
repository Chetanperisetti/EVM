Feature: Create Travel Trip

  Scenario: User creates a trip successfully
    Given I am on the login page
    And I enter the email "user.re@gmail.com" in the username field
    And I enter the password "Test@123" in the password field
    When I click on the Login with Password button
    When I navigate to Travel and create a trip
    Then the trip should be created successfully