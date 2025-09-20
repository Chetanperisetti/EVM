Feature: Create Travel Trip

  Scenario: User creates a trip successfully
    Given I am on the login page
    When I login with email "user.re@gmail.com" and password "Test@123"
    When I navigate to Travel and create a trip
    Then the trip should be created successfully