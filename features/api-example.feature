Feature: API example

  Scenario Outline: Verify API returns 400 for invalid request
    Given I create the stub <userStub> on node-example-microservice-mock
    And I create a GET request to <endpoint> on node-example-microservice
    And I make the request
    Then I should receive the status code <statusCode>

    Examples:
      | userStub | endpoint | statusCode |
      | user/id | /users/1 | 400 |

  Scenario Outline: Verify API returns the correct response if downstream system returns response
    Given I create the stub <userStub> on node-example-microservice-mock
    And I create the stub <todoStub> on node-example-microservice-mock
    And I create a GET request to <endpoint> on node-example-microservice
    And I set the header x-lbg-txn-correlation-id to <x-lbg-txn-correlation-id>
    And I set the header x-lbg-brand to <x-lbg-brand>
    And I set the header x-lbg-channel to <x-lbg-channel>
    And I make the request
    Then I should receive the status code <statusCode>
    And I should receive the response body <body>

    Examples:
      | userStub | todoStub | endpoint | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel | statusCode | body |
      | user/id | todo/userId | /users/1 | 12345 | LYDS | RC | 200 | user-get |
      | user/id-error | todo/userId | /users/2 | 12345 | LYDS | RC | 400 | user-get-error |

  Scenario Outline: Verify API returns 400 for invalid request
    Given I create the stub <usersStub> on node-example-microservice-mock
    And I create a GET request to <endpoint> on node-example-microservice
    And I make the request
    Then I should receive the status code <statusCode>

    Examples:
      | usersStub | endpoint | statusCode |
      | user/list | /users | 400        |

  Scenario Outline: Verify API returns the correct response if downstream system returns response
    Given I create the stub <usersStub> on node-example-microservice-mock
    And I create the stub <todosStub> on node-example-microservice-mock
    And I create a GET request to <endpoint> on node-example-microservice
    And I set the header x-lbg-txn-correlation-id to <x-lbg-txn-correlation-id>
    And I set the header x-lbg-brand to <x-lbg-brand>
    And I set the header x-lbg-channel to <x-lbg-channel>
    And I make the request
    Then I should receive the status code <statusCode>
    And I should receive the response body <body>

    Examples:
      | usersStub | todosStub | endpoint | x-lbg-txn-correlation-id | x-lbg-brand | x-lbg-channel | statusCode | body |
      | user/list | todo/list | /users | 12345 | LYDS | RC | 200 | user-list |
      | user/list-error | todo/list | /users | 12345 | LYDS | BB | 400 | user-list-error |

