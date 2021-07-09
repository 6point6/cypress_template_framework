Feature: Fill and send feedback form

Background:
    Given I navigate to the feedback page
    When I fill the feedback form

    Scenario: Successfully submit feedback form
        And I click on send button
        Then I can see the form has been submitted
         
    Scenario: Clear all entered input in all fields
        And I click on clear button
        Then All fields are cleared and previously entered text deleted 