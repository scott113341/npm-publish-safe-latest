#!/usr/bin/env node
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var spawnSync = require('child_process').spawnSync;
var fs = require('fs');
var path = require('path');
var semver = require('semver');

var parseArgs = require('./parse-args.js');

var packageJsonPath = path.join(process.cwd(), 'package.json');
var packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
var version = packageJson.version;

var _parseArgs = parseArgs(process.argv.slice(2));

var _parseArgs$notLatestT = _parseArgs.notLatestTag;
var notLatestTag = _parseArgs$notLatestT === undefined ? 'pre-release' : _parseArgs$notLatestT;
var _parseArgs$npmPublish = _parseArgs.npmPublishArgs;
var npmPublishArgs = _parseArgs$npmPublish === undefined ? [] : _parseArgs$npmPublish;


if (semver.prerelease(version)) {
  console.log('Publishing with dist-tag ' + notLatestTag);
  run('npm', ['publish'].concat(_toConsumableArray(npmPublishArgs), ['--tag', notLatestTag]));
} else {
  console.log('Publishing with default dist-tag');
  run('npm', ['publish'].concat(_toConsumableArray(npmPublishArgs)));
}

function run(cmd, args) {
  spawnSync(cmd, args, { stdio: [0, 1, 2] });
}