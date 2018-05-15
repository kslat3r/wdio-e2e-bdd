Feature: UI example

  @ui
  Scenario Outline: Opens a URL
    Given I navigate to "<url>"
    When I input the text "<text>" into the element with CSS selector "<textSelector>"
    And I click the element with CSS selector "<buttonSelector>"
    Then the browser title should be "<browserTitle>"

    Examples:
      | url | text | textSelector | buttonSelector | browserTitle |
      | http://www.google.com | foobar | #lst-ib | #sbtc > div.gstl_0.sbdd_a > div:nth-child(2) > div.sbdd_b > div > ul > li:nth-child(11) > div > span:nth-child(1) > span > input | foobar - Google Search |
