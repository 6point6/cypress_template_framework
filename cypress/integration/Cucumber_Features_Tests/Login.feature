Feature: login to Application

  Background:
    Given I have navigated to the home page
    And I have clicked on the "Signin" button

Scenario: Successfully login to application
  When I login using the following credentials
      | username | password |
  Then I should see the homepage

  Scenario Outline: Unsuccessfully login to application using invalid username or password
    When I login using the following credentials
      | <username> | <password> |
    Then I should see an error message of "Login and/or password are wrong."
    Examples:
      | username | password |
      | england  | password |
      | username | england  |