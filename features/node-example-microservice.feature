Feature: Node Example Microservice API

  Scenario Outline: Verify API returns 400 for invalid request to /users/<id>
    Given user with ID <id> exists with todos
    When I request user with ID <id>
    Then I should receive the status code <statusCode>

    Examples:
      | id | statusCode |
      | 1 | 400 |

  Scenario Outline: Verify API returns correct response to /users/<id>
    Given user with ID <id> exists with todos
    When I set the header x-lbg-txn-correlation-id to <x-lbg-txn-correlation-id>
    And I set the header x-lbg-brand to <x-lbg-brand>
    And I set the header x-lbg-channel to <x-lbg-channel>
    And I request user with ID <id>
    Then I should receive the status code <statusCode>
    And I should receive the response body <body>

    Examples:
      | id | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel | statusCode | body |
      | 1 | 12345 | LYDS | RC | 200 | user-get |

  Scenario Outline: Verify API returns 400 for invalid request to /users
    Given user with ID <id> exists with todos
    When I request all users
    Then I should receive the status code <statusCode>

    Examples:
      | id | statusCode |
      | 1 | 400 |

  Scenario Outline: Verify API returns correct response to /users
    Given user with ID <id> exists with todos
    When I set the header x-lbg-txn-correlation-id to <x-lbg-txn-correlation-id>
    And I set the header x-lbg-brand to <x-lbg-brand>
    And I set the header x-lbg-channel to <x-lbg-channel>
    And I request all users
    Then I should receive the status code <statusCode>
    And I should receive the response body <body>

    Examples:
      | id | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel | statusCode | body |
      | 1 | 12345 | LYDS | RC | 200 | user-list |

