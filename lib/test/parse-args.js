'use strict';

var test = require('tape');

var parseArgs = require('../parse-args.js');

test('no args', function (t) {
  t.deepEqual(parseArgs([]), {
    notLatestTag: undefined,
    npmPublishArgs: undefined
  });
  t.end();
});

test('tag', function (t) {
  t.deepEqual(parseArgs(['yolo']), {
    notLatestTag: 'yolo',
    npmPublishArgs: undefined
  });
  t.end();
});

test('arg', function (t) {
  t.deepEqual(parseArgs(['--', 'yolo']), {
    notLatestTag: undefined,
    npmPublishArgs: ['yolo']
  });
  t.end();
});

test('args', function (t) {
  t.deepEqual(parseArgs(['--', '--yolo', 'swag']), {
    notLatestTag: undefined,
    npmPublishArgs: ['--yolo', 'swag']
  });
  t.end();
});

test('tag + args', function (t) {
  t.deepEqual(parseArgs(['yee', '--', '--yolo', 'swag']), {
    notLatestTag: 'yee',
    npmPublishArgs: ['--yolo', 'swag']
  });
  t.end();
});

test('tags + args', function (t) {
  t.deepEqual(parseArgs(['yee', 'zee', '--', '--yolo', 'swag']), {
    notLatestTag: 'yee',
    npmPublishArgs: ['--yolo', 'swag']
  });
  t.end();
});