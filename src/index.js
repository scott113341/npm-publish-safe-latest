'use strict';

const spawnSync = require('child_process').spawnSync;
const fs = require('fs');
const path = require('path');
const semver = require('semver');

const parseArgs = require('./parse-args.js');


const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
const version = packageJson.version;

const {
  notLatestTag = 'pre-release',
  npmPublishArgs = [],
} = parseArgs(process.argv.slice(2));

if (semver.prerelease(version)) {
  run('npm', ['publish', ...npmPublishArgs, '--tag', notLatestTag]);
}
else {
  run('npm', ['publish', ...npmPublishArgs]);
}


function run(cmd, args) {
  spawnSync(cmd, args, { stdio: [0,1,2] });
}
