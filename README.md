# npm-publish-safe-latest

[![npm-version][npm-version-badge]][npm-version-href]
[![build-status][build-status-badge]][build-status-href]
[![dependencies][dependencies-badge]][dependencies-href]
[![dev-dependencies][dev-dependencies-badge]][dev-dependencies-href]


npm publish, but doesn't set the "latest" dist-tag to pre-release versions.

See related [npm issue](https://github.com/npm/npm/issues/13248).

Installation: `npm install npm-publish-safe-latest --save-dev`


### Example Usage #1

Here's an example workflow for publishing with `npm-publish-safe-latest`:

```text
$ git commit -am 'Lots of breaking changes as a v2 major release candidate'
[v2-release-candidate 469d6f9] Lots of breaking changes as a major release candidate
 100 files changed, 10000000 insertions(+), 0 deletions(-)

$ npm version premajor
v2.0.0-0

$ ./node_modules/.bin/npm-publish-safe-latest
Publishing with dist-tag pre-release
+ @scott113341/my-module@v2.0.0-0
```

Notice how our `dist-tag` was set to `pre-release` instead of `latest`?  That's good.  If we had used `npm publish` instead:

* Our `latest` `dist-tag` **would** have been set to `v2.0.0-0`
* Anyone running `npm install my-module` **would** have gotten our unstable `v2.0.0-0` release candidate

Disaster averted!


### Example Usage #2

Let's say you want to get crazy and automatically publish stuff after you version your package.  In your `package.json`:

```text
{
  // ...
  "scripts": {
    "preversion": "npm run test",
    "postversion": "npm-publish-safe-latest && git push --follow-tags",
    "test": "node test/index.js"
  },
  // ...
}
```

That's pretty cool.  So let's say you run `npm version premajor`.  Here's what'll happen:

1. Tests run.  The entire process is aborted if they fail.
1. The package version gets bumped a major pre-release version (to something like `v2.0.0-0`)
1. The package is published.  Since it's a pre-release version, the `dist-tag` is set to `pre-release` instead of `latest`
1. Changes (including tags) are pushed to your git origin


### Full Usage

```usage
usage: npm-publish-safe-latest [not-latest-tag] [-- options...]

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
