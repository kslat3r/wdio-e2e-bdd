const reporter = require('cucumber-html-reporter');

const currentTime = new Date().toJSON().replace(/:/g, '-');

const path = `${__dirname}/reports`;
const jsonFile = `${path}/cucumber-report.json`;
const output = `${path}/${currentTime}.html`;

reporter.generate({
  theme: 'bootstrap',
  jsonFile,
  output,
  launchReport: false
});
