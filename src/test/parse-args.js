const test = require('tape');

const parseArgs = require('../parse-args.js');


test('no args', t => {
  t.deepEqual(parseArgs([]), {
    notLatestTag: undefined,
    npmPublishArgs: undefined,
  });
  t.end();
});

test('tag', t => {
  t.deepEqual(parseArgs(['yolo']), {
    notLatestTag: 'yolo',
    npmPublishArgs: undefined,
  });
  t.end();
});

test('arg', t => {
  t.deepEqual(parseArgs(['--', 'yolo']), {
    notLatestTag: undefined,
    npmPublishArgs: ['yolo'],
  });
  t.end();
});

test('args', t => {
  t.deepEqual(parseArgs(['--', '--yolo', 'swag']), {
    notLatestTag: undefined,
    npmPublishArgs: ['--yolo', 'swag'],
  });
  t.end();
});

test('tag + args', t => {
  t.deepEqual(parseArgs(['yee', '--', '--yolo', 'swag']), {
    notLatestTag: 'yee',
    npmPublishArgs: ['--yolo', 'swag'],
  });
  t.end();
});

test('tags + args', t => {
  t.deepEqual(parseArgs(['yee', 'zee', '--', '--yolo', 'swag']), {
    notLatestTag: 'yee',
    npmPublishArgs: ['--yolo', 'swag'],
  });
  t.end();
});
