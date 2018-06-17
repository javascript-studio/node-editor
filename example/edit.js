'use strict';

const editor = require('../');
editor(`${__dirname}/beep.json`, (code) => {
  console.log(`finished editing with code ${code}`);
});
