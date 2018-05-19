Feature: Standing Order Service Request API

  Scenario: Verify API returns the correct response when standing order service request is created
    Given I set the default headers for standing order service request API
    When I create a standing order service request that is valid
    Then I should receive the status code 201
    And I should receive a standing order service request response that is valid

  Scenario: Verify API returns the correct status code when standing order service request payment amounts are different
    Given I set the default headers for standing order service request API
    When I create a standing order service request that has different payment amounts
    Then I should receive the status code 400

  Scenario: Verify API returns the correct status code when standing order service request payment date/times are different
    Given I set the default headers for standing order service request API
    When I create a standing order service request that has different payment date/times
    Then I should receive the status code 400
