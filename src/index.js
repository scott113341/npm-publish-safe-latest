#!/usr/bin/env node

const spawnSync = require('child_process').spawnSync;
const fs = require('fs');
const pkgUp = require('pkg-up');
const semver = require('semver');

const parseArgs = require('./parse-args.js');


const packageJsonPath = pkgUp.sync();
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
const version = packageJson.version;

const {
  notLatestTag = 'pre-release',
  npmPublishArgs = [],
} = parseArgs(process.argv.slice(2));

if (semver.prerelease(version)) {
  console.log(`Publishing with dist-tag ${notLatestTag}`);
  run('npm', ['publish', ...npmPublishArgs, '--tag', notLatestTag]);
}
else {
  console.log(`Publishing with default dist-tag`);
  run('npm', ['publish', ...npmPublishArgs]);
}


function run(cmd, args) {
  spawnSync(cmd, args, { stdio: [0,1,2] });
}
