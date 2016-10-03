'use strict';

function parseTestSuite(data) {
  var tests = data.split('\n>testsuite\n');

  return tests.map(function(test) {
    test = test.split('\n>testcase\n');
    return {
      input: test[0].trim(),
      output: test[1].trim()
    };
  });
}

module.exports = {
  parseTestSuite: parseTestSuite
}
