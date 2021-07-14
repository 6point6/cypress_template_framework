Feature: login to Application

Background:
    Given I navigate to the home page
    When I click on signin button

Scenario: Successfully login to application
  When I login using the following credentials
      | username | password |
  Then I should see the homepage

  Scenario Outline: Unsuccessfully login to application using invalid username or password
    When I login using the following credentials
      | <username> | <password> |
    Then I should see an error message
    Examples:
      | username | password |
      | england  | password |
      | username | england  |