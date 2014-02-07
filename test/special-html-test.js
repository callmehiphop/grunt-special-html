'use strict';

var grunt = require('grunt');

exports['special-html'] = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  test: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test.html');
    var expected = grunt.file.read('test/expected/test.html');
    test.equal(actual, expected, 'should convert special characters to ascii.');

    test.done();
  }
};
