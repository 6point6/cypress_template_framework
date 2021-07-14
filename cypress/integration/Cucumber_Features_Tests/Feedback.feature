Feature: Fill and send feedback form

  Background:
    Given I have navigated to the feedback page
    And I have filled in the feedback form with the following details
      | Name       | Email              | Subject | Body                |
      | John Smith | jsmith@example.com | Testing | This is just a test |

  Scenario: Successfully submit feedback form
    When I click on the "Send Message" button
    Then I can see the form has been submitted
    And the following message is displayed
    """
    Thank you for your comments, John Smith. They will be reviewed by our
    Customer Service staff and given the full attention that they deserve.
    """

  Scenario: Clear all entered input in all fields
    When I click on the "Clear" button
    Then all fields are cleared and previously entered text deleted