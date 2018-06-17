'use strict';

const spawn = require('child_process').spawn;

module.exports = function (file, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  if (!opts) { opts = {}; }

  const ed = /^win/.test(process.platform) ? 'notepad' : 'vim';
  const editor = opts.editor || process.env.VISUAL || process.env.EDITOR || ed;
  const args = editor.split(/\s+/);
  const bin = args.shift();

  const ps = spawn(bin, args.concat([file]), { stdio: 'inherit' });

  ps.on('exit', (code, sig) => {
    if (typeof cb === 'function') { cb(code, sig); }
  });
};
