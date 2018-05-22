Feature: Standing Order Service Request API

  Scenario: Verify API returns the correct response when standing order service request is created
    When I create a standing order service request with default headers for brand "LYDS"
    Then I should receive the status code 201
    And I should receive a standing order service request response

  Scenario: Verify API returns the correct status code when standing order service request payment amounts are different
    When I create a standing order service request that has different payment amounts with default headers for brand "LYDS"
    Then I should receive the status code 400

  Scenario: Verify API returns the correct status code when standing order service request payment date/times are different
    When I create a standing order service request that has different payment date/times with default headers for brand "LYDS"
    Then I should receive the status code 400
