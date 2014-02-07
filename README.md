# grunt-special-html

> Converts special UTF-8 characters in a string to their HTML escape code equivalents.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-special-html --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-special-html');
```

## Usage Examples

```js
grunt.initConfig({
  'special-html': {
    compile: {
      files: {
        'dist/index.html': 'app/index.html',
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Licensed under the MIT license.
