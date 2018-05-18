Feature: Standing Order Service Request API

  Scenario Outline: Verify API returns the correct response when standing order service request is created
    When I set the header x-fapi-financial-id to <x-fapi-financial-id>
    And I set the header x-fapi-customer-last-logged-time to <x-fapi-customer-last-logged-time>
    And I set the header x-fapi-interaction-id to <x-fapi-interaction-id>
    And I set the header x-lbg-brand to <x-lbg-brand>
    And I set the header x-lbg-channel to <x-lbg-channel>
    And I set the header x-lbg-txn-correlation-id to <x-lbg-txn-correlation-id>
    And I set the header x-lbg-client-id to <x-lbg-client-id>
    And I set the header x-lbg-client-app-name to <x-lbg-client-app-name>
    And I set the header x-lbg-ob-tpp-ssa-id to <x-lbg-ob-tpp-ssa-id>
    And I set the header x-lbg-ob-tpp-org-id to <x-lbg-ob-tpp-org-id>
    And I make a request to create a standing order service request
    Then I should receive the status code <statusCode>

    Examples:
      | x-fapi-financial-id | x-fapi-customer-last-logged-time | x-fapi-interaction-id | x-lbg-brand | x-lbg-channel | x-lbg-txn-correlation-id | x-lbg-client-id | x-lbg-client-app-name | x-lbg-ob-tpp-ssa-id | x-lbg-ob-tpp-org-id | statusCode |
      | test | Sun, 10 Sep 2017 19:43:31 UTC | 12345 | LYDS | RC | test | test | test | test | 12345 | 201 |
