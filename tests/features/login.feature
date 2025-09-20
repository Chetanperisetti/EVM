Feature: Login and Dashboard
  @login
  Scenario: Successful login should take user to dashboard
    Given I am on the login page
    When I login with email "user.re@gmail.com" and password "Test@123"
    Then I should see the dashboard page