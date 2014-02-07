'use strict';

var eachAsync = require('each-async');
var specialHtml = require('special-html');

module.exports = function (grunt) {
  grunt.registerMultiTask('special-html', 'Converts special UTF-8 characters in a string to their HTML escape code equivalents.', function () {
    eachAsync(this.files, function (el, i, next) {
      grunt.file.write(el.dest, specialHtml(grunt.file.read(el.src[0])));
      next();
    });
  });
};