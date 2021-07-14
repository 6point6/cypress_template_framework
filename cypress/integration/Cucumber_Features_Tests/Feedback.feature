Feature: Fill and send feedback form

  Background:
    Given I have navigated to the feedback page
    And I have filled in the feedback form with the following details
      | Name       | Email              | Subject | Body                |
      | John Smith | jsmith@example.com | Testing | This is just a test |

    Scenario: Successfully submit feedback form
        And I click on send button
        Then I can see the form has been submitted
         
    Scenario: Clear all entered input in all fields
        And I click on clear button
        Then All fields are cleared and previously entered text deleted 