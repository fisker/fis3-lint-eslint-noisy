# fis3-lint-eslint-noisy
a js linter plugin of fis3 based on eslint

[![npm](https://img.shields.io/npm/v/fis3-lint-eslint-noisy.svg?style=flat-square)](https://www.npmjs.com/package/fis3-lint-eslint-noisy) 
[![npm](https://img.shields.io/npm/dt/fis3-lint-eslint-noisy.svg?style=flat-square)](https://www.npmjs.com/package/fis3-lint-eslint-noisy) 
[![npm](https://img.shields.io/npm/dm/fis3-lint-eslint-noisy.svg?style=flat-square)](https://www.npmjs.com/package/fis3-lint-eslint-noisy)

## about package name
i named this package `noisy` is because the other eslint plugins for fis all silently failed when error report by eslint.

## usage

    $ npm i -g fis3-lint-eslint-noisy

```
// fis-conf.js

var eslintConf = {}; 

fis.match('*.js', {
  lint: fis.plugin('eslint-noisy', eslintConf)
});

```

## about eslintConf
eslintConf will pass througth eslint `CLIEngine` constructor, available options are list here: [http://eslint.org/docs/developer-guide/nodejs-api#cliengine](http://eslint.org/docs/developer-guide/nodejs-api#cliengine)

this is changed in v0.2.0, by this change we can automatically fix some js codestyles by eslint.
```
// fis-conf.js

var exampleEslintConfToFixJs = {
  fix: true, // default:false, !!! be careful
  useEslintrc: true, // default:true
  rules: {
    // rules
  }
};
```

[more rules & fixable rules](http://eslint.org/docs/rules/)

## links
fis3: [http://fis.baidu.com/](http://fis.baidu.com/)
htmlhint: [http://eslint.org/](http://eslint.org/)
