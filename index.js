/*
 * fis3-lint-eslint-noisy
 * fisker Cheung<lionkay@gmail.com>
 */

var CLIEngine = require('eslint').CLIEngine;
var formatter = CLIEngine.getFormatter();
var cli;

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }

  if (!cli) {
    var config = Object.assign({}, conf);
    delete config.filename;
    if (!Object.keys(config).length) {
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
