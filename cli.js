'use strict';

// Libs
var fs = require('fs');
var assert = require('assert');

// Internal
var utils = require('./lib/utils');
var run = require('./lib/run');

// node cli.js problem
var problem = process.argv.slice(2)[0];

if(!problem) {
  console.error('\t- You must specify a problem');
  return process.exit(1);
}

var runFile = './problems/' + problem + '/' + problem + '.js';
var testFile = './problems/' + problem + '/' + problem + '.test';

fs.readFile(testFile, function(err, data) {
  if(err) {
    throw err;
  }

  var tests = utils.parseTestSuite(data.toString());

  tests.forEach(function(test) {
    run(runFile, test.input, function(result) {
      assert.equal(test.output, result);
      console.log('OK!');
    });
  });
});
