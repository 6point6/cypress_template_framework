Feature: login to Application

Background:
    Given I navigate to the home page
    When I click on signin button

Scenario: Successfully login to application
   And I enter credentials "username" "password" and click on submit
   Then I should see the homepage 

Scenario Outline: UnSuccessfully login to application using invalid username or password
   And I enter credentials "<username>" "<password>" and click on submit
   Then I should see an error message

   Examples:
     |username|password|
     |england |password|
     |username|england | 