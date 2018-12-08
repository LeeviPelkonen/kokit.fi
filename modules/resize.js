   'use strict';

const sharp = require('sharp');

const doResize = (pathToFile, width, fileName) => {
  return sharp(pathToFile)
  .resize(width)
  .toFile(fileName)
  .then(result => {
    console.log(result);
    return result;
  });
};

module.exports = {
  doResize: doResize,
};