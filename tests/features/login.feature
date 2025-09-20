Feature: Login and Dashboard

  @login
  Scenario: Successful login should take user to dashboard
    Given I am on the login page
    And I enter the email "user@example.com" in the username field
    And I enter the password "password123" in the password field
    When I click on the Login with Password button
    Then I should be navigated to the dashboard page
    And I should see the flight details card
    And I should see 6 dashboard sections
    And I should see the company logo
    And I should see the "TRAVEL" section
    And I should see the "EXPENSES" section
    And I should see the user profile dropdown
