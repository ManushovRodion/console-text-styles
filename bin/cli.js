#!/usr/bin/env node
const lib = require('../dist/demo-console-text-styles.cjs.js');

try {
  lib.cli(process);
} catch (e) {
  console.error(e);
  process.exit(0);
}
