# npm-publish-safe-latest

[![npm-version][npm-version-badge]][npm-version-href]
[![build-status][build-status-badge]][build-status-href]
[![dependencies][dependencies-badge]][dependencies-href]
[![dev-dependencies][dev-dependencies-badge]][dev-dependencies-href]


npm publish, but doesn't set the "latest" dist-tag to pre-release versions.

See related [issue](https://github.com/npm/npm/issues/13248).


```usage
usage: npm-publish-safe-latest [not-latest-tag] [-- [options...]]

not-latest-tag
  the dist-tag if the version being published is a pre-release version
  default: "pre-release"

options
  arguments that will be forwarded to `npm publish`
```


[npm-version-badge]: https://img.shields.io/npm/v/npm-publish-safe-latest.svg?style=flat-square
[npm-version-href]: https://www.npmjs.com/package/npm-publish-safe-latest

[build-status-badge]: https://img.shields.io/travis/scott113341/npm-publish-safe-latest/master.svg?style=flat-square
[build-status-href]: https://travis-ci.org/scott113341/npm-publish-safe-latest/branches

[dependencies-badge]: https://img.shields.io/david/scott113341/npm-publish-safe-latest/master.svg?style=flat-square
[dependencies-href]: https://david-dm.org/scott113341/npm-publish-safe-latest/master#info=dependencies

[dev-dependencies-badge]: https://img.shields.io/david/dev/scott113341/npm-publish-safe-latest/master.svg?style=flat-square
[dev-dependencies-href]: https://david-dm.org/scott113341/npm-publish-safe-latest/master#info=devDependencies
