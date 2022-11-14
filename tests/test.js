describe('duckduckgo example', function() {
    it('Search Nightwatch.js and check results', function(browser) {
      browser
        .navigateTo('https://practicetestautomation.com/practice-test-login/')
        .waitForElementVisible('#username')
        .sendKeys('#username', ['student'])
        .waitForElementVisible('#password')
        .sendKeys('#password', ['Password123'])
        .click('#submit')
        .assert.visible('#error')
        .assert.textContains('#error', 'Your username is invalid');
    }); 
  });