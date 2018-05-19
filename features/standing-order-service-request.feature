Feature: Standing Order Service Request API

  Scenario Outline: Verify API returns the correct response when standing order service request is created
    When I set the default headers for standing order service request API
    And I make the request to create a standing order service request
    Then I should receive the status code <statusCode>

    Examples:
      | statusCode |
      | 201 |

