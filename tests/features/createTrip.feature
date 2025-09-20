Feature: Travel - Trip Creation

  Background:
    Given I am on the login page
    And I enter the email "user.re@gmail.com" in the username field
    And I enter the password "Test@123" in the password field
    When I click on the Login with Password button
    Then I should be navigated to the dashboard page
    
  @trip
  Scenario: User creates a new trip and books a ticket
    Given I navigate to the dashboard
    And I click on the TRAVEL link
    Then I should be navigated to the trip creation page

    When I enter a random trip name
    And I select a travel mode
    And I select the trip start and end dates
    And I select a random reason
    And I choose a booking type
    And I select a project name if required
    And I fill the passenger details if required
    And I submit the trip
    And I book a ticket

    Then the trip should be created successfully
