/*
 * fis3-lint-eslint-noisy
 * fisker Cheung<lionkay@gmail.com>
 */

'use strict';

var CLIEngine = require('eslint').CLIEngine;
var formatter = CLIEngine.getFormatter();
var cli;
var assign = require('lodash.assign');
var keys = require('lodash.keys');
var log = (global.fis && fis.log) || console;

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }

  if (!cli) {
    var config = assign({}, conf);
    delete config.filename;
    if (!keys(config).length) {
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
    log.warn(
      '[%s] lint failed: \n %s',
      file.id,
      formatter(report.results)
    );
    if (report.errorCount) {
      process.exit(1);
    }
  }
};
