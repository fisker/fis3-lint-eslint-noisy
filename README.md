# fis3-lint-eslint-noisy
a js linter plugin of fis3 based on eslint

[![npm](https://img.shields.io/npm/v/fis3-lint-eslint-noisy.svg?style=flat-square)](https://www.npmjs.com/package/fis3-lint-eslint-noisy) 
[![npm](https://img.shields.io/npm/dt/fis3-lint-eslint-noisy.svg?style=flat-square)](https://www.npmjs.com/package/fis3-lint-eslint-noisy) 
[![npm](https://img.shields.io/npm/dm/fis3-lint-eslint-noisy.svg?style=flat-square)](https://www.npmjs.com/package/fis3-lint-eslint-noisy)

## about package name
i called this package `noisy` is because the other eslint plugins for fis all silencely failed when error report by eslint.

## usage

    $ npm i -g fis3-lint-eslint-noisy

```
// fis-conf.js

// this will use eslintrc file  (Recommended)
fis.match('*.js', {
  lint: fis.plugin('eslint-noisy')
});


// or inline rules
var eslintConf = {
  // ... rules
};

fis.match('*.js', {
  lint: fis.plugin('eslint-noisy', eslintConf)
});
```

[more options](http://eslint.org/docs/rules/)

## links
fis3: [http://fis.baidu.com/](http://fis.baidu.com/)

htmlhint: [http://eslint.org/](http://eslint.org/)
