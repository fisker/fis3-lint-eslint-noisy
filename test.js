/*
 * fis3-lint-eslint-noisy
 * fisker Cheung<lionkay@gmail.com>
 */

var linter = require('./')

var testCode = '0 == 0'
var rules = {
  useEslintrc: false,
  rules: {
    eqeqeq: 1
  }
}
var file = {
  id: 'test.js',
  realpath: 'test.js'
}

linter(testCode, file, rules)

console.log('should see one warning.')
