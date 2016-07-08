/*
 * fis3-lint-eslint-noisy
 * fisker Cheung<lionkay@gmail.com>
 */

var CLIEngine = require('eslint').CLIEngine;
var formatter = CLIEngine.getFormatter();
var cli;

if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }

  if (!cli) {
    var config = Object.assign({}, conf);
    delete config.filename;
    if (!Object.keys(config).lengths) {
      config = {
        useEslintrc: true
      };
    }

    cli = new CLIEngine(config);
  }

  if (cli.isPathIgnored(file.realpath)) {
    return;
  }

  var report = cli.executeOnText(content, file.realpath);

  if (report.errorCount || report.warningCount ) {
    fis.log.warn(
      '[%s] lint failed: \n %s',
      file.id,
      formatter(report.results)
    );
    if (report.errorCount) {
      process.exit(1);
    }
  }
};
