/*
 * fis3-lint-eslint-noisy
 * fisker Cheung<lionkay@gmail.com>
 */

'use strict';

var CLIEngine = require('eslint').CLIEngine;
var formatter = CLIEngine.getFormatter();
var assign = require('lodash.assign');
var log = (global.fis && fis.log) || console;

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }
  var config = assign({}, conf);
  var cli = new CLIEngine(config);

  if (cli.isPathIgnored(file.realpath)) {
    return;
  }
  var report = cli.executeOnText(content, file.realpath);

  if (config.fix) {
    CLIEngine.outputFixes(report);
  }

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

module.exports.defaultOptions = {
  envs: ['browser'],
  fix: false,
  useEslintrc: true
};
