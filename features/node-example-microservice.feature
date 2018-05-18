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
    And I should receive a user with ID <id> and todos

    Examples:
      | id | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel | statusCode |
      | 1 | 12345 | LYDS | RC | 200 |

  Scenario Outline: Verify API returns error response when downstream call to /users/<id> fails
    Given user with ID <id> throws an error from downstream system with statusCode <statusCode>, error code <errorCode> and message "<message>"
    When I set the header x-lbg-txn-correlation-id to <x-lbg-txn-correlation-id>
    And I set the header x-lbg-brand to <x-lbg-brand>
    And I set the header x-lbg-channel to <x-lbg-channel>
    And I request user with ID <id>
    Then I should receive the status code <statusCode>
    And I should receive an error response with status code <statusCode>, error code <errorCode> and message "<message>"

    Examples:
      | id | statusCode | errorCode | message | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel |
      | 1 | 400 | BOILERPLATE_API_ERR_003 | API error | 12345 | LYDS | RC |

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
    And I should receive a list of users containing ID <id> and todos

    Examples:
      | id | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel | statusCode |
      | 1 | 12345 | LYDS | RC | 200 |

  Scenario Outline: Verify API returns error response when downstream call to /users fails
    Given retrieving all users throws an error from downstream system with statusCode <statusCode>, error code <errorCode> and message "<message>"
    When I set the header x-lbg-txn-correlation-id to <x-lbg-txn-correlation-id>
    And I set the header x-lbg-brand to <x-lbg-brand>
    And I set the header x-lbg-channel to <x-lbg-channel>
    And I request all users
    Then I should receive the status code <statusCode>
    And I should receive an error response with status code <statusCode>, error code <errorCode> and message "<message>"

    Examples:
      | statusCode | errorCode | message | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel |
      | 400 | BOILERPLATE_API_ERR_003 | API error | 12345 | LYDS | RC |



