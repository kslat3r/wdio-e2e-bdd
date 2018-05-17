Feature: Google

  Scenario: Search
    Given I navigate to Google
    When I perform a search
    Then the browser title should be correct
