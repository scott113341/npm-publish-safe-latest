'use strict';

function parseArgs(args) {
  var parsedArgs = {
    notLatestTag: undefined,
    npmPublishArgs: undefined
  };

  var forwardIndex = args.indexOf('--');

  if (forwardIndex !== 0) {
    parsedArgs.notLatestTag = args[0];
  }

  if (forwardIndex >= 0) {
    parsedArgs.npmPublishArgs = args.slice(forwardIndex + 1);
  }

  return parsedArgs;
}

module.exports = parseArgs;