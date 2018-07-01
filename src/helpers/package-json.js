'use strict';

const fs = require('fs');
const path = require('path');

const packageInfoPath = path.join(process.cwd(), 'package.json');

function getPackageInfo() {
  return JSON.parse(fs.readFileSync(packageInfoPath, 'utf8'));
}

function updatePackageInfo(updater) {
  writePackageInfo(updater(getPackageInfo()));
}

function writePackageInfo(data) {
  fs.writeFileSync(packageInfoPath, JSON.stringify(data, null, 2));
}

module.exports = {
  getPackageInfo,
  updatePackageInfo,
  writePackageInfo
};