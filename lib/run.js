'use strict';

var childProcess = require('child_process');

module.exports = function(runFile, input, cb) {
  var child = childProcess.spawn('node', [runFile]);
  var output = '';

  child.stdout.on('data', function(data) {
    output += data;
  });

  child.on('close', function() {
    output = output.trim();
    cb(output);
  });

  child.stdin.write(input);
  child.stdin.end();
}
